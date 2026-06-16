import type { LoaderFunctionArgs } from "react-router";
import { queryClient } from "@/lib/queryClient";
import { searchMoviesQuery } from "@/features/movies/queries";

export async function searchLoader({ url }: LoaderFunctionArgs) {
  const query = url.searchParams.get("q") ?? "";
  const page = Number(url.searchParams.get("page") ?? "1");
  await queryClient.ensureQueryData(searchMoviesQuery(query, page));
  return null;
}
