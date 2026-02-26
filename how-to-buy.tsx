import { ShoppingCart, MessageCircle, PackageCheck } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: ShoppingCart,
    title: "Elegís tu producto",
    description: "Navegá nuestro catálogo y encontrá lo que necesitás.",
  },
  {
    step: 2,
    icon: MessageCircle,
    title: "Tocás \"Comprar por WhatsApp\"",
    description: "Te comunicás directo con nosotros en un toque.",
  },
  {
    step: 3,
    icon: PackageCheck,
    title: "Coordinamos pago y retiro",
    description: "Acordamos el pago y retirás en el local.",
  },
]

export function HowToBuy() {
  return (
    <section className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Cómo comprar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Comprar es fácil, rápido y seguro
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg">
                <s.icon className="h-8 w-8 text-primary-foreground" />
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow-md">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
