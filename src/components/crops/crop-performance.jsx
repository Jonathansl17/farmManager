import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"

export const CropPerformance = () => {
  const yieldData = [
    {
      name: "Cebollas",
      2021: 22.5,
      2022: 23.8,
      2023: 25.2,
    },
    {
      name: "Tomates",
      2021: 35.2,
      2022: 38.5,
      2023: 40.1,
    },
    {
      name: "Papas",
      2021: 28.4,
      2022: 27.9,
      2023: 29.5,
    },
    {
      name: "Zanahorias",
      2021: 30.1,
      2022: 31.5,
      2023: 32.8,
    },
    {
      name: "Maíz",
      2021: 8.5,
      2022: 9.2,
      2023: 9.8,
    },
  ]

  const qualityData = [
    {
      name: "Cebollas",
      Primera: 75,
      Segunda: 20,
      Tercera: 5,
    },
    {
      name: "Tomates",
      Primera: 80,
      Segunda: 15,
      Tercera: 5,
    },
    {
      name: "Papas",
      Primera: 70,
      Segunda: 25,
      Tercera: 5,
    },
    {
      name: "Zanahorias",
      Primera: 85,
      Segunda: 10,
      Tercera: 5,
    },
    {
      name: "Maíz",
      Primera: 90,
      Segunda: 8,
      Tercera: 2,
    },
  ]

  const priceData = [
    {
      name: "Cebollas",
      Primera: 0.85,
      Segunda: 0.55,
      Tercera: 0.25,
    },
    {
      name: "Tomates",
      Primera: 1.2,
      Segunda: 0.8,
      Tercera: 0.4,
    },
    {
      name: "Papas",
      Primera: 0.75,
      Segunda: 0.45,
      Tercera: 0.2,
    },
    {
      name: "Zanahorias",
      Primera: 0.9,
      Segunda: 0.6,
      Tercera: 0.3,
    },
    {
      name: "Maíz",
      Primera: 1.5,
      Segunda: 1.0,
      Tercera: 0.5,
    },
  ]

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
                const value = item[key]
                const maxValue = Math.max(...data.map((d) => Math.max(...dataKeys.map((k) => d[k]))))
                const width = (value / maxValue) * 100

                return (
                  <div
                    key={keyIndex}
                    className="h-full rounded-sm"
                    style={{
                      width: `${width}%`,
                      backgroundColor: colors[keyIndex],
                    }}
                  ></div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

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
          ["#94a3b8", "#64748b", "#334155"],
        )}
      </TabsContent>

      <TabsContent value="quality">
        {renderBarChart(
          qualityData,
          "Distribución de Calidad (%)",
          "Porcentaje de producción por categoría de calidad",
          ["Primera", "Segunda", "Tercera"],
          ["#4ade80", "#fbbf24", "#f87171"],
        )}
      </TabsContent>

      <TabsContent value="price">
        {renderBarChart(
          priceData,
          "Precios por Calidad ($/kg)",
          "Precios promedio recibidos por categoría de calidad",
          ["Primera", "Segunda", "Tercera"],
          ["#4ade80", "#fbbf24", "#f87171"],
        )}
      </TabsContent>
    </Tabs>
  )
}
