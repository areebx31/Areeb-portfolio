import Header from "@/components/dashboard/Header";
import TickerBar from "@/components/dashboard/TickerBar";
import PortfolioCards from "@/components/dashboard/PortfolioCards";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import CryptoTable from "@/components/dashboard/CryptoTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <Header />
      <TickerBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <PortfolioCards />
        <PortfolioChart />
        <CryptoTable />
        <footer className="text-center py-6">
          <p className="text-xs text-muted-foreground">
            CryptoPulse Dashboard · Market data is simulated for the demo purposes
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
