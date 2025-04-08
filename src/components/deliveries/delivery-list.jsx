import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Eye, Edit, FileText } from "../icons"

export const DeliveryList = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      date: "05/04/2023",
      time: "9:00 AM",
      products: [{ name: "Tomates", quality: "Primera", quantity: "300kg" }],
      status: "Programada",
      value: "$890.00",
    },
    {
      id: 2,
      client: "SuperMarket A",
      date: "10/04/2023",
      time: "9:00 AM",
      products: [{ name: "Cebollas", quality: "Primera", quantity: "500kg" }],
      status: "Programada",
      value: "$1,250.00",
    },
    {
      id: 3,
      client: "Distribuidor Local",
      date: "12/04/2023",
      time: "2:00 PM",
      products: [{ name: "Cebollas", quality: "Segunda", quantity: "200kg" }],
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
      products: [{ name: "Papas", quality: "Primera", quantity: "400kg" }],
      status: "Programada",
      value: "$720.00",
    },
    {
      id: 6,
      client: "SuperMarket A",
      date: "20/04/2023",
      time: "9:00 AM",
      products: [{ name: "Tomates", quality: "Primera", quantity: "300kg" }],
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
      products: [{ name: "Tomates", quality: "Primera", quantity: "250kg" }],
      status: "Completada",
      value: "$750.00",
    },
    {
      id: 9,
      client: "SuperMarket B",
      date: "02/04/2023",
      time: "10:00 AM",
      products: [{ name: "Cebollas", quality: "Primera", quantity: "350kg" }],
      status: "Completada",
      value: "$875.00",
    },
  ]

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
                      <span className="text-xs text-muted-foreground">{product.quantity}</span>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    delivery.status === "Completada" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
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
  )
}
