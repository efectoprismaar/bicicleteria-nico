import Image from "next/image"
import {
  Wrench,
  ShoppingBag,
  Bike,
  Tag,
} from "lucide-react"

const categories = [
  {
    title: "Accesorios",
    description: "Cascos, luces, candados, infladores y más",
    icon: ShoppingBag,
    href: "#accesorios",
    image: "/images/accessories.jpg",
  },
  {
    title: "Bicicletas Disponibles",
    description: "Usadas, revisadas y listas para rodar",
    icon: Bike,
    href: "#bicicletas",
    image: "/images/bikes.jpg",
  },
  {
    title: "Servicio Técnico",
    description: "Reparaciones, service y mantenimiento",
    icon: Wrench,
    href: "#servicio",
    image: "/images/service.jpg",
  },
  {
    title: "Ofertas Destacadas",
    description: "Los mejores precios de la zona",
    icon: Tag,
    href: "#accesorios",
    image: "/images/ofertas.jpg",
  },
]

export function Categories() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Explorá nuestras categorías
          </h2>
          <p className="mt-3 text-muted-foreground">
            Todo lo que necesitás para tu bicicleta en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90 backdrop-blur-sm">
                  <cat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
