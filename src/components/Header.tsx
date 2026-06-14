import Logo from "@/assets/cinesurf-logo.svg?react";

export function Header() {
  return (
    <header className="flex items-center justify-between pt-4">
      <a href="/" className="flex items-center gap-2">
        <Logo className="h-10 w-auto text-accent" />
        <span className="text-2xl font-bold">
          Cine<span className="text-accent">Surf</span>
        </span>
      </a>
      <button className="rounded-md bg-accent px-2.5 py-1 font-medium cursor-pointer transition hover:brightness-110">
        Sign In
      </button>
    </header>
  );
}
