import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${font.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
