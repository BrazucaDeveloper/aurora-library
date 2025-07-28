import { Label } from '@components/label';
import type { ComponentProps } from 'react';

type UploadImageLabelProps = ComponentProps<'label'>;

export function UploadImageLabel({
	className,
	...props
}: UploadImageLabelProps) {
	return <Label {...props} />;
}
