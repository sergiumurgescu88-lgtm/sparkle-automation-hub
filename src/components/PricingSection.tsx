import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Star
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect pentru începători",
    price: "199€",
    period: "/lună",
    popular: false,
    features: [
      "1 serviciu la alegere",
      "Suport email",
      "Rapoarte lunare",
      "Setup în 7 zile",
    ],
  },
  {
    name: "Business",
    description: "Cel mai popular",
    price: "699€",
    period: "/lună",
    popular: true,
    features: [
      "2 servicii la alegere",
      "Suport prioritar WhatsApp",
      "Rapoarte săptămânale",
      "Setup în 3 zile",
      "Account manager dedicat",
      "Consultanță strategică lunară",
    ],
  },
  {
    name: "Enterprise",
    description: "Soluție completă",
    price: "1,299€",
    period: "/lună",
    popular: false,
    features: [
      "Toate cele 4 servicii incluse",
      "Suport 24/7 telefon & WhatsApp",
      "Rapoarte zilnice",
      "Setup în 24 ore",
      "Echipă dedicată",
      "Strategii personalizate",
      "Acces prioritar la noi funcții",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
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
            <span className="text-sm text-muted-foreground">Prețuri Transparente</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Alege Planul</span>
            <br />
            <span className="text-gradient">Potrivit pentru Tine</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fără costuri ascunse, fără surprize. Plătești doar pentru ce folosești.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl p-6 relative ${
                plan.popular ? "ring-2 ring-primary shadow-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    <Star className="w-3 h-3" />
                    Cel mai popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "heroOutline"} 
                className="w-full" 
                asChild
              >
                <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer">
                  Începe Acum
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Toate prețurile sunt fără TVA. Contracte flexibile, poți anula oricând.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
