import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { lookupItemWithAI } from "@/lib/base44";

interface ItemSearchProps {
  currencySymbol: string;
  onCalculate: (item: {
    name: string;
    price: number;
    image: string;
  }) => void;
}

export default function ItemSearch({ currencySymbol, onCalculate }: ItemSearchProps) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [cleanedName, setCleanedName] = useState("");

  async function handleSearch() {
    if (!itemName.trim()) return;
    setLoading(true);
    try {
      const result = await lookupItemWithAI(itemName);
      setCleanedName(result);
      setItemName(result);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  function handleCalculate() {
    const numPrice = parseFloat(price);
    if (!cleanedName.trim() || !numPrice || numPrice <= 0) return;
    const image = `https://loremflickr.com/400/400/${encodeURIComponent(
      cleanedName
    )}`;
    onCalculate({ name: cleanedName, price: numPrice, image });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <h2 className="font-playfair text-xl font-semibold text-foreground">
          The Item
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <Label className="text-sm font-inter font-medium text-foreground mb-2 block">
            Item Name
          </Label>
          <div className="flex gap-2">
            <Input
              placeholder="e.g. Nike Air Max, iPhone 15..."
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
                setCleanedName(e.target.value);
              }}
              className="rounded-xl font-inter flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleSearch}
              disabled={loading || !itemName.trim()}
              className="rounded-xl shrink-0"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
          {cleanedName && cleanedName !== itemName && (
            <p className="mt-1.5 text-xs text-primary font-inter">
              Suggested: {cleanedName}
            </p>
          )}
        </div>

        <div>
          <Label className="text-sm font-inter font-medium text-foreground mb-2 block">
            Price
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-inter">
              {currencySymbol}
            </span>
            <Input
              type="number"
              placeholder="e.g. 2899"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pl-8 rounded-xl font-inter"
            />
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!cleanedName.trim() || !parseFloat(price)}
          className="w-full rounded-full bg-primary text-primary-foreground font-inter font-medium hover:bg-primary/90 transition-colors"
        >
          Calculate
          <Sparkles className="w-4 h-4 ml-1.5" />
        </Button>
      </div>
    </motion.div>
  );
}
