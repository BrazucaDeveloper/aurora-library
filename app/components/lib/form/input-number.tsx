import { Input } from "@app/components/ui/input";
import type { ComponentProps } from "react";

interface InputNumberProps extends ComponentProps<'input'> {}

export function InputNumber({ ...props }: InputNumberProps) {
  return <Input type="number" {...props} />
}