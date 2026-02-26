import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_CONSULT_LINK } from "@/lib/whatsapp"

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[600px]">
      <Image
        src="/images/hero-bike.jpg"
        alt="Bicicleta moderna"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8]/90 via-[#0057B8]/70 to-[#00C853]/60" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 lg:px-8 lg:py-32">
        <span className="mb-4 inline-block rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium text-card backdrop-blur-sm">
          Aldo Bonzi / La Tablada
        </span>
        <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight text-card md:text-5xl lg:text-6xl">
          Todo para tu bicicleta en un solo lugar
        </h1>
        <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-card/90 md:text-xl">
          Accesorios, bicicletas usadas y servicio tecnico en Aldo Bonzi y La
          Tablada.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#accesorios"
            className="inline-flex items-center rounded-lg bg-card px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-card/90 hover:shadow-xl"
          >
            Ver Accesorios
          </a>
          <a
            href={WHATSAPP_CONSULT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
