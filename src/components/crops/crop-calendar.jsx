export const CropCalendar = () => {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

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
  ]

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
                  let bgColor = "bg-transparent"

                  if (crop.plantPeriod.includes(monthIndex)) {
                    bgColor = "bg-blue-200"
                  } else if (crop.growPeriod.includes(monthIndex)) {
                    bgColor = "bg-green-200"
                  } else if (crop.harvestPeriod.includes(monthIndex)) {
                    bgColor = "bg-orange-200"
                  }

                  return <div key={monthIndex} className={`h-6 rounded ${bgColor}`}></div>
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
  )
}
