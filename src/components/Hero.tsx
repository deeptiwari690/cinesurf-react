import { Search } from "lucide-react";
import { Form } from "react-router";

export function Hero() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold">Discover something to watch tonight</h1>
      <p className="mbs-2 text-slate-400">Search 900,000+ movies, TV shows, and more</p>
      <Form role="search" action="/search" className="relative mx-auto mbs-6 max-w-xl">
        <Search className="absolute inset-bs-1/2 inset-s-3 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="search"
          name="q"
          required
          autoComplete="off"
          placeholder='Try "Interstellar"...'
          className="w-full rounded-full border border-white/12 bg-slate-800 py-3 ps-10 pe-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </Form>
    </section>
  );
}
