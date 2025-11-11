import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// 🎨 Button Variants
const buttonVariants = cva(
  // base styles
  "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Default (your indigo design)
        default:
          "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg px-8 py-3 text-lg",

        // Secondary (soft gray)
        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm px-6 py-2 text-sm",

        // Outline button
        outline:
          "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-2",

        // Ghost (minimal)
        ghost:
          "bg-transparent text-indigo-600 hover:bg-indigo-50 px-4 py-2",

        // Destructive / Danger
        destructive:
          "bg-red-600 text-white hover:bg-red-700 px-6 py-2",

        // Gradient Button
        gradient:
          "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg hover:opacity-90 px-8 py-3 text-lg rounded-lg",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
