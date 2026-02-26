import Image from "next/image"
import Link from "next/link"
import { MessageCircle, CheckCircle, XCircle } from "lucide-react"
import type { Product } from "@/lib/products"
import { formatPrice, buildWhatsAppLink } from "@/lib/whatsapp"

interface ProductCardProps {
  product: Product
}

const tagColors: Record<string, string> = {
  Oferta: "bg-accent text-accent-foreground",
  "Nuevo ingreso": "bg-primary text-primary-foreground",
  Popular: "bg-[#FF9800] text-[#FFFFFF]",
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status === "disponible"

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <Link
        href={`/producto/${product.slug}`}
        className="relative aspect-[4/3] overflow-hidden bg-muted"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Tag badge */}
        {product.tag && (
          <span
            className={`absolute left-2 top-2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${tagColors[product.tag] ?? "bg-primary text-primary-foreground"}`}
          >
            {product.tag}
          </span>
        )}
        {/* Category badge */}
        <span className="absolute right-2 top-2 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/producto/${product.slug}`}>
          <h3 className="text-base font-semibold text-card-foreground transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Status */}
        <div className="mt-2 flex items-center gap-1.5">
          {isAvailable ? (
            <>
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium text-accent">Disponible</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4 text-destructive" />
              <span className="text-xs font-medium text-destructive">Sin stock</span>
            </>
          )}
        </div>

        {/* Wheel info for bikes */}
        {product.wheel && (
          <span className="mt-1 inline-block w-fit rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {product.wheel}
          </span>
        )}

        {/* Price */}
        <p className="mt-3 text-2xl font-bold text-primary">
          {formatPrice(product.price)}
        </p>

        {/* WhatsApp CTA */}
        {isAvailable ? (
          <a
            href={buildWhatsAppLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        ) : (
          <button
            disabled
            className="mt-3 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-sm font-semibold text-muted-foreground"
          >
            Sin stock
          </button>
        )}
      </div>
    </div>
  )
}
