import { Outlet } from "react-router";
import { Header } from "@/components/Header";

export function LandingLayout() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
      <Header />
      <Outlet />
    </div>
  );
}
