import "@/styles/globals.css";
import "@/styles/fonts/satoshi.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import CursorTrail from "@/scripts/cursor";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize cursor trail client-side
    new CursorTrail();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div>
        <div className="cursor-trail" />
      </div>
      <Script
        defer
        data-domain="a11rew.dev"
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
