import { queryOptions } from "@tanstack/react-query";
import { tmdb } from "@/lib/tmdb";
import { movieListSchema } from "./schemas";

export const popularMoviesQuery = queryOptions({
  queryKey: ["movies", "popular"],
  queryFn: () => tmdb("/movie/popular", movieListSchema),
  staleTime: 1000 * 60 * 5,
});

export const searchMoviesQuery = (query: string, page: number) =>
  queryOptions({
    queryKey: ["movies", "search", query, page],
    queryFn: () => tmdb("/search/movie", movieListSchema, { query, page: String(page) }),
    staleTime: 1000 * 60 * 5,
  });
