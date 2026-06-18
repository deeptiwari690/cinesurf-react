import type { z } from "zod";

const BASE_URL = "https://cinesurf-tmdb-proxy.vercel.app/api/tmdb";

export async function tmdb<S extends z.ZodType>(
  path: string,
  schema: S,
  signal: AbortSignal,
  searchParams?: Record<string, string>,
): Promise<z.infer<S>> {
  const url = new URL(BASE_URL + path);
  if (searchParams) {
    url.search = new URLSearchParams(searchParams).toString();
  }
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status} ${url}`);
  }
  const rawData = await response.json();
  return schema.parse(rawData);
}
