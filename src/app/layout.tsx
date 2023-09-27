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
  variable: "--font-dm-sans",
});

const Louize = localFont({
  src: [
    { path: "./fonts/Louize-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/Louize-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Louize-Regular.woff", weight: "400", style: "normal" },
  ],
  display: "swap",
  variable: "--font-louize",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${DMSans.variable} ${Louize.variable}`}>
      <body>
        <Header />
        <main className="p-40">{children}</main>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="p-6">
      <nav className="flex gap-4 justify-center">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <Link className="font-bold" href="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
}
