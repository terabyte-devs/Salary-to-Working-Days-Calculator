import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DollarSign, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const currencies = [
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "MXN", symbol: "Mex$", name: "Mexican Peso" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "AED", symbol: "dh", name: "UAE Dirham" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
];

interface SalaryFormProps {
  onChange: (data: {
    salary: number;
    frequency: "annual" | "monthly";
    currency: { code: string; symbol: string };
    dailyRate: number;
  }) => void;
}

export default function SalaryForm({ onChange }: SalaryFormProps) {
  const [salary, setSalary] = useState<string>("");
  const [frequency, setFrequency] = useState<"annual" | "monthly">("annual");
  const [currencyCode, setCurrencyCode] = useState("ZAR");

  const currency = currencies.find((c) => c.code === currencyCode) || currencies[0];
  const numSalary = parseFloat(salary) || 0;
  const annualSalary = frequency === "annual" ? numSalary : numSalary * 12;
  const dailyRate = annualSalary > 0 ? annualSalary / 261 : 0;

  useEffect(() => {
    onChange({
      salary: numSalary,
      frequency,
      currency,
      dailyRate,
    });
  }, [salary, frequency, currencyCode, dailyRate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <DollarSign className="w-5 h-5" />
        </div>
        <h2 className="font-playfair text-xl font-semibold text-foreground">
          Your Salary
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <Label className="text-sm font-inter font-medium text-foreground mb-2 block">
            Salary Amount
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-inter">
              {currency.symbol}
            </span>
            <Input
              type="number"
              placeholder="e.g. 450000"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="pl-8 rounded-xl font-inter"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-inter font-medium text-foreground mb-2 block">
              Frequency
            </Label>
            <ToggleGroup
              type="single"
              value={frequency}
              onValueChange={(v) => v && setFrequency(v as "annual" | "monthly")}
              className="w-full"
            >
              <ToggleGroupItem
                value="annual"
                className="flex-1 rounded-xl font-inter data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Annual
              </ToggleGroupItem>
              <ToggleGroupItem
                value="monthly"
                className="flex-1 rounded-xl font-inter data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                Monthly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <Label className="text-sm font-inter font-medium text-foreground mb-2 block">
              Currency
            </Label>
            <Select value={currencyCode} onValueChange={setCurrencyCode}>
              <SelectTrigger className="rounded-xl font-inter">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                {currencies.map((c) => (
                  <SelectItem key={c.code} value={c.code} className="font-inter">
                    {c.code} — {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {dailyRate > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-xl bg-secondary/60 px-4 py-3 text-sm font-inter text-muted-foreground"
          >
            Your daily rate:{" "}
            <span className="font-semibold text-foreground">
              {currency.symbol}
              {dailyRate.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>{" "}
            per working day
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
