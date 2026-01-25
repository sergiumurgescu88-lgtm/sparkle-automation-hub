import AutomationPageLayout from "@/components/AutomationPageLayout";
import { Building2 } from "lucide-react";

const AutomationPublic = () => {
  return (
    <AutomationPageLayout
      badge="Digitalizare Administrație Publică"
      title="Automatizează"
      titleHighlight="Sectorul Public"
      description="Digitalizare completă pentru primării și instituții publice. Chatboți AI pentru cetățeni, programări online, automatizare procese administrative. Reducere birocrație cu 70% și eliminarea cozilor."
      icon={Building2}
      stats={[
        { value: "70%", label: "Reducere Birocrație" },
        { value: "24/7", label: "Servicii Online" },
        { value: "Zero", label: "Cozi la Ghișee" },
      ]}
      problems={[
        {
          problem: "📞 Telefoanele sună constant cu întrebări de rutină",
          solution: "Chatbot AI răspunde 24/7 la întrebări frecvente",
          benefit: "Funcționarii se concentrează pe cazuri complexe",
        },
        {
          problem: "⏰ Cozi lungi la ghișee pentru informații simple",
          solution: "Portal online cu toate informațiile și programări",
          benefit: "Eliminarea cozilor și timpului de așteptare",
        },
        {
          problem: "📋 Procese birocratice lente și greșeli umane",
          solution: "Automatizare fluxuri și validări digitale",
          benefit: "Reducere timp procesare cu 70%",
        },
        {
          problem: "📄 Cetățenii nu știu ce acte trebuie",
          solution: "Ghid interactiv și asistent AI personalizat",
          benefit: "Cetățeni pregătiți, dosare complete din prima",
        },
      ]}
      features={[
        {
          title: "Chatbot AI pentru Cetățeni",
          description: "Asistent virtual 24/7 care răspunde la întrebări despre acte, proceduri, taxe locale. Reduce apelurile cu 80%.",
          highlight: "Cetățeni informați instant",
        },
        {
          title: "Programări Online Servicii",
          description: "Cetățenii își programează singuri audiențe, eliberare acte, plata taxelor. Eliminarea cozilor și așteptării.",
          highlight: "Zero cozi, programare 24/7",
        },
        {
          title: "Automatizare Procese Administrative",
          description: "Fluxuri digitale pentru eliberare certificate, autorizații, plata taxelor online cu notificări automate.",
          highlight: "Reducere birocrație cu 70%",
        },
        {
          title: "Portal Cetățean Centralizat",
          description: "Platformă unică pentru toate serviciile: taxe, acte, sesizări, informații. Un singur cont pentru tot.",
          highlight: "Experiență simplificată pentru cetățeni",
        },
        {
          title: "Securitate și Conformitate",
          description: "Respectarea GDPR și a legislației pentru date personale. Audit trail complet pentru transparență.",
          highlight: "Conformitate legală 100%",
        },
        {
          title: "Rapoarte și Statistici",
          description: "Dashboard pentru primari cu statistici servicii, satisfacție cetățeni, eficiență departamente.",
          highlight: "Decizii bazate pe date reale",
        },
      ]}
      pricing={{
        setup: "de la 1,200€",
        monthly: "de la 200€",
        implementation: "10-14 săptămâni",
        roi: "6-12 luni",
        features: [
          "Chatbot AI pentru cetățeni",
          "Portal cetățean complet",
          "Programări online pentru toate serviciile",
          "Automatizare procese administrative",
          "Power Web Apps pentru funcționari",
          "Training și suport tehnic",
        ],
      }}
      ctaTitle="Modernizează Administrația în 4-6 Săptămâni"
      ctaDescription="Alătură-te primăriilor care au digitalizat serviciile pentru cetățeni. Reducere birocrație cu 70%, eliminarea cozilor și cetățeni mai satisfăcuți."
    />
  );
};

export default AutomationPublic;
