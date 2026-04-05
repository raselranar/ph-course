"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Something went wrong!</h2>
      <p style={styles.message}>
        {error?.message || "An unexpected error occurred."}
      </p>
      <div style={styles.buttonGroup}>
        <button onClick={() => reset()} style={styles.buttonPrimary}>
          Try again
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          style={styles.buttonSecondary}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    fontFamily: "system-ui, sans-serif",
  },
  heading: { fontSize: "2rem", marginBottom: "1rem" },
  message: { color: "#666", marginBottom: "2rem" },
  buttonGroup: { display: "flex", gap: "1rem" },
  buttonPrimary: {
    padding: "0.8rem 1.5rem",
    cursor: "pointer",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  buttonSecondary: {
    padding: "0.8rem 1.5rem",
    cursor: "pointer",
    backgroundColor: "#eaeaea",
    border: "none",
    borderRadius: "5px",
  },
};
