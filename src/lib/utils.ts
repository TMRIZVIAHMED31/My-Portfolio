/**
 * WHY `cn()`? (shadcn/ui + Tailwind)
 * `clsx` lets us add classes conditionally; `tailwind-merge` resolves conflicts
 * so a caller's `className="px-8"` correctly overrides a component's default
 * `px-5`. Every shadcn/ui component uses this helper.
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
