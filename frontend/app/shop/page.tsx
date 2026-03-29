"use client";

import { useProducts } from "@/features/products/hooks/useProducts";
import ProductCard from "@/components/product/ProductCard";
import CartInfo from "@/components/CartInfo"; // ✅ ADD THIS

export default function ShopPage() {
  const { products, loading } = useProducts();

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">

      {/* ✅ ADD THIS */}
      <CartInfo />

      <h1 className="text-2xl font-semibold mb-6">Shop</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}