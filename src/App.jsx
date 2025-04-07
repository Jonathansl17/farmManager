import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de tener este archivo con los estilos de Tailwind

// ============= ICONOS =============
// Implementación simplificada de iconos para no depender de lucide-react
const Icon = ({ children, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const Plant = (props) => (
  <Icon {...props}>
    <path d="M7 17.8C7 19.56 8.5 21 10.34 21H13.66C15.5 21 17 19.56 17 17.8V17" />
    <path d="M11.25 3C9.5 5 7 5.5 3 6.5C3 11.5 6 15.5 12 17" />
    <path d="M12.75 3C14.5 5 17 5.5 21 6.5C21 11.5 18 15.5 12 17" />
  </Icon>
);

const Scissors = (props) => (
  <Icon {...props}>
    <path d="M6 9 L12 15 L18 9" />
    <path d="M6 15 L12 9 L18 15" />
  </Icon>
);

const Truck = (props) => (
  <Icon {...props}>
    <path d="M1 3h15v13H1z" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </Icon>
);

const DollarSign = (props) => (
  <Icon {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </Icon>
);

const Calendar = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>
);

const MapPin = (props) => (
  <Icon {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

const Ruler = (props) => (
  <Icon {...props}>
    <path d="M3 5v14" />
    <path d="M6 5v14" />
    <path d="M16 5v14" />
    <path d="M19 5v14" />
    <path d="M3 5h16" />
    <path d="M3 10h16" />
    <path d="M3 14h16" />
    <path d="M3 19h16" />
  </Icon>
);

const Droplets = (props) => (
  <Icon {...props}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </Icon>
);

const Sun = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
);

const Sprout = (props) => (
  <Icon {...props}>
    <path d="M7 20h10" />
    <path d="M12 20v-9" />
    <path d="M9 9s0-3 3-3 3 3 3 3" />
    <path d="M9 6c0-1.7.3-3 3-3s3 1.3 3 3" />
  </Icon>
);

const TrendingUp = (props) => (
  <Icon {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </Icon>
);

const BarChart3 = (props) => (
  <Icon {...props}>
    <path d="M3 3v18h18" />
    <path d="M8 17V9" />
    <path d="M12 17V5" />
    <path d="M16 17v-5" />
  </Icon>
);

const ShoppingBag = (props) => (
  <Icon {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Icon>
);

const Plus = (props) => (
  <Icon {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
);

const Edit = (props) => (
  <Icon {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Icon>
);

const Eye = (props) => (
  <Icon {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const Trash = (props) => (
  <Icon {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Icon>
);

const FileText = (props) => (
  <Icon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Icon>
);

const CheckCircle2 = (props) => (
  <Icon {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const CircleDashed = (props) => (
  <Icon {...props}>
    <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95" />
    <path d="M3.69 8.56A9 9 0 0 0 3 12" />
    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <path d="M8.56 20.31A9 9 0 0 0 12 21" />
    <path d="M15.44 20.31a9 9 0 0 0 2.92-1.95" />
    <path d="M20.31 15.44A9 9 0 0 0 21 12" />
    <path d="M20.31 8.56a9 9 0 0 0-1.95-2.92" />
    <path d="M15.44 3.69A9 9 0 0 0 12 3" />
  </Icon>
);

const Search = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
);

// ============= COMPONENTES UI BÁSICOS =============
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };
  
  return (
    <button 
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ className, ...props }) => (
  <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
);

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

const Input = ({ className, ...props }) => (
  <input
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
);

const Label = ({ className, ...props }) => (
  <label
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
);

const Badge = ({ variant = "default", className, ...props }) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border border-input",
  };
  
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

const Avatar = ({ className, ...props }) => (
  <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
);

const AvatarImage = ({ className, ...props }) => (
  <img className={cn("aspect-square h-full w-full", className)} {...props} />
);

const AvatarFallback = ({ className, ...props }) => (
  <div
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
);

const Progress = ({ value = 0, className, ...props }) => (
  <div
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
);

const Table = ({ className, ...props }) => (
  <div className="w-full overflow-auto">
    <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
);

const TableHeader = ({ className, ...props }) => (
  <thead className={cn("[&_tr]:border-b", className)} {...props} />
);

const TableBody = ({ className, ...props }) => (
  <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

const TableRow = ({ className, ...props }) => (
  <tr
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
);

const TableHead = ({ className, ...props }) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }) => (
  <td
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
);

const Tabs = ({ defaultValue, className, children, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  
  // Filtrar los hijos para encontrar TabsList y TabsContent
  const tabsList = React.Children.toArray(children).find(
    child => child.type === TabsList
  );
  
  const tabsContent = React.Children.toArray(children).filter(
    child => child.type === TabsContent
  );
  
  // Modificar TabsList para pasar el valor actual y la función de cambio
  const modifiedTabsList = React.cloneElement(tabsList, {
    value,
    onValueChange: setValue,
  });
  
  // Modificar cada TabsContent para mostrar solo el contenido activo
  const modifiedTabsContent = tabsContent.map(content => 
    React.cloneElement(content, {
      value,
      isActive: content.props.value === value,
    })
  );
  
  return (
    <div className={cn("", className)} {...props}>
      {modifiedTabsList}
      {modifiedTabsContent}
    </div>
  );
};

const TabsList = ({ className, children, value, onValueChange, ...props }) => {
  // Modificar cada TabsTrigger para pasar el valor actual y la función de cambio
  const modifiedChildren = React.Children.map(children, child => 
    React.cloneElement(child, {
      isActive: child.props.value === value,
      onClick: () => onValueChange(child.props.value),
    })
  );
  
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {modifiedChildren}
    </div>
  );
};

const TabsTrigger = ({ className, children, isActive, ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      isActive
        ? "bg-background text-foreground shadow-sm"
        : "hover:bg-background/50 hover:text-foreground",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

const TabsContent = ({ className, children, value, isActive, ...props }) => {
  if (!isActive) return null;
  
  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// ============= COMPONENTES DE NAVEGACIÓN =============
const MainNav = ({ className, ...props }) => (
  <nav
    className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    {...props}
  >
    <a
      href="#"
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      Dashboard
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Campos
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Cultivos
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Siembra
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Cosecha
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Entregas
    </a>
    <a
      href="#"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Reportes
    </a>
  </nav>
);

const UserNav = () => (
  <div className="relative">
    <button className="relative h-8 w-8 rounded-full">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="@farmer" />
        <AvatarFallback>FM</AvatarFallback>
      </Avatar>
    </button>
  </div>
);

const SearchComponent = () => (
  <div className="relative w-full max-w-sm">
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input placeholder="Buscar..." className="pl-8" />
  </div>
);

// ============= COMPONENTES DE DASHBOARD =============
const Overview = () => {
  // Datos de ejemplo para el gráfico
  const data = [
    { name: "Ene", Cebollas: 4000, Tomates: 2400, Papas: 2400 },
    { name: "Feb", Cebollas: 3000, Tomates: 1398, Papas: 2210 },
    { name: "Mar", Cebollas: 2000, Tomates: 9800, Papas: 2290 },
    { name: "Abr", Cebollas: 2780, Tomates: 3908, Papas: 2000 },
    { name: "May", Cebollas: 1890, Tomates: 4800, Papas: 2181 },
    { name: "Jun", Cebollas: 2390, Tomates: 3800, Papas: 2500 },
    { name: "Jul", Cebollas: 3490, Tomates: 4300, Papas: 2100 },
  ];

  return (
    <div className="h-[350px] w-full">
      <div className="flex justify-between">
        <div className="space-y-1">
          <div className="text-xl font-semibold">Rendimiento por Cultivo</div>
          <div className="text-sm text-muted-foreground">Producción mensual en kg</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Cebollas</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Tomates</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Papas</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 h-[300px] w-full bg-gradient-to-b from-green-50 to-green-100 rounded-md p-4">
        <div className="flex h-full w-full items-end justify-between gap-2">
          {data.map((month, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex gap-1">
                <div 
                  className="w-8 bg-green-500 rounded-t-sm" 
                  style={{ height: `${month.Cebollas / 100}px` }}
                ></div>
                <div 
                  className="w-8 bg-red-500 rounded-t-sm" 
                  style={{ height: `${month.Tomates / 100}px` }}
                ></div>
                <div 
                  className="w-8 bg-yellow-500 rounded-t-sm" 
                  style={{ height: `${month.Papas / 100}px` }}
                ></div>
              </div>
              <div className="mt-2 text-xs font-medium">{month.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentDeliveries = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      product: "Cebollas: 500kg (Primera)",
      amount: "+$1,250.00",
      avatar: "SA"
    },
    {
      id: 2,
      client: "SuperMarket B",
      product: "Tomates: 300kg (Primera)",
      amount: "+$890.00",
      avatar: "SB"
    },
    {
      id: 3,
      client: "Distribuidor Local",
      product: "Cebollas: 200kg (Segunda)",
      amount: "+$320.00",
      avatar: "DL"
    },
    {
      id: 4,
      client: "Mercado Central",
      product: "Papas: 400kg (Primera)",
      amount: "+$720.00",
      avatar: "MC"
    },
    {
      id: 5,
      client: "SuperMarket A",
      product: "Tomates: 250kg (Primera)",
      amount: "+$750.00",
      avatar: "SA"
    }
  ];

  return (
    <div className="space-y-8">
      {deliveries.map((delivery) => (
        <div key={delivery.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{delivery.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{delivery.client}</p>
            <p className="text-sm text-muted-foreground">
              {delivery.product}
            </p>
          </div>
          <div className="ml-auto font-medium">{delivery.amount}</div>
        </div>
      ))}
    </div>
  );
};

const UpcomingTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Riego de cebollas",
      field: "Campo 3",
      date: "Hoy, 6:00 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Aplicación de fertilizante",
      field: "Campo 2",
      date: "Hoy, 3:00 PM",
      completed: false,
    },
    {
      id: 3,
      title: "Cosecha de tomates",
      field: "Campo 1",
      date: "Mañana, 7:00 AM",
      completed: false,
    },
    {
      id: 4,
      title: "Preparación de terreno",
      field: "Campo 4",
      date: "Mañana, 2:00 PM",
      completed: false,
    },
    {
      id: 5,
      title: "Entrega a SuperMarket A",
      field: "Almacén",
      date: "Pasado mañana, 9:00 AM",
      completed: false,
    },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={cn(
            "flex items-center justify-between rounded-lg border p-3",
            task.completed && "bg-muted/50"
          )}
        >
          <div className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <CircleDashed className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <p className={cn("font-medium", task.completed && "line-through text-muted-foreground")}>
                {task.title}
              </p>
              <p className="text-xs text-muted-foreground">{task.field}</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">{task.date}</div>
        </div>
      ))}
    </div>
  );
};

const CropStatus = () => {
  const crops = [
    {
      id: 1,
      name: "Cebollas",
      field: "Campo 3",
      plantedDate: "15 Ene 2023",
      harvestDate: "10 Abr 2023",
      progress: 85,
      status: "Crecimiento",
    },
    {
      id: 2,
      name: "Tomates",
      field: "Campo 1",
      plantedDate: "1 Feb 2023",
      harvestDate: "5 Abr 2023",
      progress: 95,
      status: "Pre-cosecha",
    },
    {
      id: 3,
      name: "Papas",
      field: "Campo 2",
      plantedDate: "10 Feb 2023",
      harvestDate: "20 May 2023",
      progress: 45,
      status: "Crecimiento",
    },
    {
      id: 4,
      name: "Cebollas",
      field: "Campo 4",
      plantedDate: "1 Mar 2023",
      harvestDate: "25 Jun 2023",
      progress: 25,
      status: "Crecimiento temprano",
    },
  ];

  return (
    <div className="space-y-4">
      {crops.map((crop) => (
        <div key={crop.id} className="grid gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                {crop.name} - {crop.field}
              </p>
              <p className="text-xs text-muted-foreground">
                Plantado: {crop.plantedDate} | Cosecha est.: {crop.harvestDate}
              </p>
            </div>
            <div className="text-sm font-medium">{crop.status}</div>
          </div>
          <Progress value={crop.progress} className="h-2" />
          <p className="text-xs text-right text-muted-foreground">
            {crop.progress}% completado
          </p>
        </div>
      ))}
    </div>
  );
};

// ============= COMPONENTES DE CAMPOS =============
const FieldMap = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-b-lg bg-[#E8F4EA]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Campo 1 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 1</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Activo
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Tomates</p>
                <p>Área: 3.2 ha</p>
                <p>Progreso: 95%</p>
              </div>
            </div>
          </div>
          
          {/* Campo 2 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 2</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Activo
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Papas</p>
                <p>Área: 4.5 ha</p>
                <p>Progreso: 45%</p>
              </div>
            </div>
          </div>
          
          {/* Campo 3 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 3</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Activo
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Cebollas</p>
                <p>Área: 4.2 ha</p>
                <p>Progreso: 85%</p>
              </div>
            </div>
          </div>
          
          {/* Campo 4 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 4</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Activo
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Cebollas</p>
                <p>Área: 3.8 ha</p>
                <p>Progreso: 25%</p>
              </div>
            </div>
          </div>
          
          {/* Campo 5 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#D9D9A0] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 5</h3>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                  En preparación
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Próximo: Zanahorias</p>
                <p>Área: 2.8 ha</p>
                <p>Listo en: 5 días</p>
              </div>
            </div>
          </div>
          
          {/* Campo 6 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#D9D9A0] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 6</h3>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                  En preparación
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Próximo: Maíz</p>
                <p>Área: 3.5 ha</p>
                <p>Listo en: 10 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldList = () => {
  const fields = [
    {
      id: 1,
      name: "Campo 1",
      area: 3.2,
      crop: "Tomates",
      status: "Activo",
      plantedDate: "01/02/2023",
      harvestDate: "05/04/2023",
    },
    {
      id: 2,
      name: "Campo 2",
      area: 4.5,
      crop: "Papas",
      status: "Activo",
      plantedDate: "10/02/2023",
      harvestDate: "20/05/2023",
    },
    {
      id: 3,
      name: "Campo 3",
      area: 4.2,
      crop: "Cebollas",
      status: "Activo",
      plantedDate: "15/01/2023",
      harvestDate: "10/04/2023",
    },
    {
      id: 4,
      name: "Campo 4",
      area: 3.8,
      crop: "Cebollas",
      status: "Activo",
      plantedDate: "01/03/2023",
      harvestDate: "25/06/2023",
    },
    {
      id: 5,
      name: "Campo 5",
      area: 2.8,
      crop: "Zanahorias (próximo)",
      status: "En preparación",
      plantedDate: "10/04/2023 (est.)",
      harvestDate: "15/07/2023 (est.)",
    },
    {
      id: 6,
      name: "Campo 6",
      area: 3.5,
      crop: "Maíz (próximo)",
      status: "En preparación",
      plantedDate: "15/04/2023 (est.)",
      harvestDate: "30/07/2023 (est.)",
    },
    {
      id: 7,
      name: "Campo 7",
      area: 2.5,
      crop: "-",
      status: "En descanso",
      plantedDate: "-",
      harvestDate: "-",
    },
    {
      id: 8,
      name: "Campo 8",
      area: 3.0,
      crop: "-",
      status: "En descanso",
      plantedDate: "-",
      harvestDate: "-",
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Área (ha)</TableHead>
            <TableHead>Cultivo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha Siembra</TableHead>
            <TableHead>Fecha Cosecha</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field) => (
            <TableRow key={field.id}>
              <TableCell className="font-medium">{field.name}</TableCell>
              <TableCell>{field.area}</TableCell>
              <TableCell>{field.crop}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    field.status === "Activo"
                      ? "bg-green-100 text-green-800"
                      : field.status === "En preparación"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {field.status}
                </span>
              </TableCell>
              <TableCell>{field.plantedDate}</TableCell>
              <TableCell>{field.harvestDate}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// ============= COMPONENTES DE CULTIVOS =============
const CropList = () => {
  const crops = [
    {
      id: 1,
      name: "Cebollas",
      variety: "Valenciana",
      fields: ["Campo 3", "Campo 4"],
      plantedArea: 8.0,
      plantedDate: "15/01/2023",
      harvestDate: "10/04/2023",
      status: "Crecimiento",
      progress: 85,
    },
    {
      id: 2,
      name: "Tomates",
      variety: "Roma",
      fields: ["Campo 1"],
      plantedArea: 3.2,
      plantedDate: "01/02/2023",
      harvestDate: "05/04/2023",
      status: "Pre-cosecha",
      progress: 95,
    },
    {
      id: 3,
      name: "Papas",
      variety: "Desirée",
      fields: ["Campo 2"],
      plantedArea: 4.5,
      plantedDate: "10/02/2023",
      harvestDate: "20/05/2023",
      status: "Crecimiento",
      progress: 45,
    },
    {
      id: 4,
      name: "Zanahorias",
      variety: "Nantes",
      fields: ["Campo 5"],
      plantedArea: 2.8,
      plantedDate: "10/04/2023 (est.)",
      harvestDate: "15/07/2023 (est.)",
      status: "Planificado",
      progress: 0,
    },
    {
      id: 5,
      name: "Maíz",
      variety: "Dulce",
      fields: ["Campo 6"],
      plantedArea: 3.5,
      plantedDate: "15/04/2023 (est.)",
      harvestDate: "30/07/2023 (est.)",
      status: "Planificado",
      progress: 0,
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cultivo</TableHead>
            <TableHead>Variedad</TableHead>
            <TableHead>Campos</TableHead>
            <TableHead>Área (ha)</TableHead>
            <TableHead>Siembra</TableHead>
            <TableHead>Cosecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crops.map((crop) => (
            <TableRow key={crop.id}>
              <TableCell className="font-medium">{crop.name}</TableCell>
              <TableCell>{crop.variety}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {crop.fields.map((field) => (
                    <Badge key={field} variant="outline">
                      {field}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{crop.plantedArea}</TableCell>
              <TableCell>{crop.plantedDate}</TableCell>
              <TableCell>{crop.harvestDate}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    crop.status === "Pre-cosecha"
                      ? "bg-orange-100 text-orange-800"
                      : crop.status === "Crecimiento"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {crop.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const CropCalendar = () => {
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];
  
  const crops = [
    {
      id: 1,
      name: "Cebollas - Lote 1",
      plantPeriod: [0, 1], // Ene-Feb
      growPeriod: [1, 2, 3], // Feb-Abr
      harvestPeriod: [3, 4], // Abr-May
    },
    {
      id: 2,
      name: "Cebollas - Lote 2",
      plantPeriod: [2, 3], // Mar-Abr
      growPeriod: [3, 4, 5], // Abr-Jun
      harvestPeriod: [5, 6], // Jun-Jul
    },
    {
      id: 3,
      name: "Cebollas - Lote 3",
      plantPeriod: [5, 6], // Jun-Jul
      growPeriod: [6, 7, 8], // Jul-Sep
      harvestPeriod: [8, 9], // Sep-Oct
    },
    {
      id: 4,
      name: "Tomates - Lote 1",
      plantPeriod: [1, 2], // Feb-Mar
      growPeriod: [2, 3], // Mar-Abr
      harvestPeriod: [3, 4], // Abr-May
    },
    {
      id: 5,
      name: "Tomates - Lote 2",
      plantPeriod: [4, 5], // May-Jun
      growPeriod: [5, 6], // Jun-Jul
      harvestPeriod: [6, 7], // Jul-Ago
    },
    {
      id: 6,
      name: "Papas - Lote 1",
      plantPeriod: [1, 2], // Feb-Mar
      growPeriod: [2, 3, 4], // Mar-May
      harvestPeriod: [4, 5], // May-Jun
    },
    {
      id: 7,
      name: "Zanahorias",
      plantPeriod: [3, 4], // Abr-May
      growPeriod: [4, 5, 6], // May-Jul
      harvestPeriod: [6, 7], // Jul-Ago
    },
    {
      id: 8,
      name: "Maíz",
      plantPeriod: [3, 4], // Abr-May
      growPeriod: [4, 5, 6], // May-Jul
      harvestPeriod: [6, 7], // Jul-Ago
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-12 gap-1 border-b pb-2">
          {months.map((month, index) => (
            <div key={index} className="text-center text-sm font-medium">
              {month}
            </div>
          ))}
        </div>
        
        <div className="space-y-3 pt-3">
          {crops.map((crop) => (
            <div key={crop.id} className="grid grid-cols-12 gap-1">
              <div className="col-span-12 mb-1 font-medium">{crop.name}</div>
              <div className="col-span-12 grid grid-cols-12 gap-1">
                {months.map((_, monthIndex) => {
                  let bgColor = "bg-transparent";
                  
                  if (crop.plantPeriod.includes(monthIndex)) {
                    bgColor = "bg-blue-200";
                  } else if (crop.growPeriod.includes(monthIndex)) {
                    bgColor = "bg-green-200";
                  } else if (crop.harvestPeriod.includes(monthIndex)) {
                    bgColor = "bg-orange-200";
                  }
                  
                  return (
                    <div
                      key={monthIndex}
                      className={`h-6 rounded ${bgColor}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-blue-200"></div>
            <span className="text-sm">Siembra</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-green-200"></div>
            <span className="text-sm">Crecimiento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-orange-200"></div>
            <span className="text-sm">Cosecha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CropPerformance = () => {
  const yieldData = [
    {
      name: "Cebollas",
      "2021": 22.5,
      "2022": 23.8,
      "2023": 25.2,
    },
    {
      name: "Tomates",
      "2021": 35.2,
      "2022": 38.5,
      "2023": 40.1,
    },
    {
      name: "Papas",
      "2021": 28.4,
      "2022": 27.9,
      "2023": 29.5,
    },
    {
      name: "Zanahorias",
      "2021": 30.1,
      "2022": 31.5,
      "2023": 32.8,
    },
    {
      name: "Maíz",
      "2021": 8.5,
      "2022": 9.2,
      "2023": 9.8,
    },
  ];
  
  const qualityData = [
    {
      name: "Cebollas",
      "Primera": 75,
      "Segunda": 20,
      "Tercera": 5,
    },
    {
      name: "Tomates",
      "Primera": 80,
      "Segunda": 15,
      "Tercera": 5,
    },
    {
      name: "Papas",
      "Primera": 70,
      "Segunda": 25,
      "Tercera": 5,
    },
    {
      name: "Zanahorias",
      "Primera": 85,
      "Segunda": 10,
      "Tercera": 5,
    },
    {
      name: "Maíz",
      "Primera": 90,
      "Segunda": 8,
      "Tercera": 2,
    },
  ];
  
  const priceData = [
    {
      name: "Cebollas",
      "Primera": 0.85,
      "Segunda": 0.55,
      "Tercera": 0.25,
    },
    {
      name: "Tomates",
      "Primera": 1.20,
      "Segunda": 0.80,
      "Tercera": 0.40,
    },
    {
      name: "Papas",
      "Primera": 0.75,
      "Segunda": 0.45,
      "Tercera": 0.20,
    },
    {
      name: "Zanahorias",
      "Primera": 0.90,
      "Segunda": 0.60,
      "Tercera": 0.30,
    },
    {
      name: "Maíz",
      "Primera": 1.50,
      "Segunda": 1.00,
      "Tercera": 0.50,
    },
  ];

  // Renderizado simplificado de gráficos para un solo archivo
  const renderBarChart = (data, title, subtitle, dataKeys, colors) => (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      
      <div className="mt-4 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.name}</span>
              <div className="flex gap-2">
                {dataKeys.map((key, keyIndex) => (
                  <span key={keyIndex} className="text-sm" style={{ color: colors[keyIndex] }}>
                    {key}: {item[key]}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex h-8 w-full gap-1 rounded-md overflow-hidden">
              {dataKeys.map((key, keyIndex) => {
                const value = item[key];
                const maxValue = Math.max(...data.map(d => Math.max(...dataKeys.map(k => d[k]))));
                const width = (value / maxValue) * 100;
                
                return (
                  <div
                    key={keyIndex}
                    className="h-full rounded-sm"
                    style={{ 
                      width: `${width}%`, 
                      backgroundColor: colors[keyIndex] 
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Tabs defaultValue="yield" className="space-y-4">
      <TabsList>
        <TabsTrigger value="yield">Rendimiento</TabsTrigger>
        <TabsTrigger value="quality">Calidad</TabsTrigger>
        <TabsTrigger value="price">Precios</TabsTrigger>
      </TabsList>
      
      <TabsContent value="yield">
        {renderBarChart(
          yieldData,
          "Rendimiento por Cultivo (t/ha)",
          "Comparación de rendimientos en los últimos 3 años",
          ["2021", "2022", "2023"],
          ["#94a3b8", "#64748b", "#334155"]
        )}
      </TabsContent>
      
      <TabsContent value="quality">
        {renderBarChart(
          qualityData,
          "Distribución de Calidad (%)",
          "Porcentaje de producción por categoría de calidad",
          ["Primera", "Segunda", "Tercera"],
          ["#4ade80", "#fbbf24", "#f87171"]
        )}
      </TabsContent>
      
      <TabsContent value="price">
        {renderBarChart(
          priceData,
          "Precios por Calidad ($/kg)",
          "Precios promedio recibidos por categoría de calidad",
          ["Primera", "Segunda", "Tercera"],
          ["#4ade80", "#fbbf24", "#f87171"]
        )}
      </TabsContent>
    </Tabs>
  );
};

// ============= COMPONENTES DE ENTREGAS =============
const DeliveryList = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      date: "05/04/2023",
      time: "9:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "300kg" },
      ],
      status: "Programada",
      value: "$890.00",
    },
    {
      id: 2,
      client: "SuperMarket A",
      date: "10/04/2023",
      time: "9:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "500kg" },
      ],
      status: "Programada",
      value: "$1,250.00",
    },
    {
      id: 3,
      client: "Distribuidor Local",
      date: "12/04/2023",
      time: "2:00 PM",
      products: [
        { name: "Cebollas", quality: "Segunda", quantity: "200kg" },
      ],
      status: "Programada",
      value: "$320.00",
    },
    {
      id: 4,
      client: "SuperMarket B",
      date: "15/04/2023",
      time: "10:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "250kg" },
        { name: "Cebollas", quality: "Primera", quantity: "150kg" },
      ],
      status: "Programada",
      value: "$1,125.00",
    },
    {
      id: 5,
      client: "Mercado Central",
      date: "18/04/2023",
      time: "7:00 AM",
      products: [
        { name: "Papas", quality: "Primera", quantity: "400kg" },
      ],
      status: "Programada",
      value: "$720.00",
    },
    {
      id: 6,
      client: "SuperMarket A",
      date: "20/04/2023",
      time: "9:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "300kg" },
      ],
      status: "Programada",
      value: "$890.00",
    },
    {
      id: 7,
      client: "SuperMarket C",
      date: "25/04/2023",
      time: "11:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "400kg" },
        { name: "Papas", quality: "Primera", quantity: "300kg" },
      ],
      status: "Programada",
      value: "$1,540.00",
    },
    {
      id: 8,
      client: "SuperMarket A",
      date: "01/04/2023",
      time: "9:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "250kg" },
      ],
      status: "Completada",
      value: "$750.00",
    },
    {
      id: 9,
      client: "SuperMarket B",
      date: "02/04/2023",
      time: "10:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "350kg" },
      ],
      status: "Completada",
      value: "$875.00",
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Productos</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell className="font-medium">{delivery.client}</TableCell>
              <TableCell>
                {delivery.date}
                <div className="text-xs text-muted-foreground">{delivery.time}</div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  {delivery.products.map((product, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span>{product.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {product.quality}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {product.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    delivery.status === "Completada"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {delivery.status}
                </span>
              </TableCell>
              <TableCell>{delivery.value}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const DeliverySchedule = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      date: new Date(2023, 3, 5), // 5 de abril
      time: "9:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "300kg" },
      ],
    },
    {
      id: 2,
      client: "SuperMarket A",
      date: new Date(2023, 3, 10), // 10 de abril
      time: "9:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "500kg" },
      ],
    },
    {
      id: 3,
      client: "Distribuidor Local",
      date: new Date(2023, 3, 12), // 12 de abril
      time: "2:00 PM",
      products: [
        { name: "Cebollas", quality: "Segunda", quantity: "200kg" },
      ],
    },
    {
      id: 4,
      client: "SuperMarket B",
      date: new Date(2023, 3, 15), // 15 de abril
      time: "10:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "250kg" },
        { name: "Cebollas", quality: "Primera", quantity: "150kg" },
      ],
    },
    {
      id: 5,
      client: "Mercado Central",
      date: new Date(2023, 3, 18), // 18 de abril
      time: "7:00 AM",
      products: [
        { name: "Papas", quality: "Primera", quantity: "400kg" },
      ],
    },
    {
      id: 6,
      client: "SuperMarket A",
      date: new Date(2023, 3, 20), // 20 de abril
      time: "9:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "300kg" },
      ],
    },
    {
      id: 7,
      client: "SuperMarket C",
      date: new Date(2023, 3, 25), // 25 de abril
      time: "11:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "400kg" },
        { name: "Papas", quality: "Primera", quantity: "300kg" },
      ],
    },
  ];

  // Función para obtener las entregas de un día específico
  const getDeliveriesForDate = (date) => {
    return deliveries.filter(
      (delivery) =>
        delivery.date.getDate() === date.getDate() &&
        delivery.date.getMonth() === date.getMonth() &&
        delivery.date.getFullYear() === date.getFullYear()
    );
  };

  // Simulación simplificada de un calendario
  const renderCalendar = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    
    return (
      <div className="grid grid-cols-7 gap-2">
        {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day, i) => (
          <div key={`header-${i}`} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}
        
        {/* Espacios en blanco para alinear el primer día (asumiendo que el 1 de abril es sábado) */}
        {Array.from({ length: 5 }, (_, i) => (
          <div key={`empty-${i}`} className="h-16 rounded-md border border-dashed"></div>
        ))}
        
        {days.map((day) => {
          const date = new Date(2023, 3, day);
          const dayDeliveries = getDeliveriesForDate(date);
          
          return (
            <div 
              key={`day-${day}`} 
              className={`h-16 rounded-md border p-1 ${
                dayDeliveries.length > 0 ? "border-blue-300 bg-blue-50" : ""
              }`}
            >
              <div className="flex h-full flex-col">
                <div className="text-right text-sm">{day}</div>
                {dayDeliveries.length > 0 && (
                  <div className="mt-auto flex items-center justify-center">
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <Truck className="h-4 w-4 text-blue-600" />
                      {dayDeliveries.length > 1 && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                          {dayDeliveries.length}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4">
        {renderCalendar()}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Próximas Entregas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveries.slice(0, 6).map((delivery) => (
            <Card key={delivery.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{delivery.client}</h4>
                    <p className="text-sm text-muted-foreground">
                      {delivery.date.toLocaleDateString()} - {delivery.time}
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-1 text-sm">
                  {delivery.products.map((product, index) => (
                    <div key={index}>
                      {product.name} ({product.quality}): {product.quantity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientList = () => {
  const clients = [
    {
      id: 1,
      name: "SuperMarket A",
      contact: "Juan Rodríguez",
      phone: "+1 234 567 890",
      email: "juan@supermarketa.com",
      address: "Av. Principal 123, Ciudad",
      deliveries: 12,
      totalValue: "$12,450.00",
    },
    {
      id: 2,
      name: "SuperMarket B",
      contact: "María González",
      phone: "+1 234 567 891",
      email: "maria@supermarketb.com",
      address: "Calle Comercial 456, Ciudad",
      deliveries: 8,
      totalValue: "$8,320.00",
    },
    {
      id: 3,
      name: "Distribuidor Local",
      contact: "Pedro Sánchez",
      phone: "+1 234 567 892",
      email: "pedro@distribuidorlocal.com",
      address: "Av. Industrial 789, Ciudad",
      deliveries: 5,
      totalValue: "$3,250.00",
    },
    {
      id: 4,
      name: "Mercado Central",
      contact: "Ana Martínez",
      phone: "+1 234 567 893",
      email: "ana@mercadocentral.com",
      address: "Plaza Mayor 234, Ciudad",
      deliveries: 4,
      totalValue: "$2,880.00",
    },
    {
      id: 5,
      name: "SuperMarket C",
      contact: "Carlos López",
      phone: "+1 234 567 894",
      email: "carlos@supermarketc.com",
      address: "Av. Comercial 567, Ciudad",
      deliveries: 3,
      totalValue: "$4,620.00",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Dirección</TableHead>
              <TableHead>Entregas</TableHead>
              <TableHead>Valor Total</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>
                  {client.contact}
                  <div className="text-xs text-muted-foreground">{client.phone}</div>
                  <div className="text-xs text-muted-foreground">{client.email}</div>
                </TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell>{client.deliveries}</TableCell>
                <TableCell>{client.totalValue}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// ============= VISTAS PRINCIPALES =============
const FieldsView = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Gestión de Campos</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Campo
        </Button>
      </div>
      
      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Mapa</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="details">Detalles</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Campos
                </CardTitle>
                <MapPin className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  4 activos, 2 en preparación, 2 en descanso
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Área Total
                </CardTitle>
                <Ruler className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5 ha</div>
                <p className="text-xs text-muted-foreground">
                  18.3 ha en cultivo activo
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Riego Programado
                </CardTitle>
                <Droplets className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Próximo: Campo 3 - Mañana 6:00 AM
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clima</CardTitle>
                <Sun className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24°C</div>
                <p className="text-xs text-muted-foreground">
                  Soleado, 10% prob. de lluvia
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Vista de Campos</CardTitle>
              <CardDescription>
                Vista geográfica de todos sus campos y parcelas
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <FieldMap />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="list">
          <FieldList />
        </TabsContent>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Detalles del Campo</CardTitle>
              <CardDescription>
                Ver y editar información detallada del campo seleccionado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Campo</Label>
                  <Input id="name" defaultValue="Campo 3 - Sector Norte" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área (hectáreas)</Label>
                  <Input id="area" defaultValue="4.2" type="number" step="0.1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soil-type">Tipo de Suelo</Label>
                  <Input id="soil-type" defaultValue="Franco-arenoso" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="irrigation">Sistema de Riego</Label>
                  <Input id="irrigation" defaultValue="Goteo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-crop">Cultivo Actual</Label>
                  <Input id="current-crop" defaultValue="Cebollas" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="planting-date">Fecha de Siembra</Label>
                  <Input id="planting-date" defaultValue="2023-01-15" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="harvest-date">Fecha de Cosecha Estimada</Label>
                  <Input id="harvest-date" defaultValue="2023-04-10" type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Notas adicionales sobre este campo..." />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const CropsView = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Gestión de Cultivos</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Cultivo
        </Button>
      </div>
      
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="calendar">Calendario</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Cultivos
                </CardTitle>
                <Sprout className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  3 tipos diferentes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Próxima Cosecha
                </CardTitle>
                <Calendar className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5 Abr</div>
                <p className="text-xs text-muted-foreground">
                  Tomates - Campo 1
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Rendimiento Promedio
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.3 t/ha</div>
                <p className="text-xs text-muted-foreground">
                  +5% vs año anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calidad</CardTitle>
                <BarChart3 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">
                  Primera calidad
                </p>
              </CardContent>
            </Card>
          </div>
          
          <CropList />
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Cultivos</CardTitle>
              <CardDescription>
                Planificación anual de siembras y cosechas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CropCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento de Cultivos</CardTitle>
              <CardDescription>
                Análisis de rendimiento por cultivo y temporada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CropPerformance />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const DeliveriesView = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Gestión de Entregas</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nueva Entrega
        </Button>
      </div>
      
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Entregas</TabsTrigger>
          <TabsTrigger value="schedule">Calendario</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Entregas Pendientes
                </CardTitle>
                <Truck className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">
                  Próxima: Mañana, 9:00 AM
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Entregas Completadas
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  Este mes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ingresos
                </CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,565.00</div>
                <p className="text-xs text-muted-foreground">
                  +15% vs mes anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes</CardTitle>
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  Activos este mes
                </p>
              </CardContent>
            </Card>
          </div>
          
          <DeliveryList />
        </TabsContent>
        
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Entregas</CardTitle>
              <CardDescription>
                Programación de entregas para las próximas semanas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DeliverySchedule />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="clients">
          <Card>
            <CardHeader>
              <CardTitle>Clientes</CardTitle>
              <CardDescription>
                Gestión de clientes y sus pedidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClientList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// ============= COMPONENTE PRINCIPAL =============
const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <SearchComponent />
            <UserNav />
          </div>
        </div>
      </div>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="w-[260px] justify-start text-left font-normal">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Abril 2023</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="fields">Campos</TabsTrigger>
            <TabsTrigger value="crops">Cultivos</TabsTrigger>
            <TabsTrigger value="deliveries">Entregas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cultivos Activos
                  </CardTitle>
                  <Plant className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    +2 desde el mes pasado
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Próximas Cosechas
                  </CardTitle>
                  <Scissors className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">
                    Próxima: Cebollas (Campo 3) - 5 días
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Entregas Pendientes
                  </CardTitle>
                  <Truck className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">
                    Próxima: SuperMarket A - Mañana
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,565.00</div>
                  <p className="text-xs text-muted-foreground">
                    +15% desde el mes pasado
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Rendimiento de Cultivos</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Entregas Recientes</CardTitle>
                  <CardDescription>
                    Has realizado 12 entregas este mes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentDeliveries />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Próximas Tareas</CardTitle>
                  <CardDescription>
                    Tareas programadas para los próximos 7 días.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingTasks />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Estado de Cultivos</CardTitle>
                  <CardDescription>
                    Estado actual de tus cultivos activos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CropStatus />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="fields">
            <FieldsView />
          </TabsContent>
          
          <TabsContent value="crops">
            <CropsView />
          </TabsContent>
          
          <TabsContent value="deliveries">
            <DeliveriesView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};



export default App;