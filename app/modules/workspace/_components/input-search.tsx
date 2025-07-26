import { Input } from "@shadcn-ui/input";
import { SearchIcon } from "lucide-react";

export function InputSearch() {
  return (
    <div className="relative flex flex-col items-start gap-4">
      <Input type="search" name="client-search" id="client-search" placeholder="Find clients by name, email or cpf..." className="pr-8 md:min-w-80" />
      <SearchIcon className="size-4 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500" />
    </div>
  );
}