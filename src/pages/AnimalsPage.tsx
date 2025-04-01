
import { useState } from 'react';
import { Search, Filter, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimalCard, { Animal, AnimalStatus } from '@/components/animals/AnimalCard';

// Datos simulados para los animales
const animalsData: Animal[] = [
  {
    id: "BOV-123",
    name: "Luna",
    type: "Vaca",
    breed: "Holstein",
    gender: "hembra",
    birthDate: "2019-05-15",
    weight: 650,
    status: "saludable",
    saleReady: false
  },
  {
    id: "BOV-124",
    name: "Zeus",
    type: "Toro",
    breed: "Angus",
    gender: "macho",
    birthDate: "2018-03-22",
    weight: 850,
    status: "saludable",
    saleReady: true
  },
  {
    id: "BOV-125",
    type: "Novillo",
    breed: "Charolais",
    gender: "macho",
    birthDate: "2021-08-10",
    weight: 420,
    status: "engorde",
    saleReady: false
  },
  {
    id: "BOV-126",
    name: "Bella",
    type: "Vaca",
    breed: "Jersey",
    gender: "hembra",
    birthDate: "2020-01-30",
    weight: 520,
    status: "preñada",
    saleReady: false
  },
  {
    id: "BOV-127",
    type: "Ternero",
    breed: "Brahman",
    gender: "macho",
    birthDate: "2023-02-15",
    weight: 180,
    status: "saludable",
    saleReady: false
  },
  {
    id: "BOV-128",
    name: "Estrella",
    type: "Vaca",
    breed: "Simmental",
    gender: "hembra",
    birthDate: "2019-11-05",
    weight: 610,
    status: "lactante",
    saleReady: false
  },
  {
    id: "BOV-129",
    type: "Novillo",
    breed: "Hereford",
    gender: "macho",
    birthDate: "2022-04-12",
    weight: 350,
    status: "engorde",
    saleReady: false
  },
  {
    id: "BOV-130",
    name: "Thor",
    type: "Toro",
    breed: "Brangus",
    gender: "macho",
    birthDate: "2017-09-20",
    weight: 920,
    status: "saludable",
    saleReady: true
  },
  {
    id: "BOV-131",
    type: "Vaquilla",
    breed: "Holstein",
    gender: "hembra",
    birthDate: "2022-07-03",
    weight: 290,
    status: "saludable",
    saleReady: false
  },
  {
    id: "BOV-132",
    name: "Flor",
    type: "Vaca",
    breed: "Jersey",
    gender: "hembra",
    birthDate: "2020-03-17",
    weight: 540,
    status: "enfermo",
    saleReady: false
  }
];

export default function AnimalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [animalDetailOpen, setAnimalDetailOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  // Filtrar los animales según los criterios de búsqueda
  const filteredAnimals = animalsData.filter(animal => {
    // Filtro por término de búsqueda (ID, nombre o raza)
    const matchesSearch = 
      animal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (animal.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por estado
    const matchesStatus = selectedStatus === 'all' || animal.status === selectedStatus;
    
    // Filtro por tipo
    const matchesType = selectedType === 'all' || animal.type.toLowerCase() === selectedType.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Filtros para pestaña "A la venta"
  const saleReadyAnimals = animalsData.filter(animal => animal.saleReady);

  // Manejo del clic en una tarjeta de animal
  const handleAnimalClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setAnimalDetailOpen(true);
    // Aquí podríamos abrir un modal o navegar a una página de detalle
    console.log("Ver detalles del animal:", animal);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Gestión de Animales</h1>
        <p className="text-muted-foreground">
          Administra tu inventario de ganado bovino.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="sale">A la venta</TabsTrigger>
          </TabsList>

          <Button className="sm:ml-auto">
            <PlusCircle className="h-4 w-4 mr-2" />
            Nuevo Animal
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por ID, nombre o raza..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Estado" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="saludable">Saludable</SelectItem>
                <SelectItem value="enfermo">Enfermo</SelectItem>
                <SelectItem value="preñada">Preñada</SelectItem>
                <SelectItem value="lactante">Lactante</SelectItem>
                <SelectItem value="engorde">Engorde</SelectItem>
                <SelectItem value="cuarentena">Cuarentena</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Tipo" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="toro">Toro</SelectItem>
                <SelectItem value="vaca">Vaca</SelectItem>
                <SelectItem value="novillo">Novillo</SelectItem>
                <SelectItem value="vaquilla">Vaquilla</SelectItem>
                <SelectItem value="ternero">Ternero</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          {filteredAnimals.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <PawPrint className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No se encontraron animales</h3>
              <p className="text-muted-foreground mt-1">
                Intenta ajustar tus filtros o agrega un nuevo animal.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredAnimals.map((animal) => (
                <AnimalCard 
                  key={animal.id} 
                  animal={animal} 
                  onClick={handleAnimalClick}
                />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="sale" className="mt-0">
          {saleReadyAnimals.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <PawPrint className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No hay animales a la venta</h3>
              <p className="text-muted-foreground mt-1">
                Marca animales como disponibles para venta para que aparezcan aquí.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {saleReadyAnimals.map((animal) => (
                <AnimalCard 
                  key={animal.id} 
                  animal={animal} 
                  onClick={handleAnimalClick}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
