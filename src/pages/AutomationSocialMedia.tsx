import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Share2 } from "lucide-react";

const AutomationSocialMedia = () => {
  return (
    <AutomationPageLayout
      badge="5 Platforme Automatizate"
      title="Automatizare"
      titleHighlight="Social Media AI"
      description="AI răspunde instant în română la toate comentariile pe YouTube, Instagram, Facebook, TikTok și LinkedIn. Programare inteligentă, moderare automată și analiză sentiment avansată."
      icon={Share2}
      stats={[
        { value: "300%", label: "Creștere Engagement" },
        { value: "80%", label: "Reducere Timp" },
        { value: "24/7", label: "Răspunsuri Active" },
      ]}
      problems={[
        {
          problem: "⏰ Ore întregi pierdute răspunzând la comentarii",
          solution: "AI răspunde instant în română la toate comentariile",
          benefit: "Economisești 80% din timpul petrecut pe social media",
        },
        {
          problem: "📅 Posts programate basic fără optimizare",
          solution: "Programare inteligentă la momentele cu cel mai mare reach",
          benefit: "Creștere reach organic cu 150%",
        },
        {
          problem: "📱 Managementul a 5 platforme devine copleșitor",
          solution: "Dashboard centralizat pentru toate cele 5 platforme",
          benefit: "Control total dintr-un singur loc",
        },
        {
          problem: "💬 Răspunsuri tardive = pierderea engagement-ului",
          solution: "Engagement automat 24/7 fără întrerupere",
          benefit: "Creștere engagement cu 300%",
        },
      ]}
      features={[
        {
          title: "AI Comment Management",
          description: "Răspunsuri automate inteligente în română la toate comentariile pe toate platformele cu escalare la om când e necesar.",
          highlight: "Engagement maxim pe toate platformele",
        },
        {
          title: "Scheduling Inteligent",
          description: "Programare posts la momentele optime pentru fiecare platformă cu calendar editorial centralizat.",
          highlight: "Reach maxim garantat",
        },
        {
          title: "Analytics & Monitoring",
          description: "Tracking engagement real-time, raportare ROI și identificarea trendurilor pentru toate platformele.",
          highlight: "Decizii bazate pe date",
        },
        {
          title: "Engagement Automation",
          description: "Auto-like, follow strategic și DM automat pentru leaduri cu targeting inteligent pe hashtag-uri.",
          highlight: "Creștere organică accelerată",
        },
        {
          title: "Multi-Platform Management",
          description: "Dashboard centralizat pentru toate platformele cu cross-posting inteligent și unified inbox.",
          highlight: "Eficiență maximă",
        },
        {
          title: "AI Moderare & Sentiment",
          description: "Detectare și moderare automată spam/comentarii toxice cu analiză de sentiment în română.",
          highlight: "Comunitate sănătoasă",
        },
      ]}
      pricing={{
        setup: "de la 700€",
        monthly: "de la 200€",
        implementation: "2-3 săptămâni",
        roi: "1-2 luni",
        features: [
          "AI răspunsuri comentarii",
          "Programare posts inteligentă",
          "Analytics fundamental",
          "Moderare automată",
          "Dashboard centralizat",
          "Suport tehnic inclus",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Hootsuite", "Buffer", "Later"],
        rows: [
          { feature: "AI răspunsuri în română", us: true, competitors: [false, false, false] },
          { feature: "Toate 5 platformele", us: true, competitors: [true, "limited", "limited"] },
          { feature: "Sentiment analysis română", us: true, competitors: [false, false, false] },
          { feature: "Moderare automată", us: true, competitors: ["basic", false, false] },
          { feature: "Lead generation", us: true, competitors: [false, false, false] },
          { feature: "Support în Română", us: true, competitors: [false, false, false] },
        ],
      }}
      ctaTitle="Automatizează Social Media cu AI"
      ctaDescription="Contactează-ne pentru consultația gratuită și descoperă cum AI poate transforma complet strategia ta de social media pe toate cele 5 platforme."
    />
  );
};

export default AutomationSocialMedia;
