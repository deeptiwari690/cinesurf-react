import { Hero } from "@/components/Hero";
import { PopularRow } from "@/features/movies/PopularRow";

export function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Hero />
      <PopularRow />
    </main>
  );
}
