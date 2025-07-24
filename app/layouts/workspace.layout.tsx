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
    <div className="flex flex-col h-dvh w-full bg-stone-200 dark:bg-stone-900 ">
      <header className="flex items-center h-16 justify-between my-3 mx-8">
        <div className="flex items-center gap-8">
          <Image.Container className="bg-stone-950 rounded-sm ring ring-stone-700/70 shadow">
            <Image.Control
              src="/logo.png"
              alt="Logo da biblioteca Aurora Library"
              className="aspect-square size-10 p-2.25"
            />
            <Image.Fallback>
              <div className="animate-pulse size-10 p-2.25 rounded-sm bg-zinc-900" />
            </Image.Fallback>
          </Image.Container>

          <Nav.Container className="hidden md:flex gap-8">
            <Nav.Anchor to="/workspace/dashboard">
              <ChartNoAxesCombinedIcon className="size-4" /> Dashboard
            </Nav.Anchor>
            <Nav.Anchor to="/workspace/clients">
              <UsersIcon className="size-4" /> Clients
            </Nav.Anchor>
            <Nav.Anchor to="/workspace/books">
              <BookCopyIcon className="size-4" /> Books
            </Nav.Anchor>
            <Nav.Anchor to="/workspace/loans">
              <HandshakeIcon className="size-4" /> Loans
            </Nav.Anchor>
          </Nav.Container>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="/my-account">
            <Button variant="outline">
              <UserSquareIcon />
              <span className="hidden lg:inline">My account</span>
            </Button>
          </a>

          <a href="/">
            <Button variant="destructive">
              <LogOutIcon />
              <span className="hidden lg:inline">Logout</span>
            </Button>
          </a>

          <div className="hidden lg:block h-7 w-0.5 rounded-full bg-stone-600/65"></div>

          <Button>
            <SunIcon />
            <span className="hidden lg:inline">Light theme</span>
          </Button>
        </div>

        <Button variant="ghost" className="md:hidden h-12">
          <MenuIcon className="size-8 stroke-[1.5px]" />
        </Button>
      </header>

      <main className="py-6 px-4 md:py-6 md:px-8 flex flex-col flex-grow md:rounded-t-3xl bg-stone-100 dark:bg-stone-950 md:shadow-md ring ring-stone-700/20 dark:ring-stone-700/70">
        <Outlet />
      </main>
    </div>
  );
}
