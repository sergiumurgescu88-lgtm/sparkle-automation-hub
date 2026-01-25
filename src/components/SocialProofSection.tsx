import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Truck, 
  TrendingUp,
  Instagram,
  Facebook,
  Youtube,
  Linkedin
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "7+",
    label: "Ani în Marketing",
    description: "Experiență dovedită în marketing digital",
  },
  {
    icon: Truck,
    value: "5+",
    label: "Ani în Delivery",
    description: "Expertiză în industria de livrări",
  },
  {
    icon: Users,
    value: "90%",
    label: "Clienți din Recomandări",
    description: "Satisfacție care vorbește de la sine",
  },
  {
    icon: TrendingUp,
    value: "300+",
    label: "Restaurante Optimizate",
    description: "Afaceri transformate cu succes",
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/mrdelivery.ro", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Facebook, href: "https://facebook.com/mrdelivery.ro", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Youtube, href: "https://youtube.com/@mrdelivery", label: "YouTube", color: "hover:text-red-500" },
  { icon: Linkedin, href: "https://linkedin.com/company/mrdelivery", label: "LinkedIn", color: "hover:text-blue-400" },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">De Ce Să Alegi</span>
            <br />
            <span className="text-gradient">MrDelivery?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiență reală, rezultate măsurabile și clienți mulțumiți care ne recomandă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 text-center group hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <p className="w-full text-center text-muted-foreground mb-4">Urmărește-ne pe social media</p>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
