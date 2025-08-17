"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Icon } from "@/components/icon";

type BackButtonProps = {
  className?: string;
};

export const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Link href="#" onClick={handleClick} className={className}>
      <Icon name="arrow-left" width={24} height={24} color="#fff" />
    </Link>
  );
};
