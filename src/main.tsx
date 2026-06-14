import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { PopularRow } from "@/features/movies/PopularRow";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Header />
        <Hero />
        <PopularRow />
      </div>
    </QueryClientProvider>
  </StrictMode>,
);
