import { Img } from '@my-components/image';
import { Outlet } from 'react-router';

export default function AuthLayout() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-5 h-dvh max-h-screen w-full'>
			<div className='col-span-2 grid place-items-center p-6'>
				<div className='opacity-90 select-none flex items-center gap-3 absolute top-0 left-0 m-6 z-10'>
					<Img
						src='/logo.png'
						alt='Logo da biblioteca Aurora Library'
						className='aspect-square size-10 bg-stone-900 dark:bg-stone-700/60 shadow rounded-sm p-2'
					>
						<div className='animate-pulse size-10 p-2.25 rounded-sm bg-zinc-900' />
					</Img>

					<span className='font-cursive text-balance text-3xl'>
						Aurora Library
					</span>
				</div>

				<Outlet />
			</div>

			<div className='hidden md:block col-span-3 h-full'>
				<Img
					src='https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg'
					alt='Logo da biblioteca Aurora Library'
					className='object-cover h-full w-full'
				>
					<div className='animate-pulse h-full w-full p-1.5 rounded-md bg-zinc-800' />
				</Img>
			</div>
		</div>
	);
}
