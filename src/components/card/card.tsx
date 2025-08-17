import { clsx } from "clsx";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

import styles from "./card.module.css";

type CardProps = ComponentPropsWithoutRef<"div">;

export const Root = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

type CardHeaderProps = ComponentPropsWithoutRef<"div">;

export const Header = ({ children, ...props }: CardHeaderProps) => {
  return (
    <div className={styles["card-header"]} {...props}>
      {children}
    </div>
  );
};

type CardContentProps = ComponentPropsWithoutRef<"div">;

export const Content = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  return (
    <div className={clsx(styles["card-content"], className)} {...props}>
      {children}
    </div>
  );
};

type CardTextProps = ComponentPropsWithoutRef<"p">;

export const Text = ({ children, className, ...props }: CardTextProps) => {
  return (
    <p className={clsx(styles["card-text"], className)} {...props}>
      {children}
    </p>
  );
};
type CardFooterProps = ComponentPropsWithoutRef<"div">;

export const Footer = ({ children, className, ...props }: CardFooterProps) => {
  return (
    <div className={clsx(styles["card-footer"], className)} {...props}>
      {children}
    </div>
  );
};

type CardAction = ComponentPropsWithoutRef<typeof Link>;

export const Action = ({ children, className, ...props }: CardAction) => {
  return (
    <Link className={clsx(styles["card-action"], className)} {...props}>
      {children}
    </Link>
  );
};
