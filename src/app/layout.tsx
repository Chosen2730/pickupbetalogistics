import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pickup Beta Logistics — Fast & Reliable Package Delivery",
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
  description:
    "Pickup Beta Logistics picks up your packages and delivers them to any location quickly and reliably. Schedule a pickup today.",
  keywords: [
    "logistics",
    "package delivery",
    "pickup service",
    "courier",
    "delivery service",
    "Pickup Beta Logistics",
  ],
  openGraph: {
    title: "Pickup Beta Logistics — Fast & Reliable Package Delivery",
    description:
      "We pick up your packages and deliver them safely to any destination. Affordable, fast, and dependable.",
    url: "https://www.pickupbetalogistics.com",
    siteName: "Pickup Beta Logistics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickup Beta Logistics — Fast & Reliable Package Delivery",
    description:
      "We pick up your packages and deliver them safely to any destination.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
