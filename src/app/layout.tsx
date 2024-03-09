import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '100', '200', '300', '800', '900'],  
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Samuel Sasaki",
  description: "Samuel Sasaki's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
