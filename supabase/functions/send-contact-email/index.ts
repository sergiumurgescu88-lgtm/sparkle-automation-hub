import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

class Resend {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendEmail(options: {
    from: string;
    to: string[];
    subject: string;
    html: string;
  }) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }
    
    return response.json();
  }
}

const resend = new Resend(RESEND_API_KEY || "");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  salon: "Automatizare Salon Înfrumusețare",
  medical: "Automatizare Cabinet Medical",
  restaurant: "Automatizare Restaurant",
  ai: "Automatizări Inteligență Artificială",
  public: "Automatizare Sector Public",
  retail: "Automatizare Magazine Retail",
  hotel: "Automatizare Hotel/Pensiune",
  chatbot: "Chatboți AI WhatsApp/Telegram",
  social: "Automatizare Social Media",
  imobiliare: "Automatizare Agenții Imobiliare",
  smb: "Automatizare Afaceri Mici/Mijlocii",
  delivery: "Servicii Livrare Premium",
  altele: "Altele",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      throw new Error("Toate câmpurile sunt obligatorii");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Adresa de email nu este validă");
    }

    // Validate phone format
    const phoneRegex = /^[\d\s+\-()]+$/;
    if (!phoneRegex.test(phone)) {
      throw new Error("Numărul de telefon nu este valid");
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 255 || phone.length > 20 || message.length > 1000) {
      throw new Error("Unul din câmpuri depășește lungimea maximă permisă");
    }

    const serviceName = serviceLabels[service] || service;

    // Send notification email to admin
    const adminEmailResponse = await resend.sendEmail({
      from: "MrDelivery AI <noreply@mrdelivery.ro>",
      to: ["contact@mrdelivery.ro"],
      subject: `Nouă Cerere de Ofertă - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .field-value { color: #1f2937; font-size: 16px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; }
            .footer { text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nouă Cerere de Ofertă</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nume</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Telefon</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Serviciu Solicitat</div>
                <div class="field-value">${serviceName}</div>
              </div>
              <div class="field">
                <div class="field-label">Mesaj</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              Trimis prin formularul de contact MrDelivery.ro
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.sendEmail({
      from: "MrDelivery AI <noreply@mrdelivery.ro>",
      to: [email],
      subject: "Am primit cererea ta de ofertă - MrDelivery",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .header h1 { color: white; margin: 0 0 10px 0; font-size: 28px; }
            .header p { color: rgba(255,255,255,0.9); margin: 0; font-size: 16px; }
            .content { background: #f9fafb; padding: 40px 30px; border-radius: 0 0 10px 10px; }
            .greeting { font-size: 18px; margin-bottom: 20px; }
            .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .next-steps { margin-top: 30px; }
            .next-steps h3 { color: #3b82f6; margin-bottom: 15px; }
            .next-steps ul { padding-left: 20px; }
            .next-steps li { margin-bottom: 10px; }
            .cta { text-align: center; margin-top: 30px; }
            .cta a { display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Mulțumim pentru interes!</h1>
              <p>Am primit cererea ta de ofertă</p>
            </div>
            <div class="content">
              <p class="greeting">Bună ${name},</p>
              <p>Îți mulțumim că ai ales MrDelivery AI Agency! Am primit cererea ta pentru <strong>${serviceName}</strong> și echipa noastră o analizează deja.</p>
              
              <div class="info-box">
                <strong>📋 Ce urmează?</strong>
                <p>Un specialist din echipa noastră te va contacta în cel mult <strong>2 ore</strong> (în timpul programului de lucru) pentru a discuta detaliile și a-ți oferi o soluție personalizată.</p>
              </div>
              
              <div class="next-steps">
                <h3>🎯 Între timp, poți:</h3>
                <ul>
                  <li>Vizita site-ul nostru pentru mai multe informații: <a href="https://mrdelivery.ro">mrdelivery.ro</a></li>
                  <li>Asculta podcast-ul nostru despre automatizări AI</li>
                  <li>Ne urmări pe rețelele sociale pentru noutăți</li>
                </ul>
              </div>
              
              <div class="cta">
                <a href="https://mrdelivery.ro">Vizitează Site-ul</a>
              </div>
            </div>
            <div class="footer">
              <p>MrDelivery AI Agency | București, România</p>
              <p>📞 +40 770 107 085 | ✉️ contact@mrdelivery.ro</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email-uri trimise cu succes" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
