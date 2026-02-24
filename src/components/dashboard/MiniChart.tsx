import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

interface MiniChartProps {
  data: number[];
  isPositive: boolean;
  height?: number;
}

const MiniChart = ({ data, isPositive, height = 40 }: MiniChartProps) => {
  const chartData = data.map((value, index) => ({ value, index }));
  const color = isPositive ? "hsl(145, 70%, 45%)" : "hsl(0, 72%, 55%)";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id={`gradient-${isPositive ? "up" : "down"}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis domain={["dataMin", "dataMax"]} hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          fill={`url(#gradient-${isPositive ? "up" : "down"})`}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
