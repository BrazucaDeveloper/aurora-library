import { Input } from "@shadcn-ui/input";
import { SearchIcon } from "lucide-react";
import type { ComponentProps } from "react";

interface InputSearchProps extends ComponentProps<'input'> {}

export function InputSearch({ placeholder, className, ...props }: InputSearchProps) {
  return (
    <div className="relative flex flex-col items-start gap-4">
      <Input
        type="search"
        placeholder={placeholder}
        className={`pr-8 md:min-w-80 ${className}`}
        {...props}
      />
      <SearchIcon
        className="size-4 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
      />
    </div>
  );
}