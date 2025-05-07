import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md bg-purple-300 px-4 py-2 text-sm font-medium text-purple-600 shadow transition-colors hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
