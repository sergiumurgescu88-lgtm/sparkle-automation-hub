import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Home } from "lucide-react";

const AutomationRealEstate = () => {
  return (
    <AutomationPageLayout
      badge="Sistem Imobiliar Complet"
      title="Automatizează"
      titleHighlight="Agenția Imobiliară"
      description="CRM + Portal + Automatizări complete. Lead capture automat multi-platformă, programări vizionări, marketing digital automatizat. Transformă agenția ta într-un lider tehnologic."
      icon={Home}
      stats={[
        { value: "+200%", label: "Lead-uri/lună" },
        { value: "+60%", label: "Rata Conversie" },
        { value: "5+ ore", label: "Economite/zi" },
      ]}
      problems={[
        {
          problem: "📋 Lead-uri pierdute sau uitare de follow-up",
          solution: "Lead management automat cu nurturing personalizat",
          benefit: "Conversie lead-uri crescută cu 60-80%",
        },
        {
          problem: "⏰ Programări vizionări manual și no-show-uri",
          solution: "Calendar automat cu confirmări SMS/email",
          benefit: "Reducere no-show cu 70%",
        },
        {
          problem: "📊 Lipsa vizibilității pe performanța agenților",
          solution: "CRM cu tracking pipeline și rapoarte automate",
          benefit: "Productivitate agenți crescută cu 50%",
        },
        {
          problem: "🌐 Prezență online fragmentată",
          solution: "Portal proprietăți cu sync automat pe toate platformele",
          benefit: "300% mai multă expunere online",
        },
      ]}
      features={[
        {
          title: "Lead Management Automat",
          description: "Capturare automată lead-uri din site, Facebook, OLX, Storia. Distribuire inteligentă către agenți, follow-up automat.",
          highlight: "Conversie lead-uri +60-80%",
        },
        {
          title: "Sistem Programări Integrate",
          description: "Calendar sincronizat cu vizualizări proprietăți, confirmări automate SMS/email, reminder-uri cu linkuri Google Maps.",
          highlight: "Reducere no-show cu 70%",
        },
        {
          title: "CRM Imobiliar Complet",
          description: "Gestiune proprietăți, clienți, tranzacții și documente. Tracking pipeline vânzări, rapoarte performance agenți.",
          highlight: "Productivitate agenți +50%",
        },
        {
          title: "Portal Proprietăți Automat",
          description: "Site responsiv cu căutare avansată, filtre multiple, map integration și sync automat cu Storia, OLX, Publi24.",
          highlight: "Vizibilitate online maximă",
        },
        {
          title: "Marketing Digital Imobiliar",
          description: "Facebook/Google Ads pentru proprietăți, email marketing segmentat, content automat social media, SEO local.",
          highlight: "Cost per lead redus cu 40%",
        },
        {
          title: "Raportare & Analytics",
          description: "Dashboard central cu metrici vânzări, performance agenți, analize piață și rapoarte automate.",
          highlight: "Decizii bazate pe date reale",
        },
      ]}
      pricing={{
        setup: "de la 1,000€",
        monthly: "de la 200€",
        implementation: "4-6 săptămâni",
        roi: "3-4 luni",
        features: [
          "Lead capture multi-platformă",
          "CRM imobiliar complet",
          "Portal proprietăți responsiv",
          "Sync automat OLX, Storia, Publi24",
          "Marketing digital automatizat",
          "Rapoarte și analytics avansate",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "ImoPro", "RealEstate.ro", "Generic CRM"],
        rows: [
          { feature: "Lead capture multi-platformă", us: true, competitors: ["limited", false, false] },
          { feature: "Sync automat platforme", us: true, competitors: [true, "limited", false] },
          { feature: "Portal proprietăți inclus", us: true, competitors: [false, true, false] },
          { feature: "Marketing automat", us: true, competitors: [false, false, false] },
          { feature: "Analytics per agent", us: true, competitors: ["basic", false, false] },
          { feature: "Support în Română", us: true, competitors: [true, true, false] },
        ],
      }}
      ctaTitle="Automatizează-ți Agenția Imobiliară"
      ctaDescription="Contactează-ne pentru un demo gratuit și să vedem cum putem transforma agenția ta într-un lider tehnologic din piața imobiliară."
    />
  );
};

export default AutomationRealEstate;
