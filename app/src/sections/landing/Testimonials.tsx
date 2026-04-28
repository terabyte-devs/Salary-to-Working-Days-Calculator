import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Manager",
    quote:
      "This calculator completely changed how I shop. Seeing that a new bag costs me 3 days of work made me rethink instantly.",
  },
  {
    name: "James K.",
    role: "Software Developer",
    quote:
      "Simple, beautiful, and brutally honest. I use it before every non-essential purchase now.",
  },
  {
    name: "Lindiwe N.",
    role: "Teacher",
    quote:
      "I love that it supports ZAR and works offline. A genuinely useful tool with no strings attached.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            What People Say
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto font-nunito">
            Real feedback from early users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-3xl border border-border bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="italic text-foreground font-nunito leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-inter">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
