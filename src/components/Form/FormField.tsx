import type { ReactNode } from "react";

type FormFieldProps = {
    label: string;
    htmlFor: string;
    className?: string;
    children: ReactNode 
}

export default function FormField({ label, htmlFor, className = "", children }:FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1 min-w-0 ${className}`}>
        <label
            htmlFor={htmlFor}
            className="text-sm font-plus font-semibold text-primary"
        >
            {label}
        </label>
        {children}
    </div>
  )
}


