import { Image } from '@my-components/image';
import { Nav } from '@my-components/nav';
import { Button } from '@shadcn-ui/button';
import { Separator } from '@shadcn-ui/separator';
import {
	BookCopyIcon,
	ChartNoAxesCombinedIcon,
	Contrast,
	HandshakeIcon,
	LogOutIcon,
	MenuIcon,
	UserSquareIcon,
	UsersIcon,
} from 'lucide-react';

import { Link, Outlet } from 'react-router';

export default function WorkspaceLayout() {
	return (
		<div className='flex flex-col h-dvh w-full bg-stone-200 dark:bg-stone-900 '>
			<header className='flex items-center justify-between py-4 px-8 bg-background shadow ring ring-foreground/15'>
				<div className='flex items-center gap-8'>
					<Image.Container className='bg-stone-800 rounded-sm ring ring-stone-700 shadow'>
						<Image.Control
							src='/logo.png'
							alt='Logo da biblioteca Aurora Library'
							className='aspect-square size-10 p-2.25'
						/>
						<Image.Fallback>
							<div className='animate-pulse size-10 p-2.25 rounded-sm bg-zinc-900' />
						</Image.Fallback>
					</Image.Container>

					<Nav.Container className='hidden md:flex gap-8'>
						<Nav.Anchor to='/workspace/dashboard'>
							<ChartNoAxesCombinedIcon className='size-4' /> Dashboard
						</Nav.Anchor>
						<Nav.Anchor to='/workspace/clients'>
							<UsersIcon className='size-4' /> Clients
						</Nav.Anchor>
						<Nav.Anchor to='/workspace/books'>
							<BookCopyIcon className='size-4' /> Books
						</Nav.Anchor>
						<Nav.Anchor to='/workspace/loans'>
							<HandshakeIcon className='size-4' /> Loans
						</Nav.Anchor>
					</Nav.Container>
				</div>

				<div className='h-6 md:flex items-center space-x-4 hidden'>
					<Link to='/my-account'>
						<Button variant='outline'>
							<UserSquareIcon />
							<span className='hidden lg:inline'>My account</span>
						</Button>
					</Link>
					<Button variant='destructive'>
						<LogOutIcon />
						<span className='hidden lg:inline'>Logout</span>
					</Button>
					<Separator orientation='vertical' className='dark:bg-stone-500/80' />
					<Button title='Toggle dark mode'>
						<Contrast />
					</Button>
				</div>

				<Button variant='ghost' className='md:hidden h-12'>
					<MenuIcon className='size-8 stroke-[1.5px]' />
				</Button>
			</header>

			<main className='py-6 px-4 md:py-6 md:px-8 flex flex-col flex-grow'>
				<Outlet />
			</main>
		</div>
	);
}
