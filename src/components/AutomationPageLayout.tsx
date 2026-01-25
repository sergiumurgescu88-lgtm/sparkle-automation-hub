import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface Stat {
  value: string;
  label: string;
}

export interface Problem {
  problem: string;
  solution: string;
  benefit: string;
}

export interface Feature {
  title: string;
  description: string;
  highlight: string;
  icon?: LucideIcon;
}

export interface PricingInfo {
  setup: string;
  monthly: string;
  implementation: string;
  roi?: string;
  features: string[];
}

export interface ComparisonRow {
  feature: string;
  us: boolean;
  competitors: (boolean | string)[];
}

interface AutomationPageLayoutProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: Stat[];
  problems: Problem[];
  features: Feature[];
  pricing: PricingInfo;
  comparison?: {
    headers: string[];
    rows: ComparisonRow[];
  };
  ctaTitle: string;
  ctaDescription: string;
  icon: LucideIcon;
}

const AutomationPageLayout = ({
  badge,
  title,
  titleHighlight,
  description,
  stats,
  problems,
  features,
  pricing,
  comparison,
  ctaTitle,
  ctaDescription,
  icon: Icon,
}: AutomationPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Înapoi la Soluții</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-foreground">Mister Delivery AI</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">{title} </span>
              <span className="text-gradient">{titleHighlight}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="https://mrdelivery.ro" target="_blank" rel="noopener noreferrer">
                  Solicită Consultație
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/">
                  Vezi Toate Soluțiile
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Probleme </span>
              <span className="text-gradient">Rezolvate</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recunoști aceste situații? Avem soluția perfectă pentru fiecare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="text-destructive mb-3 font-medium">{item.problem}</div>
                <div className="flex items-start gap-2 text-primary mb-2">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{item.solution}</span>
                </div>
                <div className="text-sm text-muted-foreground pl-7">💡 {item.benefit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Funcționalități </span>
              <span className="text-gradient">Specializate</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dezvoltat special pentru nevoile afacerii tale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <div className="text-sm text-primary font-medium">✨ {feature.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Investiție </span>
              <span className="text-gradient">Profitabilă</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-card rounded-2xl p-8 border border-primary/30"
          >
            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-gradient mb-2">{pricing.setup}</div>
              <div className="text-muted-foreground">+ {pricing.monthly}/lună</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 text-center">
              <div className="p-4 rounded-xl bg-secondary">
                <div className="text-lg font-semibold text-foreground">{pricing.implementation}</div>
                <div className="text-sm text-muted-foreground">Implementare</div>
              </div>
              {pricing.roi && (
                <div className="p-4 rounded-xl bg-secondary">
                  <div className="text-lg font-semibold text-foreground">{pricing.roi}</div>
                  <div className="text-sm text-muted-foreground">ROI</div>
                </div>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" className="w-full" asChild>
              <a href="https://mrdelivery.ro" target="_blank" rel="noopener noreferrer">
                Solicită Implementare
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      {comparison && (
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Vs </span>
                <span className="text-gradient">Competiția</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">Funcționalități</th>
                    {comparison.headers.map((header, index) => (
                      <th key={index} className={`text-center py-4 px-4 font-medium ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.us ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />}
                      </td>
                      {row.competitors.map((comp, cIndex) => (
                        <td key={cIndex} className="text-center py-4 px-4">
                          {typeof comp === 'string' ? (
                            <span className="text-sm text-muted-foreground">{comp}</span>
                          ) : comp ? (
                            <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-destructive/50 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-muted-foreground mb-8">{ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://mrdelivery.ro" target="_blank" rel="noopener noreferrer">
                  Solicită Demo Gratuit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/">
                  Toate Soluțiile
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-foreground">Mister Delivery AI Agency</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MrDelivery. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AutomationPageLayout;
