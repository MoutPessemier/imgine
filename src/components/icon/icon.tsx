import { type ComponentPropsWithoutRef } from "react";

import { type IconName } from "@/types/icons";

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  name: IconName;
  size?: number;
};

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  return (
    <svg className={className} width={size} height={size} {...props}>
      <use href={`/icons/spritesheet.svg#${name}`} />
    </svg>
  );
};
