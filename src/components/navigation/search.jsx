import { Input } from "../ui/input"
import { Search } from "../icons"

export const SearchComponent = () => (
  <div className="relative w-full max-w-sm">
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input placeholder="Buscar..." className="pl-8" />
  </div>
)
