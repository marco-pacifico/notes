import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Notes To Self",
  description: "A simple blog to keep track of my thoughts and ideas.",
};

const DMSans = localFont({
  src: [
    { path: "./fonts/DMSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/DMSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/DMSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-sans"
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
