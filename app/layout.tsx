import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SikhshaSathi – Find the Best School",
  description: "School recommendation system for Nepal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}