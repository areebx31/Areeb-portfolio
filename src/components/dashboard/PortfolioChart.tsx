import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const generatePortfolioHistory = () => {
  const data = [];
  let value = 42000;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i < 12; i++) {
    value += (Math.random() - 0.35) * 3000;
    data.push({ month: months[i], value: Math.round(value) });
  }
  return data;
};

const data = generatePortfolioHistory();

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg px-3 py-2 border border-border">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-mono font-bold text-primary">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const PortfolioChart = () => {
  return (
    <div
      className="glass-card rounded-xl p-6 opacity-0 animate-slide-up"
      style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Portfolio Performance</h2>
          <p className="text-xs text-muted-foreground mt-1">12-month overview</p>
        </div>
        <div className="flex gap-1">
          {["1M", "3M", "6M", "1Y"].map((period) => (
            <button
              key={period}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                period === "1Y"
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0.25} />
              <stop offset="100%" stopColor="hsl(175, 80%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }}
          />
          <YAxis
            hide
            domain={["dataMin - 2000", "dataMax + 2000"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(175, 80%, 50%)"
            strokeWidth={2}
            fill="url(#portfolioGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;
