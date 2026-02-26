// /app/catalogo/page.tsx
"use client";

import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  shortDescription: string;
  image: string;
  whatsappMessage: string;
}

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.shortDescription}</p>
            <p className="font-bold text-green-600 mb-4">${product.price}</p>

            <a
              href={`https://wa.me/5491131316678?text=${encodeURIComponent(
                product.whatsappMessage
              )}`}
              target="_blank"
              className="mt-auto bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition"
            >
              Comprar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}