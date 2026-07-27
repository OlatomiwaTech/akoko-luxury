"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0D0D0D] text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <p className="mb-4 uppercase tracking-[0.5em] text-[#B8893E]">
          Luxury Redefined
        </p>

        <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-6xl">
          Timeless Watches Crafted For Excellence
        </h1>

        <p className="mb-10 text-zinc-400">
          Discover premium watches curated for individuals who value precision,
          craftsmanship, and timeless style.
        </p>

        <button className="rounded-full bg-[#B8893E] px-8 py-4 font-semibold text-black transition hover:scale-105">
          Shop Collection
        </button>
      </motion.div>
    </section>
  );
}