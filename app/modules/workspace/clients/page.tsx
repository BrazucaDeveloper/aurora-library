import { clientLoader } from "./route";
import { Fragment, useEffect, useState } from "react";
import { data, Form, useLoaderData, useSearchParams } from "react-router";

import { PageNav } from "../_components/page-nav";
import { UpdateClientDialog } from "./_components/update-client";
import { DeleteClientDialog } from "./_components/delete-client";
import { CreateClientDialog } from "./_components/create-client";

import { Badge } from "@shadcn-ui/badge";
import { Label } from "@shadcn-ui/label";
import { Button } from "@shadcn-ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@shadcn-ui/select";

import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@shadcn-ui/table";

import { PenLineIcon, SearchIcon, TrashIcon } from "lucide-react";
import { Input } from "@shadcn-ui/input";

export function ClientsPage() {
  const { clients, pagination } = useLoaderData<typeof clientLoader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  function handleOpenDialog(action: string, cid: string) {
    if (action === 'update') {
      setIsDialogOpen(true);
    }
    if (action === 'delete') {
      setIsAlertDialogOpen(true);
    }
    handleSearchParams('cid', cid);
  }
  
  function handleDialog(isOpen: boolean) {
    setIsDialogOpen(isOpen);
    if (!isOpen) clearCid();
  }

  function handleAlertDialog(isOpen: boolean) {
    setIsAlertDialogOpen(isOpen);
    if (!isOpen) clearCid();
  }

  function clearCid() {
    handleSearchParams('cid', '');
  }

  function handleSearchParams(key: string, value: string) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  }

  function handleFilterChange(key: string, value: string) {
    handleSearchParams(key, value);
  }

  return (
    <Fragment>
      <header className="flex flex-col justify-center gap-5 mb-6 divide-y">
        <div className="flex items-center justify-between w-full pb-4">
          <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
            Aurora clients
          </h1>
          <CreateClientDialog />
        </div>

        <Form method="get" className="flex items-center justify-between flex-wrap gap-6">
          <div className="space-y-2">
            <Label htmlFor="status">Filter status by</Label>
            <Select
              name="status"
              defaultValue={searchParams.get('status') || 'all'}
              onValueChange={(value) => handleFilterChange('status', value)}
            >
              <SelectTrigger id="status" className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between gap-4">
            <div className="space-y-2">
              <Label htmlFor="order-by">Order By</Label>
              <Select
                name="order-by"
                defaultValue={searchParams.get('order-by') || 'none'}
                onValueChange={(value) => handleFilterChange('order-by', value)}
              >
                <SelectTrigger id="order-by" className="w-[180px]">
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
              <Label htmlFor="search">Search</Label>
              <div className="flex gap-2">
                <Input
                  type="search"
                  name="search"
                  id="search"
                  className="pr-8 md:min-w-80"
                  defaultValue={searchParams.get('search') || ''}
                  placeholder="Search by name, email, cpf..."
                />  
                <Button type="submit" variant="outline" size="icon">
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </header>

      <div className="flex-grow pb-3">
        <Table>
          <TableCaption>A list of all Aurora clients.</TableCaption>
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
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>
                  <Badge variant={client.status === 'active' ? 'default' : 'destructive'}>
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.cpf}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell className="*:inline space-x-3 *:size-4.5">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleOpenDialog('update', client.id)}
                  ><PenLineIcon /></Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleOpenDialog('delete', client.id)}
                  ><TrashIcon className="text-rose-400" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={7} className="text-right font-medium">
                Listing 10 clients of {data.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <UpdateClientDialog
        open={isDialogOpen}
        onOpenChange={handleDialog}
      />
      <DeleteClientDialog
        open={isAlertDialogOpen}
        onOpenChange={handleAlertDialog}
      />
      <PageNav current={pagination.current} total={pagination.total()} />
    </Fragment>
  );
}
