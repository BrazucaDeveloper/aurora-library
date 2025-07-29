import {
	Form as FormReactRouter,
	FormProps as FormReactRouterProps,
} from 'react-router';
import { twMerge } from 'tailwind-merge';

interface FormProps extends FormReactRouterProps {}

export function Form({ className, method = 'GET', ...props }: FormProps) {
	return (
		<FormReactRouter
			method={method}
			className={twMerge('space-y-6', className)}
			{...props}
		/>
	);
}
