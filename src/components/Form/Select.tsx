import type { ComponentProps } from "react";
import { fieldStyles } from "./Input";


export default function Select(props : ComponentProps<"select">) {
  return (
    <select className={`${fieldStyles} cursor-pointer`} {...props} />
  )
}


