import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Stethoscope } from "lucide-react";

const AutomationMedical = () => {
  return (
    <AutomationPageLayout
      badge="Conformitate GDPR Medicală Completă"
      title="Automatizează-ți"
      titleHighlight="Cabinetul Medical"
      description="Sistem complet pentru cabinete medicale și clinici. Programări online 24/7, conformitate GDPR, integrare CNAS, reducere timp administrativ cu 60%. Implementare securizată în 3-4 săptămâni."
      icon={Stethoscope}
      stats={[
        { value: "60%", label: "Reducere Timp Admin" },
        { value: "GDPR", label: "100% Compliant" },
        { value: "3-4 săpt", label: "Implementare" },
      ]}
      problems={[
        {
          problem: "📞 Telefoanele sună constant pentru programări",
          solution: "Programări online 24/7, fără întreruperi",
          benefit: "Focus 100% pe pacienți în timpul consultațiilor",
        },
        {
          problem: "📄 Evidența pacienților pe hârtie sau Excel",
          solution: "Dosare medicale digitale GDPR compliant",
          benefit: "Istoric complet și acces instant la date",
        },
        {
          problem: "⏰ Timpul pierdut cu administrația",
          solution: "Automatizare procese administrative",
          benefit: "Reducere timp administrativ cu 60%",
        },
        {
          problem: "🔐 Riscuri GDPR și confidențialitate",
          solution: "Conformitate completă și audit trail",
          benefit: "Zero riscuri legale și sancțiuni",
        },
      ]}
      features={[
        {
          title: "Programări Online 24/7",
          description: "Pacienții își programează singuri consultațiile oricând, fără să suni la cabinet în timpul programului.",
          highlight: "Reducere apeluri cu 80%",
        },
        {
          title: "Conformitate GDPR Completă",
          description: "Respectăm toate reglementările GDPR pentru date medicale. Audit trail complet și documentație conformitate.",
          highlight: "Zero riscuri legale",
        },
        {
          title: "Reminder-uri Automate",
          description: "SMS și email automate cu 24h și 2h înainte de consultație. Reducerea no-show-urilor de la 20% la 3%.",
          highlight: "Optimizare program complet",
        },
        {
          title: "Istoric Medical Digital",
          description: "Dosare medicale digitale securizate, istoric consultații, tratamente, alergii și contraindicații.",
          highlight: "Pacienți mai bine îngrijiți",
        },
        {
          title: "Securitate Maximă",
          description: "Criptare end-to-end, servere în România, backup automat, acces controlat pe roluri medicale.",
          highlight: "Date 100% securizate",
        },
        {
          title: "Integrare CNAS",
          description: "Conectare cu sistemele CNAS pentru raportări automate, bilete de trimitere și asigurări de sănătate.",
          highlight: "Administrație simplificată",
        },
      ]}
      pricing={{
        setup: "400€",
        monthly: "120€",
        implementation: "3-4 săptămâni",
        roi: "3-4 luni",
        features: [
          "Programări online nelimitate",
          "Conformitate GDPR completă",
          "Integrare CNAS inclusă",
          "Suport medical specializat",
          "Backup automat și securitate",
        ],
      }}
      comparison={{
        headers: ["Mister Delivery AI", "Doctolib", "Regina Maria", "Medics"],
        rows: [
          { feature: "Programări Online", us: true, competitors: [true, true, true] },
          { feature: "GDPR Compliance România", us: true, competitors: ["basic", true, "limited"] },
          { feature: "Integrare CNAS", us: true, competitors: [false, "limited", false] },
          { feature: "Suport Medical Specializat", us: true, competitors: [false, "limited", false] },
          { feature: "Servere în România", us: true, competitors: [false, true, false] },
          { feature: "Customizare Completă", us: true, competitors: [false, "limited", false] },
        ],
      }}
      ctaTitle="Digitalizează-ți Cabinetul în 3-4 Săptămâni"
      ctaDescription="Alătură-te medicilor care și-au automatizat cabinetele cu conformitate GDPR completă. Implementare securizată, suport specializat, zero riscuri legale."
    />
  );
};

export default AutomationMedical;
