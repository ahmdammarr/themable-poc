import {
  createElement,
  InputHTMLAttributes,
  ClassAttributes,
  ReactNode,
  ReactHTML,
} from "react";
import {ButtonStyle} from './Button.style'

interface componentProps{
  type: unknown
  props?:
    | (InputHTMLAttributes<HTMLInputElement> &
        ClassAttributes<HTMLInputElement>)
    | null;
  children?: ReactNode;
  variants:  keyof typeof ButtonStyle
  styles?: InputHTMLAttributes<HTMLInputElement>["style"];
}

export function Button({
  type,
  props,
  children,
  variants,
  styles,
}: componentProps) {
  return createElement(
    type as keyof ReactHTML,
    {
      style: {
        ...styles,
        ...ButtonStyle[variants],
      },
      ...props,
    },
    children
  );
}
