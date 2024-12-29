import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codershubinc",
  description: "Created  by  swapnil ingle",
  icons: [
    {
      rel: "icon",
      url: "https://github.com/codershubinc/imageResources/blob/main/cust_icons/ico.png?raw=true",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1775178587078079"
        crossOrigin="anonymous"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
