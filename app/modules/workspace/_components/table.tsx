import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@app/components/ui/table";

import { Button } from "@shadcn-ui/button";
import { Badge } from "@shadcn-ui/badge";

import { PenLineIcon, TrashIcon } from "lucide-react";

interface DataTableProps {
  data: []
}

export function DataTable({ data }: DataTableProps) {
  return (
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
          {data.map((clients) => (
            <TableRow key={clients.id}>
              <TableCell className="font-medium">{clients.name}</TableCell>
              <TableCell>
                <Badge variant={clients.status === 'active' ? 'default' : 'destructive'}>
                  {clients.status}
                </Badge>
              </TableCell>
              <TableCell>{clients.email}</TableCell>
              <TableCell>{clients.cpf}</TableCell>
              <TableCell>{clients.phone}</TableCell>
              <TableCell>{clients.address}</TableCell>
              <TableCell className="*:inline space-x-3 *:size-4.5">
                <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(true)}>
                  <PenLineIcon />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsAlertDialogOpen(true)}>
                  <TrashIcon className="text-rose-400" />
                </Button>
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
  );
}