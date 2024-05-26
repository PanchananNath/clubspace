import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UidProvider } from "@/contexts/id";
import { EmailAndNameProvider } from "@/contexts/emailAndName";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClubSpace",
  description: "| Club Networking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UidProvider>
          <EmailAndNameProvider>
            <main>{children}</main>
          </EmailAndNameProvider>
        </UidProvider>
      </body>
    </html>
  );
}
