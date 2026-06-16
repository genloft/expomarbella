"use client";

import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkIsDesktop = () => {
      // 768px is the standard 'md' breakpoint in Tailwind
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Check initially
    checkIsDesktop();
    
    // Check on resize
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // Do not render anything during SSR (to prevent hydration mismatches)
  // or on mobile devices (to prevent bugs with youtube iframes and layout shifts)
  if (!isMounted || !isDesktop) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-navy">
      <iframe
        src="https://www.youtube.com/embed/cRQff_UnpNk?autoplay=1&mute=1&loop=1&playlist=cRQff_UnpNk&controls=0&showinfo=0&rel=0&playsinline=1&start=6"
        allow="autoplay; encrypted-media"
        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100svh] min-w-[177.77svh] -translate-x-1/2 -translate-y-1/2"
        title="ExpoMarbella Background Video"
      />
    </div>
  );
}
