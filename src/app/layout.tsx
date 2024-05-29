import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UidProvider } from "@/contexts/id";
import { EmailAndNameProvider } from "@/contexts/emailAndName";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader color="#BEFFF7" speed={500} showSpinner={false} />
        <UidProvider>
          <EmailAndNameProvider>
            <main>{children}</main>
          </EmailAndNameProvider>
        </UidProvider>
      </body>
    </html>
  );
}
