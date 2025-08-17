import { clsx } from "clsx";
import { type ComponentPropsWithoutRef } from "react";

import { type Category } from "@/types";

import styles from "./icon-circle.module.css";

type RootProps = ComponentPropsWithoutRef<"div">;

export const Root = ({ children, className, ...props }: RootProps) => {
  return (
    <div className={clsx(styles["icon-circle"], className)} {...props}>
      {children}
    </div>
  );
};

type CircleProps = ComponentPropsWithoutRef<"div"> & {
  variant: Category;
  size: "medium" | "large";
};

export const Circle = ({
  children,
  variant,
  size,
  className,
  ...props
}: CircleProps) => {
  const variantClass = styles[variant.toLowerCase()];

  return (
    <div
      className={clsx(
        styles["icon-circle-circle"],
        variantClass,
        styles[`size-${size}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type LabelProps = ComponentPropsWithoutRef<"p">;

export const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <p className={clsx(styles["icon-circle-label"], className)} {...props}>
      {children}
    </p>
  );
};
