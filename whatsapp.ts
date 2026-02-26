const WHATSAPP_NUMBER = "5491100000000"

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

export function buildWhatsAppLink(productName: string, price: number) {
  const message = `Hola Nico! Me interesa: ${productName} (${formatPrice(price)}). ¿Está disponible?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppGenericLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONSULT_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Nico! Quiero consultar")}`
export const WHATSAPP_SERVICE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Nico! Quiero llevar mi bici al taller")}`
export const WHATSAPP_ADVICE_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Nico! Necesito asesoramiento")}`
