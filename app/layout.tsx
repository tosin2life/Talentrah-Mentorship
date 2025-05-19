import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import { Gabarito } from "next/font/google";
import { Header } from "@/components/Header";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talentrah - Smart Apply",
  description: "Find and apply to jobs efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={gabarito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarLayout>
            {" "}
            <Header />
            {children}
          </SidebarLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
