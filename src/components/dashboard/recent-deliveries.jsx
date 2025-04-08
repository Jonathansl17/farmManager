import { Avatar, AvatarFallback } from "../ui/avatar"

export const RecentDeliveries = () => {
  const deliveries = [
    {
      id: 1,
      client: "SuperMarket A",
      product: "Cebollas: 500kg (Primera)",
      amount: "+$1,250.00",
      avatar: "SA",
    },
    {
      id: 2,
      client: "SuperMarket B",
      product: "Tomates: 300kg (Primera)",
      amount: "+$890.00",
      avatar: "SB",
    },
    {
      id: 3,
      client: "Distribuidor Local",
      product: "Cebollas: 200kg (Segunda)",
      amount: "+$320.00",
      avatar: "DL",
    },
    {
      id: 4,
      client: "Mercado Central",
      product: "Papas: 400kg (Primera)",
      amount: "+$720.00",
      avatar: "MC",
    },
    {
      id: 5,
      client: "SuperMarket A",
      product: "Tomates: 250kg (Primera)",
      amount: "+$750.00",
      avatar: "SA",
    },
  ]

  return (
    <div className="space-y-8">
      {deliveries.map((delivery) => (
        <div key={delivery.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{delivery.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{delivery.client}</p>
            <p className="text-sm text-muted-foreground">{delivery.product}</p>
          </div>
          <div className="ml-auto font-medium">{delivery.amount}</div>
        </div>
      ))}
    </div>
  )
}
