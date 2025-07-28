import { Button } from '@shadcn-ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@shadcn-ui/dialog';
import { PlusCircleIcon } from 'lucide-react';
import { ClientForm } from './form';

export function CreateClientDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<PlusCircleIcon /> Add Client
				</Button>
			</DialogTrigger>

			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Add Client</DialogTitle>
					<DialogDescription>
						Fill in the details to add a new client.
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
