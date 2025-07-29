import { Show } from '@app/components/utils/show';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { getContext } from './image-context';

type ImageControlProps = ComponentProps<'img'>;

export function ImageControl({
	className,
	src,
	alt,
	...props
}: ImageControlProps) {
	const { state } = getContext();

	return (
		<Show condition={state.showFallback === false}>
			<img
				className={twMerge('object-cover', className)}
				src={src}
				alt={alt}
				{...props}
			/>
		</Show>
	);
}
