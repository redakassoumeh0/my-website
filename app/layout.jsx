import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reda Kassoumeh | Software Engineer",
  description: "Explore my work and projects in full-stack web development.",
  openGraph: {
    title: "Reda Kassoumeh | Software Engineer",
    description: "Explore my work and projects in full-stack web development.",
    url: "https://redakassoumeh.vercel.app",
    siteName: "Reda Kassoumeh Portfolio",
    images: [
      {
        url: "/images/view-image.png",
        width: 1200,
        height: 630,
        alt: "Reda Kassoumeh Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda Kassoumeh | Software Engineer",
    description: "Explore my work and projects in full-stack web development.",
    images: ["/images/view-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            success: { duration: 3000 },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
