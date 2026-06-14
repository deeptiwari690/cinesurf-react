import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold">Discover something to watch tonight</h1>
      <p className="mt-2 text-slate-400">Search 900,000+ movies, TV shows, and more</p>
      <div className="relative mx-auto mt-6 max-w-xl">
        <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder='Try "Interstellar"...'
          className="w-full rounded-full bg-slate-800 py-3 pl-10 pr-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
    </section>
  );
}
