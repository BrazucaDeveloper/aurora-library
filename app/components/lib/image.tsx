import { Fragment, useEffect, useState, type ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { Skeleton } from '../ui/skeleton';

interface ImageControlProps extends ComponentProps<'img'> {
	children: React.ReactNode
};

export function Img({
	className,
	src = '',
	alt,
	children,
	...props
}: ImageControlProps) {
	const [state, setState] = useState('loading');

	useEffect(() => {
		const img = new Image();
		img.onload = () => setState('sucess');
		img.onerror = () => setState('error');
		img.src = src;
	}, []);

	return (
		<Fragment>
			{state === 'loading' && <Skeleton className={className} />}
			{state === 'error' && children}
			{state === 'sucess' && (
				<img
					className={twMerge('object-cover', className)}
					src={src}
					alt={alt}
					{...props}
				/>
			)}
		</Fragment>
	);
}
