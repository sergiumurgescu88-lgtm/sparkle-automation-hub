import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-semibold text-foreground">MrDelivery</span>
            <span className="text-muted-foreground">.ro</span>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Servicii
          </a>
          <a href="#automations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Automatizări AI
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Prețuri
          </a>
          <a href="#partner" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Partener
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="text-green-500 hover:text-green-400 hover:bg-green-500/10">
            <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-primary hover:text-primary/80 hover:bg-primary/10">
            <a href="tel:+40768676141" aria-label="Telefon">
              <Phone className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer">
              Contactează-ne
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
