import {
  UserCheck,
  Award,
  DollarSign,
  MapPin,
  HeartHandshake,
  Star,
} from "lucide-react"

const items = [
  { icon: UserCheck, title: "Atención personalizada", description: "Te asesoramos según lo que necesitás" },
  { icon: Award, title: "Productos de calidad", description: "Seleccionamos las mejores marcas" },
  { icon: DollarSign, title: "Precios accesibles", description: "Los mejores precios de la zona" },
  { icon: MapPin, title: "Ubicación estratégica", description: "Fácil acceso desde Aldo Bonzi y La Tablada" },
  { icon: HeartHandshake, title: "Asesoramiento honesto", description: "Te recomendamos lo que realmente sirve" },
  { icon: Star, title: "Experiencia local", description: "Años de trayectoria en el barrio" },
]

export function Differentiators() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Por qué elegirnos
          </h2>
          <p className="mt-3 text-muted-foreground">
            La bicicletería de confianza del barrio
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
