import { Card, CardContent } from "../ui/card"
import { Truck } from "../icons"

export const DeliverySchedule = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      date: new Date(2023, 3, 5), // 5 de abril
      time: "9:00 AM",
      products: [{ name: "Tomates", quality: "Primera", quantity: "300kg" }],
    },
    {
      id: 2,
      client: "SuperMarket A",
      date: new Date(2023, 3, 10), // 10 de abril
      time: "9:00 AM",
      products: [{ name: "Cebollas", quality: "Primera", quantity: "500kg" }],
    },
    {
      id: 3,
      client: "Distribuidor Local",
      date: new Date(2023, 3, 12), // 12 de abril
      time: "2:00 PM",
      products: [{ name: "Cebollas", quality: "Segunda", quantity: "200kg" }],
    },
    {
      id: 4,
      client: "SuperMarket B",
      date: new Date(2023, 3, 15), // 15 de abril
      time: "10:00 AM",
      products: [
        { name: "Tomates", quality: "Primera", quantity: "250kg" },
        { name: "Cebollas", quality: "Primera", quantity: "150kg" },
      ],
    },
    {
      id: 5,
      client: "Mercado Central",
      date: new Date(2023, 3, 18), // 18 de abril
      time: "7:00 AM",
      products: [{ name: "Papas", quality: "Primera", quantity: "400kg" }],
    },
    {
      id: 6,
      client: "SuperMarket A",
      date: new Date(2023, 3, 20), // 20 de abril
      time: "9:00 AM",
      products: [{ name: "Tomates", quality: "Primera", quantity: "300kg" }],
    },
    {
      id: 7,
      client: "SuperMarket C",
      date: new Date(2023, 3, 25), // 25 de abril
      time: "11:00 AM",
      products: [
        { name: "Cebollas", quality: "Primera", quantity: "400kg" },
        { name: "Papas", quality: "Primera", quantity: "300kg" },
      ],
    },
  ]

  // Función para obtener las entregas de un día específico
  const getDeliveriesForDate = (date) => {
    return deliveries.filter(
      (delivery) =>
        delivery.date.getDate() === date.getDate() &&
        delivery.date.getMonth() === date.getMonth() &&
        delivery.date.getFullYear() === date.getFullYear(),
    )
  }

  // Simulación simplificada de un calendario
  const renderCalendar = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1)

    return (
      <div className="grid grid-cols-7 gap-2">
        {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day, i) => (
          <div key={`header-${i}`} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}

        {/* Espacios en blanco para alinear el primer día (asumiendo que el 1 de abril es sábado) */}
        {Array.from({ length: 5 }, (_, i) => (
          <div key={`empty-${i}`} className="h-16 rounded-md border border-dashed"></div>
        ))}

        {days.map((day) => {
          const date = new Date(2023, 3, day)
          const dayDeliveries = getDeliveriesForDate(date)

          return (
            <div
              key={`day-${day}`}
              className={`h-16 rounded-md border p-1 ${dayDeliveries.length > 0 ? "border-blue-300 bg-blue-50" : ""}`}
            >
              <div className="flex h-full flex-col">
                <div className="text-right text-sm">{day}</div>
                {dayDeliveries.length > 0 && (
                  <div className="mt-auto flex items-center justify-center">
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <Truck className="h-4 w-4 text-blue-600" />
                      {dayDeliveries.length > 1 && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                          {dayDeliveries.length}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4">{renderCalendar()}</div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Próximas Entregas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveries.slice(0, 6).map((delivery) => (
            <Card key={delivery.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{delivery.client}</h4>
                    <p className="text-sm text-muted-foreground">
                      {delivery.date.toLocaleDateString()} - {delivery.time}
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-1 text-sm">
                  {delivery.products.map((product, index) => (
                    <div key={index}>
                      {product.name} ({product.quality}): {product.quantity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
