import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Hotel } from "lucide-react";

const AutomationHotel = () => {
  return (
    <AutomationPageLayout
      badge="Automatizare Hotelieră AI România"
      title="Hotel, Pensiune"
      titleHighlight="Automatizat cu AI"
      description="Automatizare completă pentru hoteluri, pensiuni, moteluri: rezervări online cu AI, chatboți WhatsApp/Telegram, asistenți vocali, check-in digital. Scapă de comisioanele Booking.com și oferă experiență premium."
      icon={Hotel}
      stats={[
        { value: "95%", label: "Check-in Automat" },
        { value: "60%", label: "Reducere Costuri" },
        { value: "24/7", label: "AI Recepție" },
      ]}
      problems={[
        {
          problem: "💸 Comisioane 15-20% către Booking.com",
          solution: "Rezervări directe prin site propriu și AI",
          benefit: "Economii de 800€+/lună pentru 30 camere",
        },
        {
          problem: "⏰ Cozi la recepție pentru check-in",
          solution: "Check-in/check-out digital prin QR code",
          benefit: "Experiență premium fără așteptare",
        },
        {
          problem: "📞 Telefoane noaptea pentru rezervări",
          solution: "Chatbot AI răspunde 24/7 pe WhatsApp",
          benefit: "Nu mai pierzi rezervări din cauza programului",
        },
        {
          problem: "👥 Costuri mari cu personal recepție",
          solution: "AI recepționer pentru sarcini repetitive",
          benefit: "Reducere costuri operaționale cu 60%",
        },
      ]}
      features={[
        {
          title: "Rezervări Online Inteligente",
          description: "Sistem complet rezervări camere cu calendar real-time, selecție tipuri camere, prețuri dinamice și confirmare instantă.",
          highlight: "Rezervări 24/7 fără operator",
        },
        {
          title: "Chatboți AI WhatsApp & Telegram",
          description: "Asistenți AI care răspund la întrebări, fac rezervări, recomandă camere și oferă informații despre hotel în timp real.",
          highlight: "Support 24/7 automat pentru oaspeți",
        },
        {
          title: "Asistenți Vocali AI",
          description: "AI vocal pentru recepție care poate gestiona check-in/check-out, răspunde la întrebări și ghida oaspeții.",
          highlight: "Recepție AI care nu doarme niciodată",
        },
        {
          title: "Check-in/Check-out Digital",
          description: "Oaspeții se pot înregistra și părăsi hotelul prin QR code, fără cozi la recepție. Chei digitale mobile.",
          highlight: "Experiență premium fără așteptare",
        },
        {
          title: "Management Camere Automat",
          description: "Verificare disponibilitate real-time, assignment automat camere, pricing dinamic bazat pe sezon și ocupare.",
          highlight: "Optimizarea ocupării și profitului",
        },
        {
          title: "Recomandări Personalizate",
          description: "AI care recomandă camere bazat pe preferințe, istoricul oaspeților și feedback-ul anterior.",
          highlight: "Satisfacție crescută și upselling",
        },
      ]}
      pricing={{
        setup: "de la 900€",
        monthly: "de la 200€",
        implementation: "3-4 săptămâni",
        roi: "2-4 luni",
        features: [
          "Rezervări online AI complete",
          "Chatboți WhatsApp & Telegram",
          "Asistenți vocali AI",
          "Check-in/check-out digital",
          "Management camere automat",
          "Analytics și raportare",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Booking.com", "Airbnb", "Hotels.com"],
        rows: [
          { feature: "0% Comisioane", us: true, competitors: [false, false, false] },
          { feature: "Chatbot AI în română", us: true, competitors: [false, false, false] },
          { feature: "Check-in digital", us: true, competitors: [false, "limited", false] },
          { feature: "Control total date oaspeți", us: true, competitors: [false, false, false] },
          { feature: "Pricing dinamic propriu", us: true, competitors: [false, "limited", false] },
          { feature: "Integrare PMS", us: true, competitors: ["limited", false, false] },
        ],
      }}
      ctaTitle="Transformă-ți Hotelul în 3-4 Săptămâni"
      ctaDescription="Alătură-te hotelurilor care au automatizat complet operațiunile cu AI. Rezervări 24/7, check-in instant, chatboți inteligenți - experiență premium pentru oaspeți."
    />
  );
};

export default AutomationHotel;
