import "@/app/globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { validateRequest } from "@/lib/lucia";
import { cn } from "@/lib/utils";
import { SessionProvider } from "@/providers/session-provider";
import { Inter as FontSans } from "next/font/google";
import { redirect } from "next/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await validateRequest();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans", fontSans.variable)}>
        <SessionProvider value={sessionData}>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
