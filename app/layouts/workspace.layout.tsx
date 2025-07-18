import { Nav } from "@app/components/lib/nav";
import { Image } from "@app/components/lib/image";
import { Button } from "@app/components/ui/button";

import { Outlet } from "react-router";
import { BookCopyIcon, ChartNoAxesCombinedIcon, HandshakeIcon, LogOutIcon, SunIcon, UsersIcon, UserSquareIcon } from "lucide-react";

export default function WorkspaceLayout() {
  return (
    <div className="flex flex-col h-dvh w-full bg-stone-200 dark:bg-stone-900 md:p-6">
      <header className="flex items-center justify-between mt-6 md:mt-0 md:mx-4">
        <div className="flex items-center gap-4">
          <Image.Container className="hidden md:block bg-stone-950 rounded-sm ring ring-stone-700/70 shadow">
            <Image.Control
              src="/logo.png"
              alt="Logo da biblioteca Aurora Library"
              className="aspect-square size-11 p-2.5"
            />
            <Image.Fallback>
              <div className="animate-pulse size-10 p-2 rounded-md bg-zinc-900" />
            </Image.Fallback>
          </Image.Container>

          <Nav.Container
            className="relative bg-stone-950 px-6 pt-5 pb-6 rounded-tr-2xl md:rounded-t-2xl ring ring-stone-700/60"
          >
            <div className="absolute left-0 -bottom-0.5 bg-stone-950 h-1 w-[100.1%]"></div>
            <Nav.Anchor to="/dashboard">
              <ChartNoAxesCombinedIcon className="size-4" /> Dashboard
            </Nav.Anchor>
            <Nav.Anchor to="/clients">
              <UsersIcon className="size-4" /> Clients
            </Nav.Anchor>
            <Nav.Anchor to="/books">
              <BookCopyIcon className="size-4" /> Books
            </Nav.Anchor>
            <Nav.Anchor to="/loans">
              <HandshakeIcon className="size-4" /> Loans
            </Nav.Anchor>
          </Nav.Container>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <UserSquareIcon /> My account
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <LogOutIcon /> Logout
          </Button>

          <div className="h-7 w-0.5 rounded-full bg-stone-600/65"></div>

          <Button className="flex items-center gap-2">
            <SunIcon /> Change theme
          </Button>
        </div>
      </header>

      <main className="py-6 px-4 md:p-12 flex flex-col flex-grow md:rounded-xl bg-stone-100 dark:bg-stone-950 md:shadow-md ring ring-stone-700/20 dark:ring-stone-700/70">
        <Outlet />
      </main>
    </div>
  );
}
