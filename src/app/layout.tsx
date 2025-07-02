import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import { getAssetUrl } from '@/lib/paths';
import { StructuredData, localBusinessData, touristAttractionData } from '@/components/seo/structured-data';
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
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://kick-in-the-holdings.github.io/iepoyo-candle' : 'http://localhost:3000'),
  title: "iepoyo candle | 宮古島のゆめかわキャンドル作り体験 - 雨の日OK・カップルに人気",
  description: "宮古島で話題のキャンドル作り体験！ゆめかわいデザインでインスタ映え抜群。雨の日・台風でも安心の室内アクティビティ。6歳以上参加OK、初心者歓迎。じゃらん予約可能。手ぶらで90分の特別体験を。",
  keywords: "宮古島キャンドル体験,ゆめかわキャンドル,雨の日アクティビティ,宮古島観光,室内体験,カップルデート,インスタ映え,ハンドメイド,アロマキャンドル,沖縄旅行,宮古島雨天,iepoyo candle,キャンドル教室,体験工房",
  authors: [{ name: "iepoyo candle" }],
  creator: "iepoyo candle",
  publisher: "iepoyo candle",
  category: "旅行・観光・体験",
  classification: "体験・アクティビティ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://kick-in-the-holdings.github.io/iepoyo-candle' : 'http://localhost:3000',
  },
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
    title: "iepoyo candle | 宮古島のゆめかわキャンドル作り体験 - 雨の日OK・カップルに人気",
    description: "宮古島で話題のキャンドル作り体験！ゆめかわいデザインでインスタ映え抜群。雨の日・台風でも安心の室内アクティビティ。",
    type: "website",
    locale: "ja_JP",
    url: process.env.NODE_ENV === 'production' ? 'https://kick-in-the-holdings.github.io/iepoyo-candle' : 'http://localhost:3000',
    siteName: "iepoyo candle",
    images: [
      {
        url: "https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500",
        width: 500,
        height: 500,
        alt: "iepoyo candle - 宮古島ゆめかわキャンドル作り体験",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iepoyocandle",
    creator: "@iepoyocandle",
    title: "iepoyo candle | 宮古島のゆめかわキャンドル作り体験",
    description: "宮古島で話題のキャンドル作り体験！ゆめかわいデザインでインスタ映え抜群。雨の日・台風でも安心の室内アクティビティ。",
    images: ["https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData data={localBusinessData} />
        <StructuredData data={touristAttractionData} />
      </head>
      <body
        className={`${mPlusRounded.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
