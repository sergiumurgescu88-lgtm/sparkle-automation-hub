import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      <a
        href="tel:+40768676141"
        className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        aria-label="Sună-ne"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/40768676141"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
