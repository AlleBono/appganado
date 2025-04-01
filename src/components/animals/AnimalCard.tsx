
import { PawPrint } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type AnimalStatus = "saludable" | "enfermo" | "preñada" | "lactante" | "engorde" | "cuarentena";

export type Animal = {
  id: string;
  name?: string;
  type: string;
  breed: string;
  gender: "macho" | "hembra";
  birthDate: string;
  weight: number;
  status: AnimalStatus;
  image?: string;
  saleReady?: boolean;
};

type AnimalCardProps = {
  animal: Animal;
  onClick?: (animal: Animal) => void;
  className?: string;
};

export function getStatusInfo(status: AnimalStatus) {
  switch(status) {
    case "saludable":
      return { label: "Saludable", className: "bg-success/10 text-success border-success/20" };
    case "enfermo":
      return { label: "Enfermo", className: "bg-destructive/10 text-destructive border-destructive/20" };
    case "preñada":
      return { label: "Preñada", className: "bg-primary/10 text-primary border-primary/20" };
    case "lactante":
      return { label: "Lactante", className: "bg-primary/10 text-primary border-primary/20" };
    case "engorde":
      return { label: "Engorde", className: "bg-warning/10 text-warning border-warning/20" };
    case "cuarentena":
      return { label: "Cuarentena", className: "bg-muted/80 text-muted-foreground border-muted" };
  }
}

// Función para calcular la edad a partir de la fecha de nacimiento
export function calculateAge(birthDate: string): string {
  const birthDateObj = new Date(birthDate);
  const today = new Date();
  
  let years = today.getFullYear() - birthDateObj.getFullYear();
  let months = today.getMonth() - birthDateObj.getMonth();
  
  if (months < 0 || (months === 0 && today.getDate() < birthDateObj.getDate())) {
    years--;
    months += 12;
  }
  
  if (years === 0) {
    return `${months} meses`;
  } else {
    return `${years} años, ${months} meses`;
  }
}

export default function AnimalCard({ animal, onClick, className }: AnimalCardProps) {
  const statusInfo = getStatusInfo(animal.status);
  const age = calculateAge(animal.birthDate);
  
  return (
    <Card className={cn("animal-card", className)}>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10 bg-primary/10">
              <AvatarFallback className="text-primary">
                <PawPrint className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{animal.name || animal.id}</h3>
              <p className="text-xs text-muted-foreground">{animal.breed}</p>
            </div>
          </div>
          <Badge variant="outline" className={statusInfo.className}>
            {statusInfo.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">ID</span>
            <span className="font-medium">{animal.id}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Tipo</span>
            <span className="font-medium">{animal.type}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Sexo</span>
            <span className="font-medium capitalize">{animal.gender}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Edad</span>
            <span className="font-medium">{age}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Peso</span>
            <span className="font-medium">{animal.weight} kg</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">Disponible</span>
            <span className="font-medium">{animal.saleReady ? 'Sí' : 'No'}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => onClick && onClick(animal)}
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
