import clsx from "clsx";
import { ComponentProps, FC, forwardRef } from "react";

export const PingPoint: FC<ComponentProps<"div">> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "transition-all duration-500 w-6 h-6 absolute flex items-center justify-center",
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={clsx(
            "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          )}
          style={{ animationDuration: "2200ms" }}
        />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
      </div>
    );
  }
);
