import { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { NavigationProgress } from "@/components/NavigationProgress";

export function LandingLayout() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
      <NavigationProgress />
      <Header />
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
