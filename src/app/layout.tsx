import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "কল্লোল গগৈ",
  icons: {
    icon: "/images/kallul-rounded.png",
    apple: "/images/kallul-rounded.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {/* Vercel Insights Components */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
