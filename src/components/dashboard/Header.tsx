import { Activity, Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 glow-primary">
          <Activity className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary neon-text">Crypto</span>
            <span className="text-foreground">Pulse</span>
          </h1>
          <p className="text-xs text-muted-foreground">Real-time Market Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search assets..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-48"
          />
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
          <span className="text-xs font-medium text-success">Live</span>
        </div>

        <button className="relative p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
};

export default Header;
