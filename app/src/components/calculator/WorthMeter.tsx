import { motion } from "framer-motion";

const levels = [
  { max: 0.5, label: "Pocket Change", color: "bg-green-500", text: "text-green-600" },
  { max: 2, label: "Reasonable Buy", color: "bg-blue-500", text: "text-blue-600" },
  { max: 5, label: "Worth Considering", color: "bg-amber-500", text: "text-amber-600" },
  { max: 15, label: "Think Twice", color: "bg-orange-500", text: "text-orange-600" },
  { max: 60, label: "Major Purchase", color: "bg-red-500", text: "text-red-600" },
  { max: 261, label: "Life Decision", color: "bg-red-600", text: "text-red-700" },
  { max: Infinity, label: "Luxury Territory", color: "bg-purple-600", text: "text-purple-700" },
];

function getLevel(days: number) {
  return levels.find((l) => days < l.max) || levels[levels.length - 1];
}

interface WorthMeterProps {
  days: number;
}

export default function WorthMeter({ days }: WorthMeterProps) {
  const level = getLevel(days);
  const percentage = Math.min((days / 261) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-inter font-medium">
        <span className="text-muted-foreground">Worth It Meter</span>
        <span className={level.text}>{level.label}</span>
      </div>
      <div className="h-3 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${level.color}`}
        />
      </div>
    </div>
  );
}
