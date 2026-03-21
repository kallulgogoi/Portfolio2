import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Doe — GitHub Portfolio",
  description: "A personal portfolio styled like GitHub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
