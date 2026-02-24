import { cryptoAssets, formatCurrency, formatPercent } from "@/data/cryptoData";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const TickerBar = () => {
  const items = [...cryptoAssets, ...cryptoAssets];

  return (
    <div className="overflow-hidden border-b border-border bg-secondary/30">
      <div className="flex animate-ticker whitespace-nowrap py-2">
        {items.map((asset, i) => {
          const isPositive = asset.changePercent24h >= 0;
          return (
            <div key={`${asset.id}-${i}`} className="flex items-center gap-2 px-6 shrink-0">
              <span className="font-semibold text-xs">{asset.symbol}</span>
              <span className="font-mono text-xs text-muted-foreground">{formatCurrency(asset.price)}</span>
              <span className={`flex items-center gap-0.5 text-xs font-mono font-medium ${isPositive ? "price-up" : "price-down"}`}>
                {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {formatPercent(asset.changePercent24h)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TickerBar;
