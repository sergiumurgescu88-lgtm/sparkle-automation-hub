import AutomationPageLayout from "@/components/AutomationPageLayout";
import { UtensilsCrossed } from "lucide-react";

const AutomationRestaurant = () => {
  return (
    <AutomationPageLayout
      badge="Eliminare Comisioane Platforme"
      title="Automatizează-ți"
      titleHighlight="Restaurantul"
      description="Meniu digital QR, comenzi online fără comisioane de 25%, plăți integrate. Scapă de dependența de Glovo și FoodPanda. ROI în 1-2 luni prin economii la comisioane."
      icon={UtensilsCrossed}
      stats={[
        { value: "0%", label: "Comisioane" },
        { value: "+1,350€", label: "Economie/lună" },
        { value: "2-3 săpt", label: "Implementare" },
      ]}
      problems={[
        {
          problem: "💸 Comisioane 15-25% către platforme",
          solution: "Sistem propriu de comenzi fără comisioane",
          benefit: "Economisești 1,350€+/lună la o cifră de 6,000€",
        },
        {
          problem: "📱 Dependența de Glovo, FoodPanda",
          solution: "Platformă proprie de comenzi online",
          benefit: "Control total asupra clienților și datelor",
        },
        {
          problem: "📋 Meniu greu de actualizat pe platforme",
          solution: "Meniu digital QR cu update instant",
          benefit: "Modifici prețuri și produse în secunde",
        },
        {
          problem: "📊 Lipsa datelor despre clienți",
          solution: "Analytics și bază de date proprie",
          benefit: "Marketing țintit și fidelizare clienți",
        },
      ]}
      features={[
        {
          title: "Meniu Digital QR",
          description: "Meniu interactiv accesibil prin QR code. Poze, descrieri, prețuri actualizate instant.",
          highlight: "Experiență modernă pentru clienți",
        },
        {
          title: "Comenzi Online Directe",
          description: "Platformă proprie de comenzi fără intermediari. 0% comisioane, control total.",
          highlight: "Zero comisioane pe comenzi",
        },
        {
          title: "Plăți Integrate",
          description: "Acceptă plăți cu cardul online și cash la livrare. Procesare instantă și securizată.",
          highlight: "Toate metodele de plată",
        },
        {
          title: "Integrare POS",
          description: "Sincronizare automată cu sistemul de casă existent. Comenzile intră direct în sistem.",
          highlight: "Flux de lucru unificat",
        },
        {
          title: "Analytics Detaliate",
          description: "Rapoarte vânzări, produse populare, ore de vârf, comportament clienți.",
          highlight: "Decizii bazate pe date",
        },
        {
          title: "Sistem Rezervări",
          description: "Rezervări mese online integrate cu calendarul restaurantului.",
          highlight: "Gestionare completă mese",
        },
      ]}
      pricing={{
        setup: "de la 800€",
        monthly: "de la 150€",
        implementation: "2-3 săptămâni",
        roi: "1-2 luni",
        features: [
          "Meniu digital QR nelimitat",
          "Comenzi online fără comisioane",
          "Plăți integrate (card + cash)",
          "Analytics și rapoarte detaliate",
          "Suport tehnic inclus",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Glovo", "FoodPanda", "Bolt Food"],
        rows: [
          { feature: "Comisioane pe comandă", us: true, competitors: [false, false, false] },
          { feature: "Meniu propriu QR", us: true, competitors: [false, false, false] },
          { feature: "Control total comenzi", us: true, competitors: [false, false, false] },
          { feature: "Date clienți", us: true, competitors: ["limitat", "limitat", "limitat"] },
          { feature: "Integrare POS", us: true, competitors: [false, false, false] },
          { feature: "Personalizare completă", us: true, competitors: [false, false, false] },
        ],
      }}
      ctaTitle="Elimină Comisioanele de 25% Acum"
      ctaDescription="Cu o cifră de afaceri de 6,000€/lună, economisești 1,350€ lunar. Investiția se returnează în 1-2 luni."
    />
  );
};

export default AutomationRestaurant;
