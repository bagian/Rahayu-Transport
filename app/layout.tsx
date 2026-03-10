import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWA from "@/components/FloatingWa";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rahayutransport.web.id"),

  title: {
    default: "Rahayu Transport | Jasa Sewa Mobil Sidoarjo & Surabaya",
    template: "%s | Rahayu Transport",
  },
  description:
    "Rahayu Transport adalah solusi jasa sewa mobil dan kendaraan terpercaya dengan pilihan armada terlengkap, bersih, dan terawat. Kami hadir melayani perjalanan wisata, bisnis, hingga kebutuhan keluarga Anda di Bandung, Surabaya, Yogyakarta, dan Bali. Nikmati kenyamanan, keamanan, dan layanan profesional dengan harga kompetitif. Pesan sekarang untuk pengalaman perjalanan tanpa hambatan!",
  keywords: [
    "sewa mobil Bandung",
    "rental mobil Bandung",
    "jasa sewa kendaraan",
    "sewa mobil Surabaya",
    "rental mobil terdekat",
    "sewa mobil murah",
    "Rahayu Transport",
  ],
  authors: [{ name: "Rahayu Transport" }],
  creator: "Bagian Corps",
  publisher: "Rahayu Transport",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rahayu Transport | Jasa Sewa Mobil Terpercaya",
    description:
      "Rahayu Transport adalah solusi jasa sewa mobil dan kendaraan terpercaya dengan pilihan armada terlengkap, bersih, dan terawat. Kami hadir melayani perjalanan wisata, bisnis, hingga kebutuhan keluarga Anda di Bandung, Surabaya, Yogyakarta, dan Bali. Nikmati kenyamanan, keamanan, dan layanan profesional dengan harga kompetitif. Pesan sekarang untuk pengalaman perjalanan tanpa hambatan!",
    url: "/",
    siteName: "Rahayu Transport",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahayu Transport - Jasa Sewa Kendaraan di Bandung, Surabaya, Yogyakarta, dan Bali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahayu Transport | Sewa Mobil Sidoarjo",
    description:
      "Layanan jasa sewa mobil dan kendaraan terpercaya dengan harga terjangkau.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingWA />
        <Footer />
        <GoogleAnalytics gaId="G-C291GLB68B" />
      </body>
    </html>
  );
}
