export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl text-[#B8893E]">
          AKÓKÒ
        </h1>

        <ul className="hidden gap-10 text-sm md:flex">
          <li>Home</li>
          <li>Shop</li>
          <li>Collections</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-4">
          <button>Search</button>
          <button>Cart</button>
        </div>
      </div>
    </nav>
  );
}