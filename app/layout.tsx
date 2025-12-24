import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import { ThemeProvider } from "@/providers/ThemeProvider";
// import { Navbar } from "@/components/ui/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe Subscriptions",
  description: "Learn how to integrate Stripe subscriptions with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {/* <ThemeProvider */}
        {/* attribute="class" */}
        {/* defaultTheme="dark" */}
        {/* enableSystem */}
        {/* disableTransitionOnChange */}
        {/* storageKey="theme" */}
        {/* > */}
        {/* <Navbar /> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
