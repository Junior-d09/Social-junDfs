import type { Metadata } from "next";
import { Hubot_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers/ProvidersThemes";
import UINavbar from "../components/navbar/UINavbar";
import NavbarWrapper from "../components/NavbarWrapper";

export const hubotSans = Hubot_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});
export const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Made Smarter",
  description:
    "Express yourself, discover new horizons, and be part of a vibrant community that’s changing the way we connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hubotSans.className} antialiased`}>
        <Providers>
          <NavbarWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}
