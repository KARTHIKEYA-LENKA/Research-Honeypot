import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"; // Add "ghost"
  size?: "default" | "icon" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md",
          variant === "outline" && "border border-gray-300",
          size === "icon" && "w-10 h-10 flex items-center justify-center",
          size === "sm" && "px-2 py-1 text-sm",
          size === "lg" && "px-6 py-3 text-lg font-semibold", // Add styles for "lg"
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };





















