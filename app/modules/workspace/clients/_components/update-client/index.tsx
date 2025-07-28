import { Button } from '@shadcn-ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@shadcn-ui/dialog';

import { ClientForm } from './form';

interface UpdateClientDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function UpdateClientDialog({
	open,
	onOpenChange,
}: UpdateClientDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Update Client</DialogTitle>
					<DialogDescription>
						Fill in the details to update the client.
					</DialogDescription>
				</DialogHeader>

				<ClientForm />

				<DialogFooter className='mt-2 gap-4 sm:justify-start'>
					<Button type='submit' form='client-form' className='flex-1'>
						Save
					</Button>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Cancel
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
