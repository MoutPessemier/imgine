"use client";

import styles from "./page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className={styles["error-container"]}>
      <h2 className={styles.error}>Error loading tip: {error.message}</h2>
      <p className={styles["error-message"]}>Try again later</p>
      <button onClick={reset} className={styles["retry-button"]}>
        Try again
      </button>
    </main>
  );
}
