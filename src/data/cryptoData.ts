export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  marketCap: number;
  volume24h: number;
  sparkline: number[];
  icon: string;
  holdings?: number;
}

const generateSparkline = (base: number, volatility: number, trend: "up" | "down" | "flat"): number[] => {
  const points: number[] = [];
  let current = base;
  for (let i = 0; i < 24; i++) {
    const change = (Math.random() - (trend === "up" ? 0.35 : trend === "down" ? 0.65 : 0.5)) * volatility;
    current = Math.max(current * 0.9, current + change);
    points.push(Number(current.toFixed(2)));
  }
  return points;
};

export const cryptoAssets: CryptoAsset[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 97432.18,
    change24h: 2341.52,
    changePercent24h: 2.46,
    marketCap: 1920000000000,
    volume24h: 42500000000,
    sparkline: generateSparkline(95000, 800, "up"),
    icon: "₿",
    holdings: 0.45,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3842.67,
    change24h: -87.43,
    changePercent24h: -2.22,
    marketCap: 462000000000,
    volume24h: 18700000000,
    sparkline: generateSparkline(3900, 50, "down"),
    icon: "Ξ",
    holdings: 3.2,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 248.91,
    change24h: 12.34,
    changePercent24h: 5.22,
    marketCap: 118000000000,
    volume24h: 8900000000,
    sparkline: generateSparkline(236, 5, "up"),
    icon: "◎",
    holdings: 25,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 1.12,
    change24h: 0.04,
    changePercent24h: 3.7,
    marketCap: 39800000000,
    volume24h: 1200000000,
    sparkline: generateSparkline(1.08, 0.03, "up"),
    icon: "₳",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    price: 52.87,
    change24h: -1.23,
    changePercent24h: -2.27,
    marketCap: 21400000000,
    volume24h: 890000000,
    sparkline: generateSparkline(54, 1.2, "down"),
    icon: "▲",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 11.34,
    change24h: 0.67,
    changePercent24h: 6.28,
    marketCap: 16200000000,
    volume24h: 650000000,
    sparkline: generateSparkline(10.6, 0.3, "up"),
    icon: "●",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    price: 24.56,
    change24h: -0.89,
    changePercent24h: -3.5,
    marketCap: 15300000000,
    volume24h: 980000000,
    sparkline: generateSparkline(25.4, 0.6, "down"),
    icon: "⬡",
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    price: 1.87,
    change24h: 0.12,
    changePercent24h: 6.86,
    marketCap: 17400000000,
    volume24h: 1100000000,
    sparkline: generateSparkline(1.75, 0.04, "up"),
    icon: "⬢",
  },
];

export const formatCurrency = (value: number): string => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1000) return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${value.toFixed(2)}`;
};

export const formatPercent = (value: number): string => {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};

export const getPortfolioTotal = (): number => {
  return cryptoAssets.reduce((total, asset) => {
    return total + (asset.holdings ?? 0) * asset.price;
  }, 0);
};
