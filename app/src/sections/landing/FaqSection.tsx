import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Is It Worth It?",
    answer:
      "It is a free personal finance calculator that converts any purchase price into the number of working days it costs you based on your salary.",
  },
  {
    question: "How does the calculation work?",
    answer:
      "We divide your annual salary by 261 working days to get your daily rate, then divide the item price by that rate to show how many days you need to work to afford it.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, Is It Worth It? is completely free to use with no sign-up required.",
  },
  {
    question: "What currencies are supported?",
    answer:
      "We support 20+ currencies including ZAR, USD, EUR, GBP, CAD, AUD, JPY, CNY, INR, BRL, MXN, CHF, SEK, NZD, SGD, HKD, NOK, TRY, AED, and KRW.",
  },
  {
    question: "How does AI find prices?",
    answer:
      "When you search for an item, our AI integration can look up real-world context to suggest a clean, accurate product name. You can also enter the price manually.",
  },
  {
    question: "What does the Worth It meter mean?",
    answer:
      "The meter gives a quick verdict based on how many working days the item costs — from 'Pocket Change' to 'Luxury Territory' — so you can gauge the impact at a glance.",
  },
];

export default function FaqSection() {
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
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto font-nunito">
            Everything you need to know.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-muted-foreground font-nunito leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
