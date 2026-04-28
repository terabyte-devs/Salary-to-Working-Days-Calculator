import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ToggleLeft, ToggleRight } from "lucide-react";
import WorthMeter from "./WorthMeter";
import { Button } from "@/components/ui/button";

interface ResultCardProps {
  item: {
    name: string;
    price: number;
    image: string;
  };
  dailyRate: number;
  currencySymbol: string;
}

type Unit = "hours" | "days" | "months" | "years";

export default function ResultCard({ item, dailyRate, currencySymbol }: ResultCardProps) {
  const [unit, setUnit] = useState<Unit>("days");
  const [imgError, setImgError] = useState(false);

  const workingDays = dailyRate > 0 ? item.price / dailyRate : 0;

  const values = useMemo(() => {
    const days = workingDays;
    return {
      hours: days * 8,
      days: days,
      months: days / 21.75,
      years: days / 261,
    };
  }, [workingDays]);

  const smartUnit: Unit = useMemo(() => {
    if (workingDays < 0.125) return "hours";
    if (workingDays < 30) return "days";
    if (workingDays < 261) return "months";
    return "years";
  }, [workingDays]);

  useEffect(() => {
    setUnit(smartUnit);
  }, [smartUnit]);

  const displayValue = values[unit];
  const formattedValue =
    displayValue < 1
      ? displayValue.toFixed(2)
      : displayValue < 10
      ? displayValue.toFixed(1)
      : Math.round(displayValue).toLocaleString();

  const unitLabels: Record<Unit, string> = {
    hours: "hours",
    days: "days",
    months: "months",
    years: "years",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Item image */}
        <div className="w-full sm:w-32 h-32 rounded-2xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
          {!imgError ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          )}
        </div>

        <div className="flex-1 w-full">
          <h3 className="font-playfair text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground font-inter mt-1">
            {currencySymbol}
            {item.price.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground font-inter mt-0.5">
            Daily rate:{" "}
            <span className="font-medium text-foreground">
              {currencySymbol}
              {dailyRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </p>
        </div>
      </div>

      {/* Giant number */}
      <div className="mt-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <span className="font-playfair text-5xl sm:text-6xl font-bold text-primary">
              {formattedValue}
            </span>
            <p className="text-muted-foreground font-nunito mt-1 capitalize">
              {unitLabels[unit]} of your life
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unit toggles */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {(["hours", "days", "months", "years"] as Unit[]).map((u) => {
          const active = unit === u;
          return (
            <Button
              key={u}
              variant="ghost"
              size="sm"
              onClick={() => setUnit(u)}
              className={`rounded-full font-inter text-xs capitalize transition-colors ${
                active
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active ? (
                <ToggleRight className="w-3.5 h-3.5 mr-1" />
              ) : (
                <ToggleLeft className="w-3.5 h-3.5 mr-1" />
              )}
              {u}
            </Button>
          );
        })}
      </div>

      {/* Worth meter */}
      <div className="mt-8">
        <WorthMeter days={workingDays} />
      </div>
    </motion.div>
  );
}
