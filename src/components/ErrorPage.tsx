import { useRouteError } from "react-router";
import { ZodError } from "zod";

function getErrorMessage(error: unknown): string {
  if (error instanceof TypeError) return "Something went wrong. Check your internet connection and try again.";
  if (error instanceof ZodError) return "Received unexpected data from the API. Please try again.";
  if (error instanceof Error) {
    if (error.message.includes("404")) return "Not found.";
    if (error.message.includes("429")) return "Too many requests. Please slow down.";
    return "An unexpected error occurred. Please try again.";
  }
  return "An unexpected error occurred. Please try again.";
}

export function ErrorPage() {
  const error = useRouteError();
  const message = getErrorMessage(error);

  return (
    <main className="px-4 text-center">
      <p className="mbs-2 text-slate-400">{message}</p>
    </main>
  );
}
