
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  PawPrint, 
  Dna, 
  Banknote, 
  Bell,
  MessageSquare,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Trees
} from 'lucide-react';

type SidebarItemProps = {
  icon?: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
  imageSrc?: string;
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  to, 
  active, 
  collapsed, 
  onClick,
  imageSrc
}: SidebarItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-primary/10 group relative",
        active ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {imageSrc ? (
        <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
          <img src={imageSrc} alt={label} className="w-full h-full object-cover" />
        </div>
      ) : (
        Icon && <Icon className="w-5 h-5" />
      )}
      {!collapsed && <span className="text-sm">{label}</span>}
      {collapsed && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-primary text-primary-foreground text-xs invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {label}
        </div>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = window.location.pathname;

  // Farm banner image at the top of the sidebar
  const farmBannerImage = "/farm-banner.jpg";

  return (
    <div className={cn(
      "flex flex-col h-screen bg-background border-r border-border transition-all duration-300",
      collapsed ? "w-[70px]" : "w-[240px]"
    )}>
      <div className="flex items-center p-4 h-16 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">GanaderApp</span>
          </div>
        )}
        {collapsed && <PawPrint className="h-6 w-6 text-primary mx-auto" />}
      </div>
      
      {!collapsed && (
        <div className="relative h-32 overflow-hidden">
          <img 
            src={farmBannerImage} 
            alt="Farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white font-bold text-lg">Mi Hacienda</h2>
          </div>
        </div>
      )}
      
      <div className="flex-1 py-4 flex flex-col gap-1 px-2 overflow-y-auto">
        <SidebarItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          to="/" 
          active={pathname === '/'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={PawPrint}
          label="Animales" 
          to="/animals" 
          active={pathname === '/animals'} 
          collapsed={collapsed}
          imageSrc="/cattle-icon.jpg"
        />
        <SidebarItem 
          icon={Dna} 
          label="Genealogía" 
          to="/genealogy" 
          active={pathname === '/genealogy'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={Banknote} 
          label="Ventas" 
          to="/sales" 
          active={pathname === '/sales'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={Calendar} 
          label="Calendario" 
          to="/calendar" 
          active={pathname === '/calendar'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={MessageSquare} 
          label="Mensajes" 
          to="/messages" 
          active={pathname === '/messages'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={Bell} 
          label="Notificaciones" 
          to="/notifications" 
          active={pathname === '/notifications'} 
          collapsed={collapsed}
        />
        <SidebarItem 
          icon={Trees} 
          label="Haciendas" 
          to="/farms" 
          active={pathname === '/farms'} 
          collapsed={collapsed}
          imageSrc="/farm-icon.jpg"
        />
      </div>
      
      <div className="p-4 border-t border-border">
        <SidebarItem 
          icon={Settings} 
          label="Configuración" 
          to="/settings" 
          active={pathname === '/settings'} 
          collapsed={collapsed}
        />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full mt-2"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
