import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import { ClerkProvider} from '@clerk/nextjs';
import { ThemeProvider } from "../app/(routes)/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const noto =  Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Curso 2025 nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
        <html lang="en">
            <body className={noto.className}>
                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
        </ClerkProvider>
    );
}
