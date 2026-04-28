import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/calculator/Header";
import SalaryForm from "@/components/calculator/SalaryForm";
import ItemSearch from "@/components/calculator/ItemSearch";
import ResultCard from "@/components/calculator/ResultCard";

interface SalaryData {
  salary: number;
  frequency: "annual" | "monthly";
  currency: { code: string; symbol: string };
  dailyRate: number;
}

interface ItemData {
  name: string;
  price: number;
  image: string;
}

export default function Calculator() {
  const [salaryData, setSalaryData] = useState<SalaryData | null>(null);
  const [itemData, setItemData] = useState<ItemData | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Header />

        <div className="space-y-6">
          <SalaryForm
            onChange={(data) => {
              setSalaryData(data);
            }}
          />

          <ItemSearch
            currencySymbol={salaryData?.currency.symbol || "R"}
            onCalculate={(item) => setItemData(item)}
          />

          {salaryData && itemData && salaryData.dailyRate > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ResultCard
                item={itemData}
                dailyRate={salaryData.dailyRate}
                currencySymbol={salaryData.currency.symbol}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
