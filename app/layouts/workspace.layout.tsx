import { Image } from "@app/components/lib/image";
import { Nav } from "@app/components/lib/nav";
import { Button } from "@app/components/ui/button";
import { Outlet } from "react-router";

export default function WorkspaceLayout() {
  return (
    <div className="flex flex-col h-dvh w-full bg-stone-200 dark:bg-stone-800 p-6">
      <header className="flex items-center justify-between bg-stone-200 dark:bg-stone-800 px-4 pb-4">
        <div className="flex items-center gap-6">
          <Image.Container>
            <Image.Control
              src="/logo.png"
              alt="Logo da biblioteca Aurora Library"
              className="aspect-square size-10 bg-stone-900 shadow rounded-md p-2"
            />
            <Image.Fallback>
              <div className="animate-pulse size-8 p-1.5 rounded-md bg-zinc-900" />
            </Image.Fallback>
          </Image.Container>

          <Nav.Container>
            <Nav.Anchor to="/dashboard">Dashboard</Nav.Anchor>
            <Nav.Anchor to="/clients">Clients</Nav.Anchor>
            <Nav.Anchor to="/books">Books</Nav.Anchor>
            <Nav.Anchor to="/loans">Loans</Nav.Anchor>
          </Nav.Container>
        </div>

        <div className="space-x-4">
          <Button>My account</Button>
          <Button>Logout</Button>
        </div>
      </header>

      <main className="flex-grow rounded-xl bg-stone-100 dark:bg-stone-950 shadow-md ring ring-stone-700/20 dark:ring-stone-700/70">
        <Outlet />
      </main>
    </div>
  );
}
