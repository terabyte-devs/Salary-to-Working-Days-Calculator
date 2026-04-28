import { motion } from "framer-motion";
import { Link } from "react-router";
import { Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              So… is it worth it?
            </h2>
            <p className="text-white/80 font-nunito max-w-lg mx-auto mb-8">
              Stop guessing. Start knowing. Launch the calculator and see the
              real cost of your next purchase.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-inter font-semibold text-primary shadow-lg hover:bg-white/90 transition-colors"
            >
              Launch the Calculator
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
