import ProductCard from "@/components/product/ProductCard";
import CartInfo from "@/components/CartInfo";
import { products } from "@/features/products/data/products";

export default function Home() {
  return (
    <main>

      
      <CartInfo />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-[80vh] bg-primary text-center">
        <h1 className="text-6xl font-bold text-secondary mb-6">
          Welcome to Divinest
        </h1>

        <p className="text-xl text-secondary mb-8">
          Discover premium spiritual products
        </p>

        <a href="/shop" className="px-6 py-3 bg-primary text-secondary">
          Shop Now
        </a>
      </section>

      {/* FEATURED */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-secondary mb-10">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-12 bg-primary text-center">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          Our Mission
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-secondary leading-relaxed">
          <i>
            At Divinest, we curate spiritual essentials that bring serenity, devotion, and divine energy into your home.
             Every piece—from handcrafted Akhand Diyas to meditative Jaap Counters and serene Shivling Smoke Fountains
              —is thoughtfully selected to inspire mindfulness and elevate your sacred space.Our mission is to make your
               home a sanctuary where tradition, peace, and spirituality meet aesthetic elegance.
          </i>
        </p>
      </section>

    </main>
  );
}