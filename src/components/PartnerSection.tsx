import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, ArrowRight } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="partner" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Oportunitate de Parteneriat</span>
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Ai lucrat la</span>
                <br />
                <span className="text-gradient">Glovo, Bolt, Wolt sau Tazz?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Transformă-ți experiența în industria de livrări într-un business profitabil. 
                Devino partener MrDelivery și ajută restaurantele să crească, în timp ce tu câștigi venituri semnificative.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Venituri Mari</div>
                    <div className="text-sm text-muted-foreground">Potențial nelimitat</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Training Complet</div>
                    <div className="text-sm text-muted-foreground">Suport dedicat</div>
                  </div>
                </div>
              </div>
              
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer">
                  Devino Partener
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="text-6xl font-bold text-gradient mb-4">€5,000+</div>
                <p className="text-xl text-foreground mb-2">Venit potențial lunar</p>
                <p className="text-muted-foreground">
                  Pentru partenerii activi cu portofoliu de clienți
                </p>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">30%</div>
                      <div className="text-sm text-muted-foreground">Comision</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">0€</div>
                      <div className="text-sm text-muted-foreground">Investiție</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Suport</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
