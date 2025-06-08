import React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "default" | "lg";
}

function LoadingSpinner({
  size = "default",
  className,
  ...props
}: LoadingSpinnerProps) {
  // Map size prop to pixel values
  const sizeMap = {
    xs: 12,
    sm: 16,
    default: 24,
    lg: 32,
  };

  const iconSize = sizeMap[size];

  return (
    <div
      className={cn("flex items-center justify-center w-full", className)}
      {...props}
    >
      <Loader2
        size={iconSize}
        className="animate-spin  mx-auto text-orange-500"
      />
    </div>
  );
}

export default LoadingSpinner;
