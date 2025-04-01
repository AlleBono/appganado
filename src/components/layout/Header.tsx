
import { useState } from 'react';
import { Bell, MessageSquare, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(2);

  return (
    <header className="h-16 border-b border-border bg-background flex items-center px-4 justify-between">
      <div className="flex-1 flex items-center gap-2">
        <div className="relative max-w-md w-full lg:w-[400px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Buscar animales, ventas, etc..." 
            className="w-full pl-9 bg-muted/50 border-none focus-visible:ring-primary"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer py-3">
                <div className="font-medium">Nueva venta registrada</div>
                <div className="text-sm text-muted-foreground">Se ha registrado una nueva venta por $12,500.</div>
                <div className="text-xs text-muted-foreground">Hace 20 minutos</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer py-3">
                <div className="font-medium">Alerta de salud</div>
                <div className="text-sm text-muted-foreground">El bovino #A42 necesita revisión veterinaria.</div>
                <div className="text-xs text-muted-foreground">Hace 1 hora</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer py-3">
                <div className="font-medium">Nuevo nacimiento</div>
                <div className="text-sm text-muted-foreground">Se ha registrado un nuevo nacimiento de ternero.</div>
                <div className="text-xs text-muted-foreground">Hace 3 horas</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-center text-primary justify-center">
              Ver todas las notificaciones
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              {messages > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {messages}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Mensajes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex items-start gap-2 cursor-pointer py-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-medium">Juan Díaz</div>
                  <div className="text-sm text-muted-foreground line-clamp-2">Necesito un reporte de los animales vendidos este mes.</div>
                  <div className="text-xs text-muted-foreground">Hace 10 minutos</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 cursor-pointer py-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-medium">María Rodríguez</div>
                  <div className="text-sm text-muted-foreground line-clamp-2">El veterinario visitará la finca mañana.</div>
                  <div className="text-xs text-muted-foreground">Hace 1 hora</div>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-center text-primary justify-center">
              Ver todos los mensajes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>UR</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline-block">Carlos Mendoza</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
