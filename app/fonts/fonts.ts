import { Gotu, Playfair_Display, Roboto } from "next/font/google";

export const gotu = Gotu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gotu",
  weight: "400",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: "400",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
