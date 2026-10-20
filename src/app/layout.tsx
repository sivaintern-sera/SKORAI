import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "SKORAI | Higher Education Decision Intelligence Platform | Northbridge State University",
  description:
    "One Intelligent Platform. Every Institutional Decision. Unified university analytics, predictive intelligence, governance, cybersecurity, and executive decision support.",
  keywords: [
    "higher education intelligence",
    "university analytics",
    "institutional decision support",
    "student retention",
    "predictive enrollment",
    "academic outcomes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} h-full scroll-smooth bg-white antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans bg-white text-slate-900 selection:bg-purple-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

