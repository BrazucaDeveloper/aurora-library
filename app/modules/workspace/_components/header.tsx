import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shadcn-ui/select";

import { Label } from "@shadcn-ui/label";
import { InputSearch } from "./input-search";

interface HeaderWorkspaceProps {
  CreateDialog: React.ReactNode,
  status: {},
  orderBy: {},
  search: {}
}

export function Header({
  CreateDialog,
}: HeaderWorkspaceProps) {
  return (
    <header className="flex flex-col justify-center gap-5 mb-6 divide-y">
      <div className="flex items-center justify-between w-full pb-4">
        <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
          Aurora clients
        </h1>
        {CreateDialog}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="space-y-2">
          <Label htmlFor="">Filter status by</Label>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <Label>Order By</Label>
            <Select defaultValue="none">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">---</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="state">State</SelectItem>
                <SelectItem value="city">City</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Search</Label>
            <InputSearch />
          </div>
        </div>
      </div>
    </header>
  );
}