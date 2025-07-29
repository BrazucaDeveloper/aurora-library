import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface FieldProps extends ComponentProps<'div'> {}

export function Field({ className, ...props }: FieldProps) {
	return <div className={twMerge('space-y-2', className)} {...props} />;
}
