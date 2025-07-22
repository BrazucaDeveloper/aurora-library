import { Button } from "@shadcn-ui/button";

import { Nav } from "@my-components/nav";
import { Image } from "@my-components/image";

import { Outlet } from "react-router";

import {
  BookCopyIcon,
  ChartNoAxesCombinedIcon,
  HandshakeIcon,
  LogOutIcon,
  MenuIcon,
  SunIcon,
  UsersIcon,
  UserSquareIcon
} from "lucide-react";

export default function WorkspaceLayout() {
  return (
    <div className="flex flex-col h-dvh w-full bg-stone-200 dark:bg-stone-900 md:p-6">
      <header className="flex items-center h-16 justify-between m-3 md:mt-0">
        <div className="flex items-center gap-4">
          <Image.Container className="bg-stone-950 rounded-sm ring ring-stone-700/70 shadow">
            <Image.Control
              src="/logo.png"
              alt="Logo da biblioteca Aurora Library"
              className="aspect-square size-11 p-2"
            />
            <Image.Fallback>
              <div className="animate-pulse size-10 p-2 rounded-md bg-zinc-900" />
            </Image.Fallback>
          </Image.Container>

          <Nav.Container className="hidden md:flex gap-0 *:p-4 *:first:pl-6 *:last:pr-6 bg-stone-950 rounded-lg ring ring-stone-700/60">
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <UserSquareIcon />
            <span className="hidden lg:inline">My account</span>
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <LogOutIcon />
            <span className="hidden lg:inline">Logout</span>
          </Button>

          <div className="hidden lg:block h-7 w-0.5 rounded-full bg-stone-600/65"></div>

          <Button className="flex items-center gap-2">
            <SunIcon />
            <span className="hidden lg:inline">Change theme</span>
          </Button>
        </div>

        <Button variant="ghost" className="md:hidden h-12">
          <MenuIcon className="size-8 stroke-[1.5px]" />
        </Button>
      </header>

      <main className="py-6 px-4 md:p-12 flex flex-col flex-grow md:rounded-xl bg-stone-100 dark:bg-stone-950 md:shadow-md ring ring-stone-700/20 dark:ring-stone-700/70">
        <Outlet />
      </main>
    </div>
  );
}
