import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 mb-8"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-inter text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      <div className="flex items-center gap-2">
        <BadgeCheck className="w-5 h-5 text-primary" />
        <span className="text-xs font-inter font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Free Tool
        </span>
      </div>
      <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground ml-auto">
        Is it worth it?
      </h1>
    </motion.header>
  );
}
