import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={fontSans.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
