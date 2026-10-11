import type { ComponentProps } from "react";

export const fieldStyles = `w-full rounded-xl border border-cards-border bg-hover
    px-4 py-3 font-plus text-sm text-primary placeholder:text-placeholder
    outline-none focus:border-primary focus:ring-2 focus:ring-primary/10
    transition-colors`

export default function Input(props: ComponentProps<'input'>) {
  return (
    <input className={fieldStyles} {...props}  />
  )
}


