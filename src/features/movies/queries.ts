import { queryOptions } from "@tanstack/react-query";
import { tmdb } from "@/lib/tmdb";
import { movieListSchema } from "./schemas";

export const popularMoviesQuery = queryOptions({
  queryKey: ["movies", "popular"],
  queryFn: ({ signal }) => tmdb("/movie/popular", movieListSchema, signal),
});

export const searchMoviesQuery = (query: string, page: number) =>
  queryOptions({
    queryKey: ["movies", "search", query, page],
    queryFn: ({ signal }) => tmdb("/search/movie", movieListSchema, signal, { query, page: String(page) }),
  });
