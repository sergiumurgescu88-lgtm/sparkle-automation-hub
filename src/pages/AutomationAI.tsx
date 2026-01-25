import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Brain } from "lucide-react";

const AutomationAI = () => {
  return (
    <AutomationPageLayout
      badge="Soluții Inteligență Artificială pentru Business"
      title="Automatizări"
      titleHighlight="Inteligență Artificială (AI)"
      description="Integrăm soluții de inteligență artificială în orice tip de afacere pentru a reduce costurile operaționale, optimiza procesele repetitive și îmbunătăți experiența clienților. ROI garantat în 3-6 luni."
      icon={Brain}
      stats={[
        { value: "40%", label: "Reducere Costuri" },
        { value: "3-6 luni", label: "ROI Garantat" },
        { value: "24/7", label: "Suport Continuu" },
      ]}
      problems={[
        {
          problem: "📞 Personal ocupat cu întrebări repetitive",
          solution: "Chatbot AI răspunde la 80% din întrebări automat",
          benefit: "Echipa se concentrează pe taskuri importante",
        },
        {
          problem: "📊 Analiza manuală a datelor consumă timp",
          solution: "AI analizează automat și generează insights",
          benefit: "Decizii rapide bazate pe date precise",
        },
        {
          problem: "✍️ Crearea de conținut este costisitoare",
          solution: "AI generează automat conținut personalizat",
          benefit: "Marketing continuu fără efort manual",
        },
        {
          problem: "⚙️ Procese repetitive consumă resurse",
          solution: "Automatizare completă cu AI care învață",
          benefit: "Eficiență crescută cu 60%, zero erori",
        },
      ]}
      features={[
        {
          title: "Chatboți Inteligenți pentru Suport",
          description: "Asistenți AI care răspund instant la întrebările clienților, 24/7, în limba română. Reduc volumul de apeluri cu 70%.",
          highlight: "Suport clienți automatizat 24/7",
        },
        {
          title: "Analiză Automată a Datelor",
          description: "Algoritmi AI care analizează datele business-ului tău și generează rapoarte inteligente cu insights actionabile.",
          highlight: "Decizii bazate pe date precise",
        },
        {
          title: "Generare Conținut Automatizat",
          description: "AI care creează conținut pentru social media, descrieri produse, emailuri marketing și articole blog.",
          highlight: "Marketing continuu fără efort",
        },
        {
          title: "Integrare AI în E-commerce",
          description: "Recomandări personalizate pentru clienți, optimizarea prețurilor în timp real și predicții de stoc.",
          highlight: "Creșterea vânzărilor cu 35%",
        },
        {
          title: "Asistenți Virtuali pentru Management",
          description: "AI care automatizează task-urile administrative: programări, facturare, urmări comenzi, gestionare inventar.",
          highlight: "Reducerea timpului administrativ cu 60%",
        },
        {
          title: "Automatizare Procese Complexe",
          description: "Inteligență artificială care învață din procesele tale și le optimizează continuu, eliminând erorile umane.",
          highlight: "Eficiență maximă cu erori minime",
        },
      ]}
      pricing={{
        setup: "de la 1,200€",
        monthly: "de la 200€",
        implementation: "4-8 săptămâni",
        roi: "3-6 luni",
        features: [
          "Chatbot inteligent pentru website",
          "Analiză automată date business",
          "Generare conținut social media",
          "Integrare cu sistemele existente",
          "Suport tehnic inclus",
          "Training echipă inclus",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "ChatGPT API", "Dialogflow", "Custom Dev"],
        rows: [
          { feature: "Conversații în Română", us: true, competitors: ["basic", "limited", "manual"] },
          { feature: "Training Personalizat", us: true, competitors: [false, "basic", "manual"] },
          { feature: "Integrare Completă", us: true, competitors: [false, "basic", true] },
          { feature: "Suport în Română", us: true, competitors: [false, false, false] },
          { feature: "Implementare Rapidă", us: true, competitors: [false, "limited", false] },
          { feature: "Analytics Avansate", us: true, competitors: [false, true, "manual"] },
        ],
      }}
      ctaTitle="Adu Inteligența Artificială în Afacerea Ta"
      ctaDescription="Consultanță gratuită și evaluare personalizată. ROI garantat în 3-6 luni prin reducerea costurilor și creșterea eficienței."
    />
  );
};

export default AutomationAI;
