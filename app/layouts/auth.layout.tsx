import { Image } from "@app/components/lib/image";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-dvh max-h-screen w-full bg-stone-900">
      <div className="col-span-2 grid place-items-center">
        <div className="opacity-90 select-none flex items-center gap-3 absolute top-0 left-0 m-6 z-10">
          <Image.Container>
            <Image.Control
              src="/logo.png"
              alt="Logo da biblioteca Aurora Library"
              className="aspect-square size-10 bg-stone-700 shadow rounded-md p-2"
            />
            <Image.Fallback>
              <div className="animate-pulse size-9 p-1.5 rounded-sm bg-zinc-900" />
            </Image.Fallback>
          </Image.Container>

          <span className="font-cursive text-balance text-3xl text-stone-200">
            Aurora Library
          </span>
        </div>

        <Outlet />
      </div>

      <div className="hidden md:block col-span-3 h-full">
        <Image.Container className="h-full w-full">
          <Image.Control
            src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg"
            alt="Logo da biblioteca Aurora Library"
            className="object-cover h-full w-full"
          />
          <Image.Fallback>
            <div className="animate-pulse size-8 p-1.5 rounded-md bg-zinc-900" />
          </Image.Fallback>
        </Image.Container>
      </div>
    </div>
  );
}