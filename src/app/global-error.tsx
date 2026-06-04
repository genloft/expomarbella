"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // Check if the error is a ChunkLoadError
    if (error.name === "ChunkLoadError" || error.message.includes("Loading chunk") || error.message.includes("fetch")) {
      window.location.reload();
    }
  }, [error]);

  return (
    <html lang="es">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a192f', color: 'white', fontFamily: 'sans-serif' }}>
          <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', maxWidth: '28rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>¡Algo salió mal!</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Hemos encontrado un error al cargar esta página. Esto puede deberse a una actualización reciente.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: '0.75rem 1.5rem', backgroundColor: '#d4af37', color: '#0a192f', fontWeight: 'bold', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
            >
              Recargar Página
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
