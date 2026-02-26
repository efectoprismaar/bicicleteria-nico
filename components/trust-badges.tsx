import { Shield, Truck, Award, HeartHandshake } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Compra segura",
    description: "Coordinamos todo por WhatsApp antes del pago",
  },
  {
    icon: Truck,
    title: "Retiro en local",
    description: "Retiras en Aldo Bonzi o La Tablada",
  },
  {
    icon: Award,
    title: "Productos revisados",
    description: "Todo pasa por nuestro taller antes de la venta",
  },
  {
    icon: HeartHandshake,
    title: "Atencion personalizada",
    description: "Te asesoramos para que elijas lo mejor",
  },
]

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {trustItems.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-sm"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <h4 className="mt-2 text-sm font-semibold text-card-foreground">
            {item.title}
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
