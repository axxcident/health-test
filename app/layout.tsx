import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health-test-app",
  description: "Health-test-app for teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
              </li>
            <li>
              <Link href="/blog/345">blog/345</Link>
            </li>
            <li>
              <Link href="/checkin-page">checkin-page</Link>
            </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
