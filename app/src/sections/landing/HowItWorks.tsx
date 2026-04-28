import { motion } from "framer-motion";
import { Briefcase, Search, Timer } from "lucide-react";

const steps = [
  {
    icon: Briefcase,
    title: "Enter Your Salary",
    description: "Tell us your annual or monthly salary and pick your currency.",
  },
  {
    icon: Search,
    title: "Search Any Item",
    description: "Type the name of what you want to buy. We'll even clean up the name for you.",
  },
  {
    icon: Timer,
    title: "See the Real Cost",
    description: "Discover exactly how many hours, days, or months you need to work for it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto font-nunito">
            Three simple steps to rethink every purchase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-nunito text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
