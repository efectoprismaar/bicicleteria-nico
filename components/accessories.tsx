"use client"

import { useState, useMemo } from "react"
import { ArrowUpDown } from "lucide-react"
import { accessories, accessoryCategories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

type SortOption = "default" | "price-asc" | "price-desc"

export function Accessories() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [sort, setSort] = useState<SortOption>("default")

  const filtered = useMemo(() => {
    let items =
      activeCategory === "Todos"
        ? [...accessories]
        : accessories.filter((a) => a.category === activeCategory)

    if (sort === "price-asc") items.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price)

    return items
  }, [activeCategory, sort])

  return (
    <section id="accesorios" className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Accesorios Destacados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Todo lo que necesitas, al mejor precio
          </p>
        </div>

        {/* Filters row */}
        <div className="mb-8 flex flex-col items-center gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {accessoryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort control */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="default">Ordenar por</option>
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No hay productos en esta categoria.
          </p>
        )}
      </div>
    </section>
  )
}
