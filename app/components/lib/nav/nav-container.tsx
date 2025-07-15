import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type NavContainerProps = ComponentProps<'nav'> & {
	orientation?: 'horizontal' | 'vertical';
};

export function NavContainer({ className, orientation = 'horizontal', ...props }: NavContainerProps) {
	return (
		<nav
			className={twMerge(
				`flex flex-${orientation === 'horizontal' ? 'row' : 'col' } flex-grow gap-6`,
				className
			)}
			{...props}
		/>
	);
}
