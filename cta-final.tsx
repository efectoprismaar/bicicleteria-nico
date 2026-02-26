import { MessageCircle } from "lucide-react"
import { WHATSAPP_ADVICE_LINK } from "@/lib/whatsapp"

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0057B8] to-[#00C853]" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-[#FFFFFF] md:text-4xl lg:text-5xl">
          Necesitas algo para tu bicicleta?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[#FFFFFF]/90">
          Escribinos y te asesoramos al instante. Accesorios, bicicletas y
          servicio tecnico a tu alcance.
        </p>
        <a
          href={WHATSAPP_ADVICE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-lg font-bold text-whatsapp-foreground shadow-xl transition-all hover:scale-105 hover:brightness-110 hover:shadow-2xl"
        >
          <MessageCircle className="h-6 w-6" />
          Escribinos ahora por WhatsApp
        </a>
      </div>
    </section>
  )
}
