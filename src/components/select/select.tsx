import { clsx } from "clsx";
import { Select } from "radix-ui";
import { type ComponentPropsWithoutRef } from "react";

import styles from "./select.module.css";

type RootProps = ComponentPropsWithoutRef<typeof Select.Root>;

export const Root = ({ children, ...props }: RootProps) => {
  return <Select.Root {...props}>{children}</Select.Root>;
};

type TriggerProps = ComponentPropsWithoutRef<typeof Select.Trigger>;

export const Trigger = ({ children, className, ...props }: TriggerProps) => {
  return (
    <Select.Trigger className={clsx(styles.trigger, className)} {...props}>
      {children}
    </Select.Trigger>
  );
};

type ValueProps = ComponentPropsWithoutRef<typeof Select.Value>;

export const Value = ({ children, className, ...props }: ValueProps) => {
  return (
    <Select.Value className={clsx(styles.value, className)} {...props}>
      {children}
    </Select.Value>
  );
};

type IconProps = ComponentPropsWithoutRef<typeof Select.Icon>;

export const Icon = ({ children, className, ...props }: IconProps) => {
  return (
    <Select.Icon className={clsx(styles.icon, className)} {...props}>
      {children}
    </Select.Icon>
  );
};

type PortalProps = ComponentPropsWithoutRef<typeof Select.Portal>;
export const Portal = ({ children, ...props }: PortalProps) => {
  return <Select.Portal {...props}>{children}</Select.Portal>;
};

type ContentProps = ComponentPropsWithoutRef<typeof Select.Content>;

export const Content = ({ children, className, ...props }: ContentProps) => {
  return (
    <Select.Content
      className={clsx(styles.content, className)}
      position="popper"
      {...props}
    >
      {children}
    </Select.Content>
  );
};

type ViewportProps = ComponentPropsWithoutRef<typeof Select.Viewport>;

export const Viewport = ({ children, className, ...props }: ViewportProps) => {
  return (
    <Select.Viewport className={clsx(styles.viewport, className)} {...props}>
      {children}
    </Select.Viewport>
  );
};

type ItemProps = ComponentPropsWithoutRef<typeof Select.Item> & {
  selected?: boolean;
};

export const Item = ({
  children,
  className,
  selected,
  ...props
}: ItemProps) => {
  return (
    <Select.Item
      className={clsx(styles.item, className, selected && styles.selected)}
      {...props}
    >
      <Select.ItemText className={styles["item-text"]}>
        {children}
      </Select.ItemText>
    </Select.Item>
  );
};
