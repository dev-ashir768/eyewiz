import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { gotu, playfair } from "./fonts/fonts";
import "./globals.css";
import Navbar from "@/components/ui/site/global/Navbar";


export const metadata: Metadata = {
  title: {
    default: "HOME | EYE WIZ",
    template: "%s"
  },
  description: "The optical wizards",
  metadataBase: new URL("https://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gotu.className} ${playfair.variable} antialiased`}
      >
        <NextTopLoader easing="ease" color="#DBB42C" showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
