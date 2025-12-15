import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: "NextZen AI Strategix - IT Consulting & Digital Transformation",
    template: "%s | NextZen AI Strategix",
  },
  description: "Leading IT consulting firm specializing in AI strategy, cloud solutions, digital transformation, and enterprise software development.",
  keywords: ["IT consulting", "AI strategy", "digital transformation", "cloud solutions", "enterprise software"],
  authors: [{ name: "NextZen AI Strategix" }],
  creator: "NextZen AI Strategix",
  metadataBase: new URL('https://nextzen-ai-strategix.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextzen-ai-strategix.com',
    title: 'NextZen AI Strategix - IT Consulting & Digital Transformation',
    description: 'Leading IT consulting firm specializing in AI strategy, cloud solutions, digital transformation, and enterprise software development.',
    siteName: 'NextZen AI Strategix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextZen AI Strategix - IT Consulting & Digital Transformation',
    description: 'Leading IT consulting firm specializing in AI strategy, cloud solutions, digital transformation, and enterprise software development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
