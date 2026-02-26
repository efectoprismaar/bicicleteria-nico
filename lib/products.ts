export type ProductStatus = "disponible" | "sin-stock"

export type ProductTag = "Oferta" | "Nuevo ingreso" | "Popular" | null

export type ProductCategory =
  | "Cascos"
  | "Luces"
  | "Candados"
  | "Cámaras"
  | "Infladores"
  | "Portacaramañolas"
  | "Guantes"
  | "Bicicletas"

export interface Product {
  id: number
  slug: string
  name: string
  category: ProductCategory
  price: number
  shortDescription: string
  fullDescription: string
  images: string[]
  status: ProductStatus
  tag: ProductTag
  /** For bikes only */
  wheel?: string
}

// ---------------------------------------------------------------------------
// Helper to generate a URL-safe slug from a product name
// ---------------------------------------------------------------------------
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// ---------------------------------------------------------------------------
// ACCESSORY PRODUCTS
// To add a new product, simply duplicate an object and adjust the fields.
// The slug is auto-generated from the name.
// ---------------------------------------------------------------------------
const rawAccessories: Omit<Product, "slug">[] = [
  {
    id: 1,
    name: "Casco Urbano Ventilado",
    category: "Cascos",
    price: 18500,
    shortDescription: "Casco liviano con ventilación, ideal para ciudad.",
    fullDescription:
      "Casco urbano ultraliviano fabricado con policarbonato resistente. Sistema de ventilación con 12 canales de aire. Regulador trasero para ajuste perfecto. Interior acolchado removible y lavable. Cumple normativa de seguridad.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Luz LED Delantera USB",
    category: "Luces",
    price: 7200,
    shortDescription: "Recargable, 3 modos de luz, resistente al agua.",
    fullDescription:
      "Luz delantera LED de alta potencia con 3 modos: fija, intermitente y eco. Batería recargable USB con hasta 8 horas de autonomía. Resistente al agua IPX4. Soporte universal para manubrio.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 3,
    name: "Candado U-Lock Reforzado",
    category: "Candados",
    price: 22000,
    shortDescription: "Máxima seguridad antirrobo con soporte.",
    fullDescription:
      "Candado tipo U-Lock de acero templado de 16mm. Mecanismo de cerradura anti-ganzúa. Incluye soporte de transporte para cuadro. Doble llave de seguridad incluida. Nivel de seguridad 8/10.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 4,
    name: "Cámara Rodado 29",
    category: "Cámaras",
    price: 4500,
    shortDescription: "Válvula presta, caucho resistente.",
    fullDescription:
      "Cámara de aire para rodado 29 con válvula presta de 48mm. Caucho butilo de alta resistencia a pinchazos. Medida compatible: 29 x 1.9/2.3. Ideal para mountain bike.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 5,
    name: "Inflador de Pie con Manómetro",
    category: "Infladores",
    price: 15000,
    shortDescription: "Doble válvula, alta presión, base estable.",
    fullDescription:
      "Inflador de pie profesional con manómetro de precisión. Compatible con válvulas presta y schrader. Alcanza hasta 120 PSI. Base antideslizante de acero. Mango ergonómico de goma.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: "Oferta",
  },
  {
    id: 6,
    name: "Portacaramañola Aluminio",
    category: "Portacaramañolas",
    price: 3800,
    shortDescription: "Liviano y resistente, fácil instalación.",
    fullDescription:
      "Portacaramañola fabricado en aluminio 6061 anodizado. Peso de solo 35g. Compatible con botellas estándar de 500-750ml. Incluye tornillos de montaje. Acabado mate premium.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 7,
    name: "Guantes Medio Dedo Gel",
    category: "Guantes",
    price: 9500,
    shortDescription: "Acolchados, transpirables, agarre firme.",
    fullDescription:
      "Guantes ciclismo medio dedo con almohadillas de gel en palma. Tejido transpirable mesh en dorso. Cierre ajustable con velcro. Toalla integrada para secado de sudor. Disponible en tallas S a XL.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 8,
    name: "Luz Trasera Roja USB",
    category: "Luces",
    price: 5800,
    shortDescription: "Ultra visible, recargable, 5 modos.",
    fullDescription:
      "Luz trasera LED roja con 5 modos de iluminación. Batería recargable por USB con 12 horas de autonomía. Visibilidad a 500 metros. Soporte clip universal para tija o mochila. Resistente al agua IPX5.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: "Nuevo ingreso",
  },
  {
    id: 9,
    name: "Casco MTB con Visera",
    category: "Cascos",
    price: 24000,
    shortDescription: "Protección para mountain bike con visera desmontable.",
    fullDescription:
      "Casco MTB con visera desmontable y ajustable. Construcción in-mold para mayor resistencia. 15 canales de ventilación. Sistema de ajuste occipital con rueda. Interior antimicrobiano removible.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 10,
    name: "Cámara Rodado 26",
    category: "Cámaras",
    price: 3900,
    shortDescription: "Válvula schrader, compatible con la mayoría de cubiertas.",
    fullDescription:
      "Cámara de aire para rodado 26 con válvula schrader americana. Medida compatible: 26 x 1.75/2.125. Caucho butilo de alta calidad. Ideal para bicicletas urbanas y playeras.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 11,
    name: "Candado con Cable Espiral",
    category: "Candados",
    price: 8500,
    shortDescription: "Combinación de 4 dígitos, ligero y práctico.",
    fullDescription:
      "Candado con cable espiral de acero trenzado recubierto en PVC. Cerradura de combinación de 4 dígitos reprogramable. Longitud extendida de 1.2 metros. Ideal para paradas cortas y complemento de U-Lock.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
  {
    id: 12,
    name: "Inflador Portátil Mini",
    category: "Infladores",
    price: 6200,
    shortDescription: "Compacto, ideal para llevar en la mochila.",
    fullDescription:
      "Mini inflador portátil de aluminio con doble acción. Compatible con válvulas presta y schrader. Largo de solo 21cm. Incluye soporte de velcro para cuadro. Perfecto para emergencias en la ruta.",
    images: ["/images/accessories.jpg"],
    status: "disponible",
    tag: null,
  },
]

// ---------------------------------------------------------------------------
// BIKES
// ---------------------------------------------------------------------------
const rawBikes: Omit<Product, "slug">[] = [
  {
    id: 101,
    name: "Mountain Bike Rodado 29",
    category: "Bicicletas",
    price: 185000,
    shortDescription: "MTB rodado 29, revisada y lista para rodar.",
    fullDescription:
      "Mountain bike rodado 29 con cuadro de aluminio. Cambios Shimano de 21 velocidades. Frenos a disco mecánicos. Suspensión delantera con bloqueo. Cubiertas mixtas aptas para calle y tierra. Completamente revisada en nuestro taller.",
    images: ["/images/bikes.jpg"],
    status: "disponible",
    tag: null,
    wheel: "Rodado 29",
  },
  {
    id: 102,
    name: "Bicicleta Urbana Rodado 28",
    category: "Bicicletas",
    price: 120000,
    shortDescription: "Urbana rodado 28, liviana y cómoda para la ciudad.",
    fullDescription:
      "Bicicleta urbana rodado 28 con cuadro de acero liviano. Cambios Shimano de 7 velocidades. Frenos V-Brake. Guardabarros incluidos. Porta-equipaje trasero. Ideal para uso diario y distancias medias.",
    images: ["/images/bikes.jpg"],
    status: "disponible",
    tag: "Popular",
    wheel: "Rodado 28",
  },
  {
    id: 103,
    name: "Playera Rodado 26",
    category: "Bicicletas",
    price: 75000,
    shortDescription: "Playera rodado 26, perfecta para paseos relajados.",
    fullDescription:
      "Bicicleta playera rodado 26 con cuadro bajo de acero. Velocidad única con freno contrapedal. Asiento amplio y cómodo. Manubrio alto estilo crucero. Ideal para paseos por el barrio.",
    images: ["/images/bikes.jpg"],
    status: "disponible",
    tag: "Oferta",
    wheel: "Rodado 26",
  },
  {
    id: 104,
    name: "BMX Freestyle Rodado 20",
    category: "Bicicletas",
    price: 95000,
    shortDescription: "BMX freestyle rodado 20, resistente y versátil.",
    fullDescription:
      "BMX freestyle rodado 20 con cuadro cromoly. Ruedas reforzadas de 36 rayos. Rotor 360 grados. Pedalines de acero. Cubiertas anchas de agarre. Revisada y puesta a punto en nuestro taller.",
    images: ["/images/bikes.jpg"],
    status: "disponible",
    tag: null,
    wheel: "Rodado 20",
  },
]

// ---------------------------------------------------------------------------
// Build final product arrays with auto-generated slugs
// ---------------------------------------------------------------------------
function withSlug<T extends Omit<Product, "slug">>(items: T[]): (T & { slug: string })[] {
  return items.map((item) => ({
    ...item,
    slug: generateSlug(item.name),
  }))
}

export const accessories: Product[] = withSlug(rawAccessories)
export const bikes: Product[] = withSlug(rawBikes)
export const allProducts: Product[] = [...accessories, ...bikes]

// ---------------------------------------------------------------------------
// Derived category lists
// ---------------------------------------------------------------------------
export const accessoryCategories: string[] = [
  "Todos",
  ...Array.from(new Set(accessories.map((p) => p.category))),
]

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}
