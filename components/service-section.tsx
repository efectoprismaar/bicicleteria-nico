import Image from "next/image"
import {
  Wrench,
  Disc,
  CircleDot,
  Settings,
  Cog,
  MessageCircle,
} from "lucide-react"
import { WHATSAPP_SERVICE_LINK } from "@/lib/whatsapp"

const services = [
  { icon: Settings, label: "Service completo" },
  { icon: Disc, label: "Ajuste de frenos" },
  { icon: CircleDot, label: "Cambio de cubiertas" },
  { icon: Cog, label: "Centrado de ruedas" },
  { icon: Wrench, label: "Reparaciones generales" },
]

export function ServiceSection() {
  return (
    <section id="servicio" className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[420px]">
            <Image
              src="/images/service.jpg"
              alt="Servicio técnico profesional de bicicletas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent" />
          </div>

          <div>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Servicio Técnico Profesional
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Dejá tu bici en manos de confianza. Hacemos desde un service
              básico hasta reparaciones completas.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {services.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3 rounded-lg bg-background p-3 border border-border"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_SERVICE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-md transition-all hover:brightness-110 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Traé tu bici hoy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
