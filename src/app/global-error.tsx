"use client";

import NextError from "next/error.js";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: { digest?: string } & Error;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-US">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
