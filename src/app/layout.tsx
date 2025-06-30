import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import { getAssetUrl } from '@/lib/paths';
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
  title: "IEPOYO CANDLE | 宮古島ゆめかわキャンドル体験・販売",
  description: "宮古島のIEPOYO CANDLEで特別なキャンドル作り体験をしませんか。ゆめかわいデザインのアロマキャンドルでインスタ映え間違いなし！雨の日や台風の日でも楽しめる室内アクティビティです。",
  keywords: "宮古島,キャンドル体験,アロマキャンドル,ゆめかわ,インスタ映え,室内アクティビティ,デート,沖縄観光",
  icons: {
    icon: [
      { url: getAssetUrl("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: getAssetUrl("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: getAssetUrl("/favicon-96x96.png"), sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: getAssetUrl("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: getAssetUrl("/manifest.json"),
  openGraph: {
    title: "IEPOYO CANDLE | 宮古島ゆめかわキャンドル体験・販売",
    description: "宮古島のIEPOYO CANDLEで特別なキャンドル作り体験をしませんか",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: getAssetUrl("/images/logo-lg.png"),
        width: 300,
        height: 300,
        alt: "IEPOYO CANDLE ロゴ",
      },
    ],
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
