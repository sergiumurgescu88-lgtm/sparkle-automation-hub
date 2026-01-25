import AutomationPageLayout from "@/components/AutomationPageLayout";
import { MessageCircle } from "lucide-react";

const AutomationChatbot = () => {
  return (
    <AutomationPageLayout
      badge="AI Conversațional în Română"
      title="Chatboți AI pentru"
      titleHighlight="WhatsApp & Telegram"
      description="Asistent AI inteligent care vorbește perfect româna și automatizează customer service-ul. Disponibil 24/7 pe WhatsApp Business și Telegram. Reducă costurile cu 75% și crește satisfacția clienților."
      icon={MessageCircle}
      stats={[
        { value: "< 2s", label: "Timp Răspuns" },
        { value: "24/7", label: "Disponibilitate" },
        { value: "75%", label: "Reducere Costuri" },
      ]}
      problems={[
        {
          problem: "📞 Personal ocupat cu întrebări repetitive",
          solution: "Chatbot răspunde la 80% din întrebări automat",
          benefit: "Echipa se concentrează pe clienții importanți",
        },
        {
          problem: "🌙 Pierzi clienți după program de lucru",
          solution: "Disponibilitate 24/7 pentru comenzi și programări",
          benefit: "Creștere venituri cu 25% din comenzi nocturne",
        },
        {
          problem: "😤 Clienții se enervează să aștepte răspuns",
          solution: "Răspuns instant în maximum 2 secunde",
          benefit: "Satisfacție clienți crescută cu 90%",
        },
        {
          problem: "💸 Costuri mari cu personal customer service",
          solution: "Reducere costuri operaționale cu 75%",
          benefit: "Economii de 1,500-2,000€ lunar",
        },
      ]}
      features={[
        {
          title: "Conversații Naturale AI",
          description: "Chatbot care înțelege perfect româna și răspunde ca un om adevărat. Training personalizat pe afacerea ta.",
          highlight: "Experiență client autentică",
        },
        {
          title: "Disponibilitate 24/7/365",
          description: "Niciodată nu mai pierzi un client. Răspunde instant la întrebări oricând, chiar și în weekend sau sărbători.",
          highlight: "Zero pierderi de clienți",
        },
        {
          title: "WhatsApp Business + Telegram",
          description: "Integrare completă pe platformele preferate de români. Un singur chatbot pentru ambele aplicații.",
          highlight: "Maximum reach și convenience",
        },
        {
          title: "Escalare la Om Când Trebuie",
          description: "AI-ul știe când să transfere conversația la echipa ta pentru situații complexe sau sensibile.",
          highlight: "Perfect balance automat-uman",
        },
        {
          title: "Învățare Continuă",
          description: "Chatbotul devine mai inteligent cu fiecare conversație. Actualizări AI automate și îmbunătățiri constante.",
          highlight: "Performanță în creștere constantă",
        },
        {
          title: "Analytics și Insights",
          description: "Rapoarte detaliate: întrebări frecvente, satisfacție clienți, conversii, timpul de răspuns și multe altele.",
          highlight: "Optimizare bazată pe date",
        },
      ]}
      pricing={{
        setup: "de la 600€",
        monthly: "de la 150€",
        implementation: "2-4 săptămâni",
        roi: "1-2 luni",
        features: [
          "Analiza conversații existente",
          "Training AI personalizat pe business",
          "Integrare WhatsApp & Telegram",
          "Dashboard analytics complet",
          "Training echipa ta",
          "Support tehnic 24/7",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Chatfuel", "ManyChat", "Custom Dev"],
        rows: [
          { feature: "Conversații în Română", us: true, competitors: ["limited", "limited", "manual"] },
          { feature: "WhatsApp Business API", us: true, competitors: [true, "paid", "manual"] },
          { feature: "Telegram Integration", us: true, competitors: [false, false, "manual"] },
          { feature: "Training Personalizat", us: true, competitors: ["basic", "basic", "manual"] },
          { feature: "Escalare la Om", us: true, competitors: ["basic", "basic", "manual"] },
          { feature: "Support în Română", us: true, competitors: [false, false, false] },
        ],
      }}
      ctaTitle="Automatizează Customer Service-ul Acum"
      ctaDescription="Hai să discutăm gratuit despre cum poate un chatbot AI să transforme comunicarea cu clienții tăi și să îți reducă costurile cu 75%."
    />
  );
};

export default AutomationChatbot;
