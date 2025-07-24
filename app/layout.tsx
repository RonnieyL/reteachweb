import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "reteach - Simplify your life with our powerful note-taking app",
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
        className={`${montserrat.variable} antialiased font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
