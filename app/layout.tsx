import type { Metadata } from "next";
import { Montserrat, Instrument_Serif } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const insSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "rewrite - Supercharged note-taking for the superusers",
  description: "Our note-taking app is here to rescue you! With our user-friendly interface and powerful features, you can take notes effortlessly and manage them effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${insSerif.className} antialiased font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
