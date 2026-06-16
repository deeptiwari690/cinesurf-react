import { useSearchParams, Link } from "react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { searchMoviesQuery } from "@/features/movies/queries";
import { MovieCard } from "@/features/movies/MovieCard";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const page = Number(searchParams.get("page") ?? "1");
  const { data } = useSuspenseQuery(searchMoviesQuery(query, page));
  const prevParams = new URLSearchParams(searchParams);
  prevParams.set("page", String(page - 1));
  const nextParams = new URLSearchParams(searchParams);
  nextParams.set("page", String(page + 1));

  return (
    <main>
      <h1 className="mbe-4 text-xl font-bold">Results for "{query}"</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="mbs-6 flex items-center justify-center gap-4">
        {page > 1 && (
          <Link to={`?${prevParams}`} className="rounded-md bg-slate-800 px-4 py-2 transition hover:brightness-110">
            Previous
          </Link>
        )}
        <span className="text-slate-400">
          Page {page} of {data.total_pages}
        </span>
        {page < data.total_pages && (
          <Link to={`?${nextParams}`} className="rounded-md bg-slate-800 px-4 py-2 transition hover:brightness-110">
            Next
          </Link>
        )}
      </div>
    </main>
  );
}
