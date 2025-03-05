import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Showcase",
  description:
    "A showcase of diverse skills built with a modern, cutting‐edge tech stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(263.4, 70%, 50.4%)",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} flex min-h-screen w-full flex-col font-sans`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex h-full w-full flex-1 flex-col">
              <NuqsAdapter>{children}</NuqsAdapter>
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
