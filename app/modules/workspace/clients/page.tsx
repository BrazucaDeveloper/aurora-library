import * as Table from "@shadcn-ui/table";
import * as Select from "@shadcn-ui/select";
import * as Pagination from "@shadcn-ui/pagination";
import * as AlertDialog from "@shadcn-ui/alert-dialog"

import { Input } from "@shadcn-ui/input";
import { Label } from "@shadcn-ui/label";
import { Badge } from "@shadcn-ui/badge";
import { Button } from "@shadcn-ui/button";

import { loader } from "./route";
import { useState } from "react";
import { useLoaderData } from "react-router";

import { CreateClientDialog } from "./_components/create-client";
import { UpdateClientDialog } from "./_components/update-client";
import { PenLineIcon, SearchIcon, TrashIcon } from "lucide-react";
import { InputSearch } from "../_components/input-search";

export function ClientsPage() {
  const { clients } = useLoaderData<typeof loader>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

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
            <Label>Filter status by</Label>
            <Select.Select defaultValue="all">
              <Select.SelectTrigger className="w-[180px]">
                <Select.SelectValue />
              </Select.SelectTrigger>
              <Select.SelectContent>
                <Select.SelectItem value="all">All</Select.SelectItem>
                <Select.SelectItem value="active">Active</Select.SelectItem>
                <Select.SelectItem value="inactive">Inactive</Select.SelectItem>
              </Select.SelectContent>
            </Select.Select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Label>Order By</Label>
              <Select.Select defaultValue="none">
                <Select.SelectTrigger className="w-[180px]">
                  <Select.SelectValue />
                </Select.SelectTrigger>
                <Select.SelectContent>
                  <Select.SelectItem value="none">---</Select.SelectItem>
                  <Select.SelectItem value="name">Name</Select.SelectItem>
                  <Select.SelectItem value="email">Email</Select.SelectItem>
                  <Select.SelectItem value="phone">Phone</Select.SelectItem>
                  <Select.SelectItem value="state">State</Select.SelectItem>
                  <Select.SelectItem value="city">City</Select.SelectItem>
                </Select.SelectContent>
              </Select.Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="client-search">Search</Label>
              <InputSearch />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow pb-3">
        <Table.Table>
          <Table.TableCaption>A list of all Aurora clients.</Table.TableCaption>
          <Table.TableHeader>
            <Table.TableRow>
              <Table.TableHead>Name</Table.TableHead>
              <Table.TableHead>Status</Table.TableHead>
              <Table.TableHead>Email</Table.TableHead>
              <Table.TableHead>CPF</Table.TableHead>
              <Table.TableHead>Phone</Table.TableHead>
              <Table.TableHead>Address</Table.TableHead>
              <Table.TableHead>Actions</Table.TableHead>
            </Table.TableRow>
          </Table.TableHeader>

          <Table.TableBody>
            {clients.map((clients) => (
              <Table.TableRow key={clients.id}>
                <Table.TableCell className="font-medium">{clients.name}</Table.TableCell>
                <Table.TableCell>
                  <Badge variant={clients.status === 'active' ? 'default' : 'destructive'}>
                    {clients.status}
                  </Badge>
                </Table.TableCell>
                <Table.TableCell>{clients.email}</Table.TableCell>
                <Table.TableCell>{clients.cpf}</Table.TableCell>
                <Table.TableCell>{clients.phone}</Table.TableCell>
                <Table.TableCell>{clients.address}</Table.TableCell>
                <Table.TableCell className="*:inline space-x-3 *:size-4.5">
                  <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(true)}>
                    <PenLineIcon />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsAlertDialogOpen(true)}>
                    <TrashIcon className="text-rose-400" />
                  </Button>
                </Table.TableCell>
              </Table.TableRow>
            ))}
          </Table.TableBody>

          <Table.TableFooter>
            <Table.TableRow>
              <Table.TableCell colSpan={7} className="text-right font-medium">
                Listing 10 clients of {clients.length}
              </Table.TableCell>
            </Table.TableRow>
          </Table.TableFooter>
        </Table.Table>
      </div>

      <UpdateClientDialog open={isDialogOpen} onChangeOpen={setIsDialogOpen} />

      <AlertDialog.AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialog.AlertDialogContent>
          <AlertDialog.AlertDialogHeader>
            <AlertDialog.AlertDialogTitle>Are you absolutely sure?</AlertDialog.AlertDialogTitle>
            <AlertDialog.AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.AlertDialogDescription>
          </AlertDialog.AlertDialogHeader>
          <AlertDialog.AlertDialogFooter>
            <AlertDialog.AlertDialogCancel>Cancel</AlertDialog.AlertDialogCancel>
            <AlertDialog.AlertDialogAction>Continue</AlertDialog.AlertDialogAction>
          </AlertDialog.AlertDialogFooter>
        </AlertDialog.AlertDialogContent>
      </AlertDialog.AlertDialog>

      <Pagination.Pagination>
        <Pagination.PaginationContent>
          <Pagination.PaginationItem>
            <Pagination.PaginationPrevious href="#" />
          </Pagination.PaginationItem>

          <Pagination.PaginationItem>
            <Pagination.PaginationLink href="#" isActive>1</Pagination.PaginationLink>
          </Pagination.PaginationItem>

          <Pagination.PaginationItem>
            <Pagination.PaginationNext href="#" />
          </Pagination.PaginationItem>
        </Pagination.PaginationContent>
      </Pagination.Pagination>
    </>
  );
}
