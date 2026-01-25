import { motion } from "framer-motion";
import AutomationCard from "./AutomationCard";
import {
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  Brain,
  Building2,
  ShoppingBag,
  Hotel,
  MessageCircle,
  Share2,
  Home,
  Briefcase,
} from "lucide-react";

const automations = [
  {
    title: "Salon de Înfrumusețare",
    description: "Automatizează programările, confirmările și remarketing-ul pentru salonul tău de beauty.",
    icon: Scissors,
    href: "https://automatizez.ro/automatizare/automatizare-salon-infrumusetare",
  },
  {
    title: "Cabinet Medical",
    description: "Gestionează programările pacienților, notificările și follow-up-urile automat.",
    icon: Stethoscope,
    href: "https://automatizez.ro/automatizare/automatizare-cabinet-medical",
  },
  {
    title: "Restaurant",
    description: "Comenzi online, rezervări, și comunicare cu clienții - totul pe pilot automat.",
    icon: UtensilsCrossed,
    href: "https://automatizez.ro/automatizare/automatizare-restaurant",
  },
  {
    title: "Inteligență Artificială",
    description: "Soluții AI avansate pentru orice tip de business - de la analitică la automatizări complexe.",
    icon: Brain,
    href: "https://automatizez.ro/automatizare/automatizari-inteligenta-artificiala",
  },
  {
    title: "Sector Public",
    description: "Digitalizarea și automatizarea proceselor pentru instituții publice.",
    icon: Building2,
    href: "https://automatizez.ro/automatizare/automatizare-sector-public",
  },
  {
    title: "Magazine Retail",
    description: "Gestionează inventarul, comenzile și relația cu clienții automat.",
    icon: ShoppingBag,
    href: "https://automatizez.ro/automatizare/automatizare-magazine-retail",
  },
  {
    title: "Hotel & Pensiune",
    description: "Rezervări, check-in/out, și comunicare cu oaspeții - totul automatizat.",
    icon: Hotel,
    href: "https://automatizez.ro/automatizare/automatizare-hotel-pensiune",
  },
  {
    title: "Chatboți WhatsApp & Telegram",
    description: "Asistenți virtuali 24/7 care răspund instant clienților tăi.",
    icon: MessageCircle,
    href: "https://automatizez.ro/automatizare/chatboti-ai-whatsapp-telegram",
  },
  {
    title: "Social Media AI",
    description: "Generare și programare automată de conținut pentru rețelele sociale.",
    icon: Share2,
    href: "https://automatizez.ro/automatizare/automatizare-social-media-ai",
  },
  {
    title: "Agenții Imobiliare",
    description: "Automatizează lead-urile, programările vizionărilor și follow-up-urile.",
    icon: Home,
    href: "https://automatizez.ro/automatizare/automatizare-agentii-imobiliare",
  },
  {
    title: "Afaceri Mici & Mijlocii",
    description: "Soluții adaptate pentru IMM-uri - economisește timp și crește eficiența.",
    icon: Briefcase,
    href: "https://automatizez.ro/automatizare/automatizare-afaceri-mici-mijlocii",
  },
];

const AutomationsGrid = () => {
  return (
    <section id="automations" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Soluții de </span>
            <span className="text-gradient">Automatizare</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alege soluția potrivită pentru industria ta și lasă AI-ul să lucreze pentru tine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <AutomationCard
              key={automation.title}
              title={automation.title}
              description={automation.description}
              icon={automation.icon}
              href={automation.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsGrid;
