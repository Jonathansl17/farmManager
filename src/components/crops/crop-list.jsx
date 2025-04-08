import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Eye, Edit, Trash } from "../icons"

export const CropList = () => {
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
  ]

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
  )
}
