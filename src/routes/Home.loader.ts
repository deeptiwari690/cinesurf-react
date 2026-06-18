import { queryClient } from "@/lib/queryClient";
import { popularMoviesQuery } from "@/features/movies/queries";

export async function homeLoader() {
  await queryClient.ensureQueryData(popularMoviesQuery);
  return null;
}
