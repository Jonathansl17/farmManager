import { Progress } from "../ui/progress"

export const CropStatus = () => {
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
  ]

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
          <p className="text-xs text-right text-muted-foreground">{crop.progress}% completado</p>
        </div>
      ))}
    </div>
  )
}
