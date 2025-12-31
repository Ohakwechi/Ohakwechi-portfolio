import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './providers';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "OHAKWECHI | Software Engineer",
  description: "Full-stack developer specializing in Next.js, EdTech dashboards, and secure workflows.",
  openGraph: {
    title: "OHAKWECHI | Software Engineer",
    description: "Building Bloom, Dreambox Academy, and scalable design systems.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "OHAKWECHI Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.vercel.app/og-image.png", // Point to a screenshot of your site
        width: 1200,
        height: 630,
        alt: "OHAKWECHI - Software Engineering Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHAKWECHI | Software Engineer",
    description: "Building Bloom, Dreambox Academy, and scalable design systems.",
    images: ["https://your-portfolio-url.vercel.app/og-image.png"], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
