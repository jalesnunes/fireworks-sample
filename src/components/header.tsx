import { List } from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  return (
    <header className="w-full h-24 flex items-center justify-between p-6 sm:px-12 md:px-24 bg-[var(--color-secondary)] fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-[var(--color-primary)] text-4xl">logo</div>

      {/* Ícone do menu (só em celulares) */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md bg-transparent border-none">
              <List size={32} color="#030303" weight="bold" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="h-screen w-84 bg-black border-none p-6 flex flex-col items-center justify-start fixed right-0 top-0 z-50"
          >
            <nav className="flex flex-col gap-6 mt-10">
              <a
                href="#home"
                className="text-4xl font-semibold text-white hover:text-neutral-300"
              >
                Home
              </a>
              <a
                href="#sobre"
                className="text-4xl font-semibold text-white hover:text-neutral-300"
              >
                About
              </a>
              <a
                href="#contato"
                className="text-4xl font-semibold text-white hover:text-neutral-300"
              >
                Contact us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Links (mostram a partir de tablets para cima) */}
      <div className="hidden sm:flex gap-8">
        <a
          href="#home"
          className="text-xl font-semibold text-white hover:text-neutral-300"
        >
          Home
        </a>
        <a
          href="#sobre"
          className="text-xl font-semibold text-white hover:text-neutral-300"
        >
          About
        </a>
        <a
          href="#contato"
          className="text-xl font-semibold text-white hover:text-neutral-300"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}




