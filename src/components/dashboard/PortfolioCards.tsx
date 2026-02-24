import { TrendingUp, TrendingDown, Wallet, BarChart3 } from "lucide-react";
import { cryptoAssets, formatCurrency, getPortfolioTotal } from "@/data/cryptoData";

const PortfolioCards = () => {
  const portfolioTotal = getPortfolioTotal();
  const topGainer = [...cryptoAssets].sort((a, b) => b.changePercent24h - a.changePercent24h)[0];
  const topLoser = [...cryptoAssets].sort((a, b) => a.changePercent24h - b.changePercent24h)[0];
  const totalVolume = cryptoAssets.reduce((sum, a) => sum + a.volume24h, 0);

  const cards = [
    {
      title: "Portfolio Value",
      value: formatCurrency(portfolioTotal),
      subtitle: "+$2,847.32 today",
      icon: Wallet,
      accentClass: "text-primary bg-primary/10",
      delay: "0s",
    },
    {
      title: "Top Gainer (24h)",
      value: `${topGainer.symbol}`,
      subtitle: `+${topGainer.changePercent24h.toFixed(2)}%`,
      icon: TrendingUp,
      accentClass: "text-success bg-success/10",
      delay: "0.1s",
    },
    {
      title: "Top Loser (24h)",
      value: `${topLoser.symbol}`,
      subtitle: `${topLoser.changePercent24h.toFixed(2)}%`,
      icon: TrendingDown,
      accentClass: "text-destructive bg-destructive/10",
      delay: "0.2s",
    },
    {
      title: "24h Volume",
      value: formatCurrency(totalVolume),
      subtitle: "Across all assets",
      icon: BarChart3,
      accentClass: "text-accent bg-accent/10",
      delay: "0.3s",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="glass-card rounded-xl p-5 hover-glow opacity-0 animate-slide-up"
          style={{ animationDelay: card.delay, animationFillMode: "forwards" }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {card.title}
            </span>
            <div className={`p-2 rounded-lg ${card.accentClass}`}>
              <card.icon className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold font-mono tracking-tight">{card.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCards;
