import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Briefcase } from "lucide-react";

const AutomationSMB = () => {
  return (
    <AutomationPageLayout
      badge="Soluții pentru Orice Business"
      title="Automatizează"
      titleHighlight="Afacerile Mici & Mijlocii"
      description="Soluții de automatizare și digitalizare pentru orice tip de afacere mică sau mijlocie. Chatboți AI, automatizare procese, Power Web Apps și sisteme business personalizate. ROI mediu +340% în 6 luni."
      icon={Briefcase}
      stats={[
        { value: "60%", label: "Eficiență Crescută" },
        { value: "340%", label: "ROI Mediu" },
        { value: "6-10 săpt", label: "Implementare" },
      ]}
      problems={[
        {
          problem: "📞 Timp pierdut cu întrebări repetitive de la clienți",
          solution: "Chatbot AI personalizat pentru afacerea ta",
          benefit: "Disponibilitate 24/7, reducere costuri suport",
        },
        {
          problem: "📋 Procese manuale care consumă resurse",
          solution: "Automatizare fluxuri: facturare, comenzi, HR, inventar",
          benefit: "Eficiență crescută cu 60%, zero erori",
        },
        {
          problem: "📱 Lipsa unei aplicații mobile pentru echipă",
          solution: "Power Web Apps native pentru angajați și clienți",
          benefit: "Experiență mobilă profesională",
        },
        {
          problem: "🔗 Sisteme neconectate și date fragmentate",
          solution: "Integrări și API-uri pentru ecosistem digital unificat",
          benefit: "Date sincronizate automat între sisteme",
        },
      ]}
      features={[
        {
          title: "Chatboți AI Personalizați",
          description: "Asistenți virtuali pentru orice tip de business: răspunsuri la întrebări clienți, programări, suport tehnic, vânzări.",
          highlight: "Disponibilitate 24/7, reducere costuri",
        },
        {
          title: "Automatizare Procese",
          description: "Digitalizarea fluxurilor de lucru: facturare, comenzi, HR, inventar, rapoarte. Eliminarea task-urilor repetitive.",
          highlight: "Eficiență crescută cu 60%",
        },
        {
          title: "Power Web Apps",
          description: "Aplicații mobile native pentru angajați și clienți cu notificări push și funcționalități complete.",
          highlight: "Experiență mobilă profesională",
        },
        {
          title: "Sisteme Business Personalizate",
          description: "Platforme dezvoltate special pentru nevoile tale: CRM, ERP simplu, management proiecte, portal clienți.",
          highlight: "Soluții 100% pe măsură",
        },
        {
          title: "Integrări și API-uri",
          description: "Conectarea sistemelor existente: contabilitate, bănci, furnizori, clienți. Un ecosistem digital unificat.",
          highlight: "Date sincronizate automat",
        },
        {
          title: "Consultanță Digitalizare",
          description: "Analiză business, strategie digitalizare, implementare pas cu pas, training echipă.",
          highlight: "Transformare digitală completă",
        },
      ]}
      pricing={{
        setup: "de la 300€",
        monthly: "de la 50€",
        implementation: "6-10 săptămâni",
        roi: "3-6 luni",
        features: [
          "Chatbot AI simplu sau avansat",
          "Automatizare 1-5+ procese",
          "Portal clienți personalizat",
          "Power Web Apps opțional",
          "Integrări cu sistemele existente",
          "Suport tehnic în română",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Zapier", "Monday.com", "Custom Dev"],
        rows: [
          { feature: "Chatbot AI în română", us: true, competitors: [false, false, "manual"] },
          { feature: "Automatizare completă", us: true, competitors: ["limited", "basic", true] },
          { feature: "Apps mobile native", us: true, competitors: [false, "limited", true] },
          { feature: "Implementare rapidă", us: true, competitors: [true, true, false] },
          { feature: "Preț accesibil IMM", us: true, competitors: ["limited", "limited", false] },
          { feature: "Support în Română", us: true, competitors: [false, false, false] },
        ],
      }}
      ctaTitle="Transformă-ți Afacerea Digital"
      ctaDescription="Alătură-te afacerilor care au crescut eficiența cu 60% prin automatizare. Consultație gratuită pentru a înțelege exact ce îți trebuie."
    />
  );
};

export default AutomationSMB;
