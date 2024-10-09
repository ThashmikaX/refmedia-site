import React from "react";
import clsx from "clsx";

const Skeleton = ({
  variant = "text",
  className,
  ...props
}: {
  variant?: "text" | "rectangular";
  className?: string;
}) => {
  const baseClasses = "bg-gray-200 rounded-sm animate-pulse";

  const variantClasses = {
    text: "h-4 w-full",
    rectangular: "h-full w-full",
  };

  return (
    <div
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
};

const SkeletonLoader = ({
  loading = true,
  children,
  className,
}: {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return loading ? (
    <div className={clsx("flex flex-col gap-4", className)}>
      {React.Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </div>
  ) : (
    <>{children}</>
  );
};

export { Skeleton, SkeletonLoader };
