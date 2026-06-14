import { Outlet } from "react-router";
import { Header } from "@/components/Header";

export function Layout() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-8">
      <Header />
      <Outlet />
    </div>
  );
}
