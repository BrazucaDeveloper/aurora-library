import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "@app/components/ui/skeleton";

export function WorkspaceFallback() {
  return (
    <Fragment>
      <header className="flex flex-col justify-center gap-5 mb-6 divide-y">
        <div className="flex items-center justify-between w-full pb-4">
          <Skeleton className="h-11 w-56" />
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-10 w-[180px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-16" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-72" />
                <Skeleton className="size-10" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Skeleton className="flex-grow mb-3" />
      <Skeleton className="mx-auto h-10 w-96"/>
    </Fragment>
  );
}