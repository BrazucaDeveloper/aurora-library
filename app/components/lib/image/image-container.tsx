import type { ComponentProps } from 'react';
import { getProviders, ImageContext } from './image-context';

type ImageContainerProps = ComponentProps<'div'>;

export function ImageContainer({ className, ...props }: ImageContainerProps) {
	const providers = getProviders();
	
	return (
		<ImageContext.Provider value={providers}>
			<div className={className} {...props} />
		</ImageContext.Provider>
	);
}
