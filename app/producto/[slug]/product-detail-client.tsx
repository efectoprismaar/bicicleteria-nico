"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import type { Product } from "@/lib/products"
import { formatPrice, buildWhatsAppLink } from "@/lib/whatsapp"
import { ProductCard } from "@/components/product-card"
import { TrustBadges } from "@/components/trust-badges"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { useState } from "react"

interface ProductDetailClientProps {
  product: Product
  related: Product[]
}

const tagColors: Record<string, string> = {
  Oferta: "bg-accent text-accent-foreground",
  "Nuevo ingreso": "bg-primary text-primary-foreground",
  Popular: "bg-[#FF9800] text-[#FFFFFF]",
}

export function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0)
  const isAvailable = product.status === "disponible"
  const images = product.images.length > 0 ? product.images : ["/images/accessories.jpg"]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Product detail */}
        <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image gallery */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.tag && (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${tagColors[product.tag] ?? "bg-primary text-primary-foreground"}`}
                  >
                    {product.tag}
                  </span>
                )}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImage((prev) =>
                          prev === 0 ? images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-card-foreground shadow-md backdrop-blur-sm transition-all hover:bg-card"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImage((prev) =>
                          prev === images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-card-foreground shadow-md backdrop-blur-sm transition-all hover:bg-card"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        activeImage === idx
                          ? "border-primary shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - imagen ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-muted-foreground">
                {product.category}
              </span>
              <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                {product.name}
              </h1>

              {/* Status */}
              <div className="mt-3 flex items-center gap-2">
                {isAvailable ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Disponible
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-destructive" />
                    <span className="text-sm font-medium text-destructive">
                      Sin stock
                    </span>
                  </>
                )}
                {product.wheel && (
                  <span className="rounded-md bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
                    {product.wheel}
                  </span>
                )}
              </div>

              {/* Price */}
              <p className="mt-4 text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </p>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-foreground">
                  Descripcion
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {product.fullDescription}
                </p>
              </div>

              {/* Desktop CTA */}
              <div className="mt-8 hidden md:block">
                {isAvailable ? (
                  <a
                    href={buildWhatsAppLink(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-lg font-bold text-whatsapp-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110 hover:shadow-xl"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Comprar por WhatsApp
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-3 rounded-xl bg-muted px-8 py-4 text-lg font-bold text-muted-foreground"
                  >
                    Sin stock
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12">
            <TrustBadges />
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Productos relacionados
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile sticky WhatsApp bar */}
        {isAvailable && (
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur-md md:hidden">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Precio</span>
                <span className="text-lg font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              </div>
              <a
                href={buildWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-sm font-bold text-whatsapp-foreground transition-all hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
