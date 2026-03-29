import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tickete Digital Solutions",
  description:
    "Premium digital solutions startup helping businesses scale with web, AI automation, and growth systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
