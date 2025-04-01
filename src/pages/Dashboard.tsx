
import { PawPrint, Dna, Banknote, ArrowTrendingUp } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RecentAnimals from "@/components/dashboard/RecentAnimals";
import SalesChart from "@/components/dashboard/SalesChart";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import CategoryDistribution from "@/components/dashboard/CategoryDistribution";
import WeightChart from "@/components/dashboard/WeightChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Resumen general de la operación ganadera.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Animales" 
          value="102" 
          icon={<PawPrint className="h-4 w-4" />} 
          change={5.2}
        />
        
        <StatCard 
          title="Nuevos Nacimientos" 
          value="8" 
          icon={<Dna className="h-4 w-4" />} 
          change={12.5}
        />
        
        <StatCard 
          title="Ventas del Mes" 
          value="$24,500" 
          icon={<Banknote className="h-4 w-4" />} 
          change={-3.2}
        />
        
        <StatCard 
          title="Ganancia Promedio" 
          value="18%" 
          icon={<ArrowTrendingUp className="h-4 w-4" />} 
          change={2.1}
        />
      </div>
      
      <div className="grid gap-4 grid-cols-12">
        <RecentAnimals />
        <SalesChart />
      </div>
      
      <div className="grid gap-4 grid-cols-12">
        <CategoryDistribution />
        <WeightChart />
        <UpcomingEvents />
      </div>
    </div>
  );
}
