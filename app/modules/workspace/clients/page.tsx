import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@shadcn-ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@shadcn-ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@shadcn-ui/table"

import { Input } from "@shadcn-ui/input";
import { Label } from "@shadcn-ui/label";
import { Button } from "@shadcn-ui/button";

import { PenLineIcon, SearchIcon, TrashIcon } from "lucide-react";

import { loader } from "./route";
import { useLoaderData } from "react-router";
import { CreateClientDialog } from "./features/create-client";

export function ClientsPage() {
  const { clients } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="flex flex-col justify-center gap-5 mb-6 divide-y">
        <div className="flex items-center justify-between w-full pb-4">
          <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
            Aurora clients
          </h1>

          <CreateClientDialog />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2">
            <Label className="">Filter status by</Label>
            <div className="flex items-center gap-3">
              <Button>All</Button>
              <Button variant="outline">Active</Button>
              <Button variant="outline">Inactive</Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Label>Order By</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="---" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">---</SelectItem>
                  <SelectItem value="Name">Name</SelectItem>
                  <SelectItem value="Email">Email</SelectItem>
                  <SelectItem value="Phone">Phone</SelectItem>
                  <SelectItem value="State">State</SelectItem>
                  <SelectItem value="City">City</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Search</Label>
              <div className="relative flex flex-col items-start gap-4">
                <Input placeholder="Search..." className="pr-8 md:min-w-80" />
                <SearchIcon className="size-4 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow pb-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {clients.map((clients) => (
              <TableRow key={clients.id}>
                <TableCell className="font-medium">{clients.name}</TableCell>
                <TableCell>
                  <span className={
                    `inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-medium ${clients.status === 'active' ? 'bg-green-300/20 text-green-200 ring ring-emerald-200/30' : 'bg-rose-400/20 text-red-200 ring ring-red-300/30'}`
                  }>{clients.status}</span>
                </TableCell>
                <TableCell>{clients.email}</TableCell>
                <TableCell>{clients.cpf}</TableCell>
                <TableCell>{clients.phone}</TableCell>
                <TableCell>{clients.address}</TableCell>
                <TableCell className="*:inline space-x-3 *:size-4.5">
                  <PenLineIcon />
                  <TrashIcon className="text-rose-400" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={7} className="text-right font-medium">
                Listing 10 clients of {clients.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
