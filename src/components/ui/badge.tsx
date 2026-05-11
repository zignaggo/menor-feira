import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-bold",
  {
    variants: {
      variant: {
        default: "bg-blue-bg text-blue-dark px-3.5 py-1.5 text-xs",
        eyebrow:
          "tracking-[1.5px] uppercase text-ink2 text-[11px] font-bold bg-transparent px-0 py-0",
        best: "bg-blue text-white px-2 py-0.5 text-[10px] tracking-wider",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
