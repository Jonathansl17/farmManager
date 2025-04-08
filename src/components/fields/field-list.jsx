import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Button } from "../ui/button"
import { Eye, Edit, Trash } from "../icons"

export const FieldList = () => {
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
  ]

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
  )
}
