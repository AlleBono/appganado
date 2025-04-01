
import { PawPrint, MoreVertical, ArrowRight } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Datos simulados para animales recientes
const recentAnimals = [
  { 
    id: "A123", 
    type: "Toro", 
    breed: "Angus", 
    age: "3 años", 
    weight: "750 kg",
    status: "saludable"
  },
  { 
    id: "A124", 
    type: "Vaca", 
    breed: "Holstein", 
    age: "4 años", 
    weight: "650 kg",
    status: "preñada" 
  },
  { 
    id: "A125", 
    type: "Novillo", 
    breed: "Brahman", 
    age: "2 años", 
    weight: "550 kg",
    status: "engorde" 
  },
  { 
    id: "A126", 
    type: "Ternero", 
    breed: "Charolais", 
    age: "6 meses", 
    weight: "220 kg",
    status: "saludable" 
  },
  { 
    id: "A127", 
    type: "Vaca", 
    breed: "Simmental", 
    age: "5 años", 
    weight: "680 kg",
    status: "lactante" 
  }
];

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'saludable':
      return <Badge variant="outline" className="bg-success/10 text-success border-success/20">Saludable</Badge>;
    case 'preñada':
      return <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Preñada</Badge>;
    case 'lactante':
      return <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Lactante</Badge>;
    case 'engorde':
      return <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Engorde</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

export default function RecentAnimals() {
  return (
    <Card className="col-span-7">
      <CardHeader className="flex flex-row items-center">
        <div className="space-y-1.5 flex-1">
          <CardTitle>Animales Recientes</CardTitle>
          <CardDescription>Lista de animales agregados o actualizados recientemente.</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Menú</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Ver todos</DropdownMenuItem>
            <DropdownMenuItem>Exportar a Excel</DropdownMenuItem>
            <DropdownMenuItem>Crear reporte</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Raza</TableHead>
              <TableHead>Edad</TableHead>
              <TableHead>Peso</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentAnimals.map((animal) => (
              <TableRow key={animal.id} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 bg-primary/10">
                      <AvatarFallback className="text-primary">
                        <PawPrint className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{animal.id}</span>
                  </div>
                </TableCell>
                <TableCell>{animal.type}</TableCell>
                <TableCell>{animal.breed}</TableCell>
                <TableCell>{animal.age}</TableCell>
                <TableCell>{animal.weight}</TableCell>
                <TableCell>{getStatusBadge(animal.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button variant="ghost" size="sm" className="w-full gap-1">
          Ver todos los animales
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
