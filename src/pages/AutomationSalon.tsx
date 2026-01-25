import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Scissors } from "lucide-react";

const AutomationSalon = () => {
  return (
    <AutomationPageLayout
      badge="Specializat pentru Saloane de Înfrumusețare"
      title="Automatizează-ți"
      titleHighlight="Salonul de Înfrumusețare"
      description="Sistem complet pentru saloane, frizerii și centre wellness. Reduce no-show-urile cu 80%, programări online 24/7, marketing automat. Implementare în 2-3 săptămâni."
      icon={Scissors}
      stats={[
        { value: "80%", label: "Reducere No-Show" },
        { value: "300+", label: "Saloane în România" },
        { value: "2-3 săpt", label: "Implementare" },
      ]}
      problems={[
        {
          problem: "🤦‍♀️ No-show-uri frecvente (25-30%)",
          solution: "Reducere la 5% prin reminder-uri automate",
          benefit: "Recuperezi 20-25% din timpul pierdut",
        },
        {
          problem: "📞 Telefoanele sună constant pentru programări",
          solution: "Programări online 24/7, fără întreruperi",
          benefit: "Focus 100% pe clienții din salon",
        },
        {
          problem: "📝 Evidența clienților pe hârtie sau Excel",
          solution: "Bază de date digitală cu istoric complet",
          benefit: "Servicii personalizate și marketing țintit",
        },
        {
          problem: "💸 Pierderea clienților prin lipsa de follow-up",
          solution: "Marketing automat pentru reactivare",
          benefit: "Creșterea retenției cu 40%",
        },
      ]}
      features={[
        {
          title: "Programări Online 24/7",
          description: "Clienții își programează singuri serviciile oricând, fără să te deranjeze. Calendar disponibil non-stop.",
          highlight: "Libertate completă pentru clienți",
        },
        {
          title: "Reminder-uri Automate",
          description: "SMS și email automate cu 24h și 2h înainte. Reduce no-show-urile de la 30% la doar 5%.",
          highlight: "Reducere no-show cu 80%",
        },
        {
          title: "Gestiune Clienți Avansată",
          description: "Istoric complet servicii, preferințe, alergii, data nașterii pentru felicitări automate.",
          highlight: "Clienți fericiți și fideli",
        },
        {
          title: "Marketing Automat",
          description: "Campanii automate pentru clienți inactivi, oferte pentru zile de naștere, promoții sezoniere.",
          highlight: "Creștere venituri cu 25%",
        },
        {
          title: "Analytics și Raportare",
          description: "Servicii populare, ore de vârf, performanța staff-ului, venituri pe perioadă și multe altele.",
          highlight: "Optimizare completă salon",
        },
        {
          title: "Integrare POS Salon",
          description: "Sincronizare cu Zapp, SmartCash și alte sisteme POS. Prețuri și servicii actualizate automat.",
          highlight: "Tot într-un singur sistem",
        },
      ]}
      pricing={{
        setup: "300€",
        monthly: "90€",
        implementation: "2-3 săptămâni",
        roi: "2-3 luni",
        features: [
          "Programări online nelimitate",
          "Reminder-uri SMS și email incluse",
          "Integrare POS salon",
          "Suport tehnic în română",
          "Updates și îmbunătățiri continue",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Booksy", "Fresha", "SalonIQ"],
        rows: [
          { feature: "Programări Online", us: true, competitors: [true, true, true] },
          { feature: "Reminder-uri SMS România", us: true, competitors: ["limited", true, "paid"] },
          { feature: "Suport în Română", us: true, competitors: [false, false, "limited"] },
          { feature: "Fără Comisioane/Programare", us: true, competitors: [false, true, false] },
          { feature: "Integrare POS România", us: true, competitors: [false, "limited", false] },
          { feature: "Marketing Automat", us: true, competitors: ["basic", "paid", false] },
        ],
      }}
      ctaTitle="Transformă-ți Salonul în 2-3 Săptămâni"
      ctaDescription="Alătură-te celor 300+ saloane din România care și-au automatizat programările. Demo gratuit, implementare rapidă, suport specializat."
    />
  );
};

export default AutomationSalon;
