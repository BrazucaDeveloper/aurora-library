import { NavLink, NavLinkProps } from 'react-router';
import { tv } from 'tailwind-variants';

const navAnchor = tv({
	base: [
		'flex items-center gap-2 text-zinc-500 after:absolute after:top-full relative',
		'after:left-0 after:h-0.5 after:w-1/2 after:ml-0.5 after:bg-stone-900 dark:after:bg-stone-200 after:mt-1', 
		'after:scale-x-0 hover:after:animate-underline-appear transition-all'
	],
	variants: {
		isActive: {
			true: 'dark:text-stone-200 text-stone-900 after:scale-x-100 hover:opacity-80',
		},
		isPending: {
			true: 'animate-pulse',
		},
		isTransitioning: {
			true: 'after:animate-underline-appear',
		},
	},
});

type NavAnchorProps = Omit<NavLinkProps, 'className'> & {
	className?: string;
};

export function NavAnchor({ to, className, ...props }: NavAnchorProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending, isTransitioning }) =>
				navAnchor({ isActive, isPending, isTransitioning, className })
			}
			{...props}
		/>
	);
}
