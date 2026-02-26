import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allProducts, getProductBySlug, getRelatedProducts } from "@/lib/products"
import { ProductDetailClient } from "./product-detail-client"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Producto no encontrado" }

  return {
    title: `${product.name} | Bicicleteria Nico`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product)

  return <ProductDetailClient product={product} related={related} />
}
