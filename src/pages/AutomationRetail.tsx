import AutomationPageLayout from "@/components/AutomationPageLayout";
import { ShoppingBag } from "lucide-react";

const AutomationRetail = () => {
  return (
    <AutomationPageLayout
      badge="Software Management Retail"
      title="Automatizează-ți"
      titleHighlight="Magazinul Retail"
      description="Management automat stoc, program fidelitate inteligent, integrare POS existent, e-commerce sincronizat. Precizie 99.9% și creștere profit cu 25%."
      icon={ShoppingBag}
      stats={[
        { value: "25%", label: "Creștere Profit" },
        { value: "99.9%", label: "Precizie Stoc" },
        { value: "60%", label: "Reducere Pierderi" },
      ]}
      problems={[
        {
          problem: "📊 Evidența stocului manual și greșeli frecvente",
          solution: "Management automat cu scanare coduri bare",
          benefit: "Precizie 99.9% și economie timp cu 80%",
        },
        {
          problem: "💸 Pierderi prin furt și discrepanțe de stoc",
          solution: "Monitorizare în timp real și alerte automate",
          benefit: "Reducere pierderi cu 60%",
        },
        {
          problem: "🛒 Clienți care nu se întorc după prima cumpărare",
          solution: "Program fidelitate automat cu oferte personalizate",
          benefit: "Creștere rata de revenire cu 40%",
        },
        {
          problem: "📈 Nu știi ce produse se vând bine și când",
          solution: "Analize detaliate și previziuni cerere",
          benefit: "Optimizare profit și reducere stoc mort",
        },
      ]}
      features={[
        {
          title: "Integrare Sistem Vânzări",
          description: "Conectarea cu sistemul tău POS existent pentru sincronizare automată stoc, vânzări și rapoarte.",
          highlight: "Sincronizare automată cu POS-ul existent",
        },
        {
          title: "Management Stoc Automat",
          description: "Urmărire stock în timp real, alerte stoc minim, comenzi automate la furnizori, rapoarte ABC analysis.",
          highlight: "Zero produse epuizate, stoc optimizat",
        },
        {
          title: "Program Fidelitate Inteligent",
          description: "Puncte automate, oferte personalizate, cupoane digitale, segmentare clienți pe comportament de cumpărare.",
          highlight: "Clienți fideli, vânzări repetate",
        },
        {
          title: "Analize Vânzări Avansate",
          description: "Rapoarte profit pe produs, ore de vârf, produse populare, previziuni cerere. Dashboard live pentru manager.",
          highlight: "Decizii bazate pe date, profit maximizat",
        },
        {
          title: "Notificări și Alerte",
          description: "SMS pentru stoc minim, alerte furturi (discrepanțe), notificări vânzări mari, rapoarte zilnice automate.",
          highlight: "Control total, reacție rapidă",
        },
        {
          title: "E-commerce Integrat",
          description: "Magazin online sincronizat cu stocul fizic, comenzi click&collect, livrări locale, catalog digital.",
          highlight: "Vânzări online + offline unificate",
        },
      ]}
      pricing={{
        setup: "de la 1,000€",
        monthly: "de la 150€",
        implementation: "8-10 săptămâni",
        roi: "4-6 luni",
        features: [
          "Integrare cu POS-ul tău existent",
          "Management stoc automat cu alerte",
          "Program fidelitate cu 3 nivele",
          "E-commerce integrat cu stocul",
          "Power Web Apps pentru management",
          "Analize avansate și rapoarte",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Retail365", "Magazinul.ro", "QuickPOS"],
        rows: [
          { feature: "Integrare POS existent", us: true, competitors: ["limited", "limited", true] },
          { feature: "Management stoc automat", us: true, competitors: ["basic", true, false] },
          { feature: "Program fidelitate inclus", us: true, competitors: [false, false, false] },
          { feature: "E-commerce integrat", us: true, competitors: [false, "limited", false] },
          { feature: "Preț transparent fix", us: true, competitors: [false, false, true] },
          { feature: "Power Apps mobile", us: true, competitors: [false, false, false] },
        ],
      }}
      ctaTitle="Optimizează-ți Magazinul în 3-4 Săptămâni"
      ctaDescription="Alătură-te magazinelor care și-au crescut profitul cu 25% prin automatizare. Software complet: integrare POS, stoc, fidelitate, e-commerce - totul conectat."
    />
  );
};

export default AutomationRetail;
