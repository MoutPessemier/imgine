import { clsx } from "clsx";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

import styles from "./post-card.module.css";

type PostCardRootProps = ComponentPropsWithoutRef<"div">;

export const Root = ({ className, children, ...props }: PostCardRootProps) => {
  return (
    <div className={clsx(styles["post-card"], className)} {...props}>
      {children}
    </div>
  );
};

type PostCardHeaderProps = ComponentPropsWithoutRef<"div">;

export const Header = ({
  className,
  children,
  ...props
}: PostCardHeaderProps) => {
  return (
    <div className={clsx(styles["post-card-header"], className)} {...props}>
      {children}
    </div>
  );
};

type PostCardMetaProps = ComponentPropsWithoutRef<"span">;

export const Meta = ({ className, children, ...props }: PostCardMetaProps) => {
  return (
    <span className={clsx(styles["post-card-meta"], className)} {...props}>
      {children}
    </span>
  );
};

type PostCardTitleProps = ComponentPropsWithoutRef<"h3">;

export const Title = ({
  className,
  children,
  ...props
}: PostCardTitleProps) => {
  return (
    <h3 className={clsx(styles["post-card-title"], className)} {...props}>
      {children}
    </h3>
  );
};

type PostCardContentProps = ComponentPropsWithoutRef<"p">;

export const Content = ({
  className,
  children,
  ...props
}: PostCardContentProps) => {
  return (
    <p className={clsx(styles["post-card-content"], className)} {...props}>
      {children}
    </p>
  );
};

type PostCardActionProps = ComponentPropsWithoutRef<typeof Link>;

export const Action = ({
  className,
  children,
  ...props
}: PostCardActionProps) => {
  return (
    <Link className={clsx(styles["post-card-action"], className)} {...props}>
      {children}
    </Link>
  );
};
