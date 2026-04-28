import { motion } from "framer-motion";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="outline"
              className="mb-6 px-3 py-1 text-sm font-inter border-primary/30 text-primary bg-primary/5"
            >
              Free Personal Finance Calculator
            </Badge>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Stop buying things <br />
              <span className="italic text-primary">without thinking.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Every purchase costs you days of your life. See exactly how many
              working days any item really costs — before you swipe your card.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-inter font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Calculate Now. It&apos;s Free
                <Sparkles className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-sm font-inter font-medium text-primary hover:underline bg-transparent border-none cursor-pointer"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social proof bar */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground font-inter">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Free
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                20+ currencies
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Instant results
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                No sign-up
              </span>
            </div>
          </motion.div>

          {/* Right: Floating mock calculator card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="animate-float w-full max-w-sm">
              <div className="rounded-3xl border border-border bg-white shadow-xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-xl">
                    👟
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-foreground">
                      Nike Air Max
                    </p>
                    <p className="text-sm text-muted-foreground font-inter">
                      R 2,899.00
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-inter">
                    <span className="text-muted-foreground">
                      Your daily rate
                    </span>
                    <span className="font-medium text-foreground">
                      R 576.92
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-inter">
                    <span className="text-muted-foreground">
                      Working time required
                    </span>
                    <span className="font-bold text-primary">5.0 days</span>
                  </div>
                </div>

                {/* Worth meter mock */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-inter font-medium">
                    <span>Worth It Meter</span>
                    <span className="text-amber-600">Think Twice</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
