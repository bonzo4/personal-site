import type { Metadata } from "next";
import { Roboto, Merriweather, Outfit } from "next/font/google";
import "./globals.css";
import TopButton from "@/components/TopButton";
import Footer from "@/components/Footer";

const merriweather = Outfit({
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Alonzo Sabino",
  description:
    "Passionate software developer with expertise in building scalable Web3 platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} relative antialiased`}>
        <div>{children}</div>
        <div className="fixed bottom-24 right-10 z-10">
          <TopButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}
