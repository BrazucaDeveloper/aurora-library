import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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

import { PlusCircleIcon, SearchIcon } from "lucide-react";

import { useLoaderData } from "react-router";
import type { loader } from "./route";

export function ClientsPage() {
  const invoices = useLoaderData<typeof loader>();

  return (
    <>
      <header className="flex flex-col justify-center gap-5 mb-6 divide-y">
        <div className="flex items-center justify-between w-full pb-4">
          <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
            Aurora clients
          </h1>

          <Button className="flex items-center">
            <PlusCircleIcon /> Add Client
          </Button>
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
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
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

      <div className="flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
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
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
