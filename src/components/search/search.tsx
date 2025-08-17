import { clsx } from "clsx";
import { type ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/icon";

import styles from "./search.module.css";

type SearchType = ComponentPropsWithoutRef<"input">;

export const Search = ({ className, name, ...props }: SearchType) => {
  return (
    <div className={styles.search}>
      <span className={styles.prefix}>
        <Icon name="search" color="#fff" width={20} height={20} />
      </span>
      <input
        className={clsx(styles.input, className)}
        name={name}
        placeholder="Search topics"
        {...props}
      />
    </div>
  );
};
