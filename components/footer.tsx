import { Bike, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { WHATSAPP_CONSULT_LINK } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#111111] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Bike className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-[#FFFFFF]">
                Bicicletería Nico
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#AAAAAA]">
              Tu bicicletería de confianza en Aldo Bonzi y La Tablada. Accesorios,
              bicicletas usadas y servicio técnico.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#AAAAAA]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Aldo Bonzi / La Tablada, La Matanza, Buenos Aires
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +54 9 11 0000-0000
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIconSmall />
                +54 9 11 0000-0000
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Horarios
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#AAAAAA]">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                Lunes a Viernes: 9:00 - 19:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                Sábados: 9:00 - 14:00
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Seguinos
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#222222] text-[#AAAAAA] transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#222222] text-[#AAAAAA] transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_CONSULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#222222] text-[#AAAAAA] transition-colors hover:bg-whatsapp hover:text-whatsapp-foreground"
                aria-label="WhatsApp"
              >
                <WhatsAppIconSmall />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#333333] pt-8 md:flex-row">
          <p className="text-sm text-[#777777]">
            {new Date().getFullYear()} Bicicletería Nico. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-[#777777]">
            <a href="#" className="hover:text-[#AAAAAA] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-[#AAAAAA] transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIconSmall() {
  return (
    <svg className="h-4 w-4 shrink-0 text-whatsapp" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
