import { api } from '@/lib/api';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FeaturedProduct {
  id: string;
  name: string;
  slug: string;
  shortDesc: string | null;
  price: number;
  mainImage: string;
  isNew: boolean;
}

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const data = await api.get('/products/featured');
  const featuredProducts: FeaturedProduct[] = data.products || [];

  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1920')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FDFBF7] mb-6 tracking-tight animate-fade-in">
            TIME, REFINED.
          </h1>
          <p className="text-lg md:text-xl text-[#FDFBF7]/80 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Where African heritage meets Swiss precision. Discover the new Signature Collection.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/shop"><Button size="lg">Explore Collection</Button></Link>
            <Link href="/about"><Button size="lg" variant="outline">Discover AKÓKÒ</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C7A04A] text-xs uppercase tracking-[0.3em] mb-3">Curated Excellence</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FDFBF7]">Featured Timepieces</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="text-center mt-16">
          <Link href="/shop"><Button variant="outline" size="lg">View All Watches</Button></Link>
        </div>
      </section>

      <section className="py-32 px-4 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-[#C7A04A] text-xs uppercase tracking-[0.3em]">The AKÓKÒ Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] leading-tight">
            &quot;Time is more than measurement. <br />
            <span className="text-[#C7A04A]">It is memory, ambition, and legacy.</span>&quot;
          </h2>
          <p className="text-[#FDFBF7]/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every AKÓKÒ timepiece is a testament to the fusion of traditional African artistry and modern horological engineering.
            Designed for those who understand that true luxury is not shouted, but quietly understood.
          </p>
        </div>
      </section>
    </main>
  );
}
