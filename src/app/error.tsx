"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    
    // Check if the error is a ChunkLoadError
    if (error.name === "ChunkLoadError" || error.message.includes("Loading chunk") || error.message.includes("fetch")) {
      // Force a hard reload to get the new chunks from the server
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy text-white">
      <div className="text-center p-8 border border-white/10 rounded-lg bg-white/5 max-w-md">
        <h2 className="text-2xl font-bold mb-4 font-heading">Something went wrong!</h2>
        <p className="mb-6 opacity-80 font-sans">
          We encountered an error loading this page. This might be due to a recent update or a network issue.
        </p>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => {
              if (error.name === "ChunkLoadError" || error.message.includes("Loading chunk")) {
                window.location.reload();
              } else {
                reset();
              }
            }
          }
          className="px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded hover:bg-white transition-colors font-sans"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
