import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Button } from "../ui/button"
import { Plus, Eye, Edit, FileText } from "../icons"

export const ClientList = () => {
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
  ]

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
  )
}
