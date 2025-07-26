import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter
} from "@shadcn-ui/dialog";

import { Button } from "@shadcn-ui/button";

import { ClientForm } from "./form";

export function UpdateClientDialog({ open, onChangeOpen }) {
  return (
    <Dialog open={open} onOpenChange={onChangeOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Client</DialogTitle>
          <DialogDescription>
            Fill in the details to update the client.
          </DialogDescription>
        </DialogHeader>

        <ClientForm />

        <DialogFooter className="mt-2 gap-4 sm:justify-start">
          <Button type="submit" form="client-form" className="flex-1">
            Save
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}