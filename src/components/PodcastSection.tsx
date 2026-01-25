import { motion } from "framer-motion";
import { Headphones, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PodcastSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">MrDelivery Podcast</h3>
              <p className="text-muted-foreground mb-4">
                Ascultă cele mai noi episoade despre automatizări, delivery și strategii de creștere pentru restaurante
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button variant="hero" size="sm" asChild>
                  <a href="#" className="inline-flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Ascultă Acum
                  </a>
                </Button>
                <Button variant="heroOutline" size="sm" asChild>
                  <a 
                    href="https://open.spotify.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="sm" asChild>
                  <a 
                    href="https://youtube.com/@mrdelivery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-20 bg-border" />
            
            <div className="hidden lg:flex flex-col items-center gap-2 shrink-0">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Episoade</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastSection;
