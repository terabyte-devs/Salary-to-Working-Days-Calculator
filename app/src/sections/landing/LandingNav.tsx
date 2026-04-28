import { Link } from "react-router";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function LandingNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <HelpCircle className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-playfair text-lg font-semibold text-foreground">
            Is It Worth It?
          </span>
        </Link>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-inter font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          Try It Free
          <span>→</span>
        </Link>
      </div>
    </motion.nav>
  );
}
