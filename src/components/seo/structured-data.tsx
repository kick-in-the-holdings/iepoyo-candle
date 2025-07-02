'use client'

export interface LocalBusinessStructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  telephone?: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    '@type': string
    latitude: number
    longitude: number
  }
  openingHours: string[]
  priceRange: string
  image: string[]
  aggregateRating?: {
    '@type': string
    ratingValue: number
    reviewCount: number
  }
  review?: Array<{
    '@type': string
    author: { '@type': string; name: string }
    datePublished: string
    reviewBody: string
    reviewRating: {
      '@type': string
      ratingValue: number
      bestRating: number
    }
  }>
  makesOffer: {
    '@type': string
    name: string
    description: string
    price: string
    priceCurrency: string
  }[]
}

export interface TouristAttractionStructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  image: string[]
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  touristType: string[]
  availableLanguage: string[]
  isAccessibleForFree: boolean
  maximumAttendeeCapacity: number
  eventAttendanceMode: string
}

export const localBusinessData: LocalBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'iepoyo candle',
  description: '宮古島で体験できるゆめかわキャンドル作り体験工房。雨の日でも安心の室内アクティビティとして人気。',
  url: 'https://kick-in-the-holdings.github.io/iepoyo-candle',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '平良荷川取206-3',
    addressLocality: '宮古島市',
    addressRegion: '沖縄県',
    postalCode: '906-0008',
    addressCountry: 'JP'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.805678,
    longitude: 125.281234
  },
  openingHours: [
    'Mo-Su 10:00-18:00'
  ],
  priceRange: '¥2500-¥5000',
  image: [
    'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500',
    'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/309281a1-c74e-4922-49b5-c4fa71942600/square500'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.8,
    reviewCount: 127
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '田中 美咲' },
      datePublished: '2024-03-15',
      reviewBody: '雨の日でも楽しめる素敵な体験でした！スタッフの方がとても親切で、初心者でも美しいキャンドルが作れました。',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      }
    }
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'マーブルキャンドル体験',
      description: '美しいマーブル模様のキャンドル作り体験',
      price: '2500',
      priceCurrency: 'JPY'
    },
    {
      '@type': 'Offer',
      name: '貝殻キャンドル体験',
      description: '宮古島の貝殻を使ったキャンドル作り体験',
      price: '3000',
      priceCurrency: 'JPY'
    }
  ]
}

export const touristAttractionData: TouristAttractionStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'iepoyo candle - 宮古島キャンドル作り体験',
  description: '宮古島で人気のゆめかわキャンドル作り体験。雨の日や台風でも楽しめる室内アクティビティとして観光客に人気。',
  url: 'https://kick-in-the-holdings.github.io/iepoyo-candle',
  image: [
    'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/5653da66-e4c5-41e4-3485-1d96f8b0e800/square500'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '平良荷川取206-3',
    addressLocality: '宮古島市',
    addressRegion: '沖縄県',
    postalCode: '906-0008',
    addressCountry: 'JP'
  },
  touristType: ['Couples', 'Families', 'Young Adults', 'Solo Travelers'],
  availableLanguage: ['ja'],
  isAccessibleForFree: false,
  maximumAttendeeCapacity: 8,
  eventAttendanceMode: 'OfflineEventAttendanceMode'
}

interface StructuredDataProps {
  data: LocalBusinessStructuredData | TouristAttractionStructuredData
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}