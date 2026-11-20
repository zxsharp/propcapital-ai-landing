import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium tracking-[0.02em] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-black/[0.08] bg-[#F5F5F7] text-[#1D1D1F]",
        accent:
          "bg-[#0071E3]/10 text-[#0071E3] border border-[#0071E3]/20",
        outline:
          "border border-black/[0.12] text-[#6E6E73] bg-transparent",
        dark:
          "bg-[#1D1D1F] text-white",
        success:
          "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
