
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeDuration?: string;
  className?: string;
};

export default function StatCard({ 
  title, 
  value, 
  icon, 
  change, 
  changeDuration = "desde el mes pasado", 
  className 
}: StatCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden backdrop-blur-sm animate-float relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-30 before:content-[''] before:z-0",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-pulse-gentle shadow-inner">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
      {typeof change !== 'undefined' && (
        <CardFooter className="pt-0 relative z-10">
          <p className="flex items-center text-xs text-muted-foreground">
            <span className={cn(
              "mr-1 flex items-center",
              change > 0 ? "text-success" : change < 0 ? "text-destructive" : ""
            )}>
              <TriangleIcon 
                className={cn(
                  "h-3 w-3 mr-1", 
                  change > 0 ? "text-success rotate-0" : change < 0 ? "text-destructive rotate-180" : ""
                )} 
              />
              {Math.abs(change)}%
            </span>
            {changeDuration}
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
