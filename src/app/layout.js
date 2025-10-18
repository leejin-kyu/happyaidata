import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://happyaidata.vercel.app'),
  title: {
    default: 'HappyAI - AI 빅데이터 분석 전문 기업 | ChatGPT·BERT·RAG 기반 솔루션',
    template: '%s | HappyAI'
  },
  description: 'AI 기반 빅데이터 분석과 AI LLM 솔루션 전문 기업. ChatGPT, BERT, RAG 최신 AI 기술로 300+ 프로젝트 수행. TEXNOVA 빅데이터 분석, DOCUNOVA AI 챗봇 솔루션 제공.',
  keywords: [
    'AI 빅데이터 분석',
    'AI LLM',
    'ChatGPT',
    'BERT',
    'RAG',
    '텍스트마이닝',
    '자연어처리',
    'AI 솔루션',
    'TEXNOVA',
    'DOCUNOVA',
    'AI 챗봇',
    '맞춤형 AI',
    '빅데이터 컨설팅',
    '데이터 분석',
    'NLP'
  ],
  authors: [{ name: 'HappyAI' }],
  creator: 'HappyAI',
  publisher: 'HappyAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://happyaidata.vercel.app',
    siteName: 'HappyAI',
    title: 'HappyAI - AI 빅데이터 분석 전문 기업',
    description: 'ChatGPT, BERT, RAG 기반 AI 솔루션. 300+ 프로젝트 성공 경험의 AI 전문 기업.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HappyAI - AI 빅데이터 분석 전문 기업',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HappyAI - AI 빅데이터 분석 전문 기업',
    description: 'ChatGPT, BERT, RAG 기반 AI 솔루션 전문 기업',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code', // Google Search Console에서 받을 코드
    // naver: 'your-naver-verification-code', // 네이버 서치어드바이저에서 받을 코드
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://happyaidata.vercel.app/#organization',
        name: 'HappyAI',
        url: 'https://happyaidata.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://happyaidata.vercel.app/logo.png'
        },
        description: 'AI 기반 빅데이터 분석과 AI LLM 솔루션 전문 기업. ChatGPT, BERT, RAG 최신 AI 기술로 300+ 프로젝트 수행',
        founder: {
          '@type': 'Person',
          name: '이진규',
          jobTitle: '대표'
        },
        foundingDate: '2023',
        sameAs: [
          'https://github.com/leejin-kyu/happyaidata'
        ],
        knowsAbout: [
          'AI 빅데이터 분석',
          'ChatGPT',
          'BERT',
          'RAG',
          '텍스트마이닝',
          '자연어처리',
          'AI LLM'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://happyaidata.vercel.app/#website',
        url: 'https://happyaidata.vercel.app',
        name: 'HappyAI - AI 빅데이터 분석 전문 기업',
        publisher: {
          '@id': 'https://happyaidata.vercel.app/#organization'
        },
        inLanguage: 'ko-KR'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://happyaidata.vercel.app/#webpage',
        url: 'https://happyaidata.vercel.app',
        name: 'HappyAI - AI 빅데이터 분석 전문 기업',
        isPartOf: {
          '@id': 'https://happyaidata.vercel.app/#website'
        },
        about: {
          '@id': 'https://happyaidata.vercel.app/#organization'
        },
        description: 'AI 기반 빅데이터 분석과 AI LLM 솔루션 전문 기업. ChatGPT, BERT, RAG 최신 AI 기술로 300+ 프로젝트 수행. TEXNOVA 빅데이터 분석, DOCUNOVA AI 챗봇 솔루션 제공.',
        inLanguage: 'ko-KR'
      }
    ]
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
