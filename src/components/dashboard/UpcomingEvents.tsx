
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Event = {
  id: string;
  title: string;
  date: string;
  type: "health" | "reproduction" | "sale" | "other";
};

// Datos simulados para eventos próximos
const upcomingEvents: Event[] = [
  {
    id: "event1",
    title: "Revisión veterinaria",
    date: "Hoy, 14:00",
    type: "health",
  },
  {
    id: "event2",
    title: "Inseminación artificial",
    date: "Mañana, 09:30",
    type: "reproduction",
  },
  {
    id: "event3",
    title: "Venta programada",
    date: "22/10/2023",
    type: "sale",
  },
  {
    id: "event4",
    title: "Vacunación general",
    date: "25/10/2023",
    type: "health",
  },
];

// Función para obtener el color según el tipo de evento
function getEventStyle(type: Event["type"]) {
  switch (type) {
    case "health":
      return {
        bg: "bg-success/10",
        text: "text-success",
        border: "border-success/20",
        icon: <Tag className="h-4 w-4 text-success" />,
      };
    case "reproduction":
      return {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        icon: <Tag className="h-4 w-4 text-primary" />,
      };
    case "sale":
      return {
        bg: "bg-warning/10",
        text: "text-warning",
        border: "border-warning/20",
        icon: <Tag className="h-4 w-4 text-warning" />,
      };
    default:
      return {
        bg: "bg-muted",
        text: "text-muted-foreground",
        border: "border-border",
        icon: <Tag className="h-4 w-4" />,
      };
  }
}

export default function UpcomingEvents() {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Próximos Eventos</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
        <CardDescription>Eventos y actividades programadas</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="space-y-3">
          {upcomingEvents.map((event) => {
            const style = getEventStyle(event.type);
            return (
              <div
                key={event.id}
                className="flex items-start rounded-md border p-3 text-sm transition-all hover:bg-muted/50"
              >
                <div className="flex-1 space-y-1">
                  <p className="font-medium leading-none">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <Badge
                  variant="outline"
                  className={cn(style.bg, style.text, style.border, "flex items-center gap-1")}
                >
                  {style.icon}
                  <span>
                    {event.type === "health"
                      ? "Salud"
                      : event.type === "reproduction"
                      ? "Reproducción"
                      : event.type === "sale"
                      ? "Venta"
                      : "Otro"}
                  </span>
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <Button variant="ghost" size="sm" className="w-full gap-1">
          Ver calendario completo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
