import { motion } from "framer-motion";
import { 
  Truck, 
  Video, 
  Bot, 
  Smartphone, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Management Platforme Livrare",
    subtitle: "Negocieri Comisioane & Optimizare Meniu",
    price: "399€",
    period: "/lună",
    discount: "35% OFF",
    features: [
      "Negocieri comisioane cu Glovo, Bolt, Tazz",
      "Optimizare meniu și prețuri",
      "Monitorizare performanță zilnică",
      "Rapoarte săptămânale detaliate",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Video,
    title: "Producție Video & Auto-Posting",
    subtitle: "Clipuri Virale Zilnice pe 4 Platforme",
    price: "399€",
    period: "/lună",
    discount: "35% OFF",
    features: [
      "Clipuri video zilnice profesionale",
      "Auto-posting pe TikTok, Instagram, Facebook, YouTube",
      "Editare și efecte vizuale incluse",
      "Analiză engagement și optimizare",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "Asistent Virtual AI",
    subtitle: "Voce & Chat AI 24/7",
    price: "399€",
    period: "/lună",
    discount: "35% OFF",
    features: [
      "Răspunde la apeluri telefonice",
      "Expert WhatsApp automat",
      "Rezervări automate",
      "Disponibil 24/7, fără pauze",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Business pe Autopilot",
    subtitle: "Aplicație, Website & Automatizare",
    price: "399€",
    period: "/lună",
    discount: "35% OFF",
    features: [
      "Aplicație mobilă personalizată",
      "Website optimizat SEO",
      "Sistem de loialitate clienți",
      "Automatizare completă marketing",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Servicii Premium</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Soluții Complete pentru</span>
            <br />
            <span className="text-gradient">Restaurantul Tău</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pachete all-inclusive care transformă și automatizează fiecare aspect al afacerii tale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 relative group hover:shadow-card-hover transition-all duration-300"
            >
              {service.discount && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.discount}
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gradient">{service.price}</span>
                <span className="text-muted-foreground">{service.period}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="heroOutline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer">
                  Află mai multe
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Digital Avatar Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Avatar Digital AI</h3>
                <p className="text-muted-foreground">Generator video viral pe Telegram - plată unică</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-gradient">199€</span>
                <p className="text-sm text-muted-foreground">plată unică</p>
              </div>
              <Button variant="hero" asChild>
                <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer">
                  Comandă Acum
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
