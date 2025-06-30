import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "宮古島キャンドル体験・販売 | ゆめかわいキャンドル作り",
  description: "宮古島で特別なキャンドル作り体験をしませんか。ゆめかわいデザインのアロマキャンドルでインスタ映え間違いなし！雨の日や台風の日でも楽しめる室内アクティビティです。",
  keywords: "宮古島,キャンドル体験,アロマキャンドル,ゆめかわ,インスタ映え,室内アクティビティ,デート,沖縄観光",
  openGraph: {
    title: "宮古島キャンドル体験・販売",
    description: "宮古島で特別なキャンドル作り体験をしませんか",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${mPlusRounded.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
