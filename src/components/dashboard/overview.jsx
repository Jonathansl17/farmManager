export const Overview = () => {
  // Datos de ejemplo para el gráfico
  const data = [
    { name: "Ene", Cebollas: 4000, Tomates: 2400, Papas: 2400 },
    { name: "Feb", Cebollas: 3000, Tomates: 1398, Papas: 2210 },
    { name: "Mar", Cebollas: 2000, Tomates: 9800, Papas: 2290 },
    { name: "Abr", Cebollas: 2780, Tomates: 3908, Papas: 2000 },
    { name: "May", Cebollas: 1890, Tomates: 4800, Papas: 2181 }
  ]

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
                <div className="w-8 bg-green-500 rounded-t-sm" style={{ height: `${month.Cebollas / 100}px` }}></div>
                <div className="w-8 bg-red-500 rounded-t-sm" style={{ height: `${month.Tomates / 100}px` }}></div>
                <div className="w-8 bg-yellow-500 rounded-t-sm" style={{ height: `${month.Papas / 100}px` }}></div>
              </div>
              <div className="mt-2 text-xs font-medium">{month.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
