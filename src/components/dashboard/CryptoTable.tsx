import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";
import { cryptoAssets, formatCurrency, formatPercent } from "@/data/cryptoData";
import MiniChart from "./MiniChart";

const CryptoTable = () => {
  return (
    <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold">Market Overview</h2>
        <div className="flex gap-2">
          {["All", "Gainers", "Losers"].map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === "All"
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-muted-foreground uppercase tracking-wider border-b border-border">
              <th className="text-left px-6 py-3 font-medium w-8">#</th>
              <th className="text-left px-6 py-3 font-medium">Asset</th>
              <th className="text-right px-6 py-3 font-medium">Price</th>
              <th className="text-right px-6 py-3 font-medium">24h Change</th>
              <th className="text-right px-6 py-3 font-medium">Market Cap</th>
              <th className="text-right px-6 py-3 font-medium">Volume (24h)</th>
              <th className="text-right px-6 py-3 font-medium w-32">Last 24h</th>
              <th className="w-10" />
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset, index) => {
              const isPositive = asset.changePercent24h >= 0;
              return (
                <tr
                  key={asset.id}
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-muted-foreground">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg font-bold shrink-0">
                        {asset.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{asset.name}</p>
                        <p className="text-xs text-muted-foreground">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-semibold text-sm">
                    {formatCurrency(asset.price)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={`flex items-center justify-end gap-1 ${isPositive ? "price-up" : "price-down"}`}>
                      {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                      <span className="font-mono text-sm font-medium">{formatPercent(asset.changePercent24h)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground font-mono">
                    {formatCurrency(asset.marketCap)}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground font-mono">
                    {formatCurrency(asset.volume24h)}
                  </td>
                  <td className="px-6 py-4">
                    <MiniChart data={asset.sparkline} isPositive={isPositive} />
                  </td>
                  <td className="px-3 py-4">
                    <Star className="w-4 h-4 text-muted-foreground/40 group-hover:text-warning transition-colors" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-border">
        {cryptoAssets.map((asset) => {
          const isPositive = asset.changePercent24h >= 0;
          return (
            <div key={asset.id} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                  {asset.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm">{asset.symbol}</p>
                  <p className="text-xs text-muted-foreground">{asset.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono font-semibold text-sm">{formatCurrency(asset.price)}</p>
                <p className={`text-xs font-mono font-medium ${isPositive ? "price-up" : "price-down"}`}>
                  {formatPercent(asset.changePercent24h)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoTable;
