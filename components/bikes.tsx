import { bikes } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function Bikes() {
  return (
    <section id="bicicletas" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Bicicletas Disponibles
          </h2>
          <p className="mt-3 text-muted-foreground">
            Usadas, revisadas y listas para rodar
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bikes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
