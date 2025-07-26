import { loader } from "./route";
import { useState } from "react";
import { useLoaderData } from "react-router";

import { Header } from "../_components/header";
import { DataTable } from "../_components/table";
import { PageNav } from "../_components/page-nav";

import { UpdateClientDialog } from "./_components/update-client";
import { DeleteClientDialog } from "./_components/delete-client";
import { CreateClientDialog } from "./_components/create-client";

export function ClientsPage() {
  const { clients } = useLoaderData<typeof loader>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  return (
    <>
      <Header
        CreateDialog={<CreateClientDialog />}
        orderBy={{ }}
        status={{ }}
        search={{ }}
      />

      <DataTable data={clients} />

      <UpdateClientDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <DeleteClientDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen} />

      <PageNav current={1} total={1} perPage={10} offset={5} />
    </>
  );
}
