import { motion } from "framer-motion";
import { ShieldOff, BarChart2, PiggyBank, Globe, Zap, Gift } from "lucide-react";

const benefits = [
  {
    icon: ShieldOff,
    title: "Beat Impulse Buying",
    description: "Pause before purchasing by seeing the real time cost of every item.",
  },
  {
    icon: BarChart2,
    title: "Budget Smarter",
    description: "Compare daily rates against prices to build better spending habits.",
  },
  {
    icon: PiggyBank,
    title: "Save More Money",
    description: "When you know the true cost, you naturally spend less on things you don't need.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Support for 20+ currencies so anyone around the world can use it.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No complex spreadsheets. Enter two numbers and get your answer in seconds.",
  },
  {
    icon: Gift,
    title: "Completely Free",
    description: "No subscriptions, no hidden fees, and no account required. Ever.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            Why Use It?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto font-nunito">
            A small shift in perspective can transform your finances.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-primary hover:shadow-md transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground font-nunito leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
