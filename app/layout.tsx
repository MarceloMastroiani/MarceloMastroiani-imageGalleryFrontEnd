import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMG Gallery",
  description: "A gallery of images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="presentation-container">{children}</body>
    </html>
  );
}
