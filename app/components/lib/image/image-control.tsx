import { Show } from '@app/components/utils/show';
import { type ComponentProps, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { getContext } from './image-context';

type ImageControlProps = ComponentProps<'img'>;

export function ImageControl({ className, src, ...props }: ImageControlProps) {
	const { setImageSrc, state } = getContext();

	useEffect(() => {
		setImageSrc(src ?? '');
	});

	return (
		<Show condition={state.showFallback === false}>
			<img className={twMerge('', className)} src={src} {...props} />
		</Show>
	);
}
