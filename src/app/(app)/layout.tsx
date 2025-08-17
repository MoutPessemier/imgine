import { type Metadata } from "next";
import { Lato } from "next/font/google";
import Link from "next/link";

import "../../styles/globals.css";

import { Icon } from "@/components/icon/icon";

export const metadata: Metadata = {
  title: "IMGine | Home",
  description: "The home page of IMGine",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
