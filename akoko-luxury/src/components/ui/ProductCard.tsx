"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDesc: string | null;
  price: number;
  mainImage: string;
  isNew: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-[#1A1A1A] mb-4">
          {product.isNew && (
            <span className="absolute top-3 left-3 z-10 bg-[#C7A04A] text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
        
        <div className="space-y-1">
          <p className="text-[#C7A04A]/80 text-xs uppercase tracking-widest">
            {product.shortDesc || 'AKÓKÒ Luxury'}
          </p>
          <h3 className="text-[#FDFBF7] font-serif text-lg group-hover:text-[#C7A04A] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#FDFBF7]/60 text-sm">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}