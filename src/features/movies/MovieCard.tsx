import { ImageOff } from "lucide-react";
import { getImageUrl } from "@/lib/tmdbImageUrl";
import { formatDate } from "@/lib/formatDate";
import type { MovieSummary } from "./schemas";

export function MovieCard({ movie }: { movie: MovieSummary }) {
  const { title, poster_path, release_date } = movie;

  return (
    <article>
      {poster_path ? (
        <img src={getImageUrl(poster_path, "w342")} alt="" className="rounded-lg" />
      ) : (
        <div className="flex aspect-2/3 items-center justify-center rounded-lg bg-gray-700">
          <ImageOff className="text-gray-400" />
        </div>
      )}

      <h3 className="mt-2 line-clamp-2 font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{formatDate(release_date)}</p>
    </article>
  );
}
