import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">MrDelivery</span>
              <span className="text-muted-foreground">.ro</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://mrdelivery.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Website
            </a>
            <a
              href="https://automatizez.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Automatizez.ro
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MrDelivery. Toate drepturile rezervate.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
