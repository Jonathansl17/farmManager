import { cn } from "../ui/utils"

export const MainNav = ({ className, ...props }) => (
  <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
      Dashboard
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Campos
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Cultivos
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Siembra
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Cosecha
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Entregas
    </a>
    <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Reportes
    </a>
  </nav>
)
