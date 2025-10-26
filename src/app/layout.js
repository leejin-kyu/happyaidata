import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.happyaidata.kr'),
  title: {
    default: 'HappyAI - AI 빅데이터 분석 전문 기업 | TEXNOVA·DOCUNOVA 솔루션',
    template: '%s | HappyAI'
  },
  description: '10년 경력의 AI 전문가가 제공하는 맞춤형 AI 솔루션. TEXNOVA 텍스트 빅데이터 분석, DOCUNOVA AI 챗봇으로 300+ 공공·대기업 프로젝트 수행. ChatGPT, BERT, RAG, Claude 기반 최신 AI 기술.',
  keywords: [
    'AI 빅데이터 분석',
    'TEXNOVA',
    'DOCUNOVA',
    'AI LLM 솔루션',
    'ChatGPT',
    'BERT',
    'RAG',
    'Claude',
    '텍스트마이닝',
    '자연어처리',
    'NLP',
    'AI 챗봇',
    '문서 기반 AI',
    '맞춤형 AI 솔루션',
    '빅데이터 분석 플랫폼',
    'AI 컨설팅',
    '공공기관 AI',
    '대기업 AI 구축',
    'AI Agent',
    'MCP',
    'A2A',
    'Multimodal RAG',
    '이진규'
  ],
  authors: [{ name: 'HappyAI', url: 'https://www.happyaidata.kr' }],
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
    url: 'https://www.happyaidata.kr',
    siteName: 'HappyAI',
    title: 'HappyAI - AI 빅데이터 분석 전문 기업',
    description: '10년 경력 AI 전문가의 맞춤형 솔루션. TEXNOVA 빅데이터 분석, DOCUNOVA AI 챗봇으로 300+ 프로젝트 성공.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HappyAI - TEXNOVA·DOCUNOVA AI 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HappyAI - AI 빅데이터 분석 전문 기업',
    description: 'ChatGPT, BERT, RAG, Claude 기반 맞춤형 AI 솔루션 전문 기업',
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
    google: '845stqUXS6n3PiKrXMmqmgq75rk7cb0UWSJE-s9lxHA',
  },
  alternates: {
    canonical: 'https://www.happyaidata.kr',
  },
  other: {
    'naver-site-verification': 'your-naver-verification-code',
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.happyaidata.kr/#organization',
        name: 'HappyAI',
        alternateName: '해피AI',
        url: 'https://www.happyaidata.kr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.happyaidata.kr/logo.png'
        },
        description: '10년 이상의 AI 연구 경험으로 고품질 맞춤형 AI 솔루션 제공. 300+ 프로젝트 수행',
        founder: {
          '@type': 'Person',
          name: '이진규',
          jobTitle: '대표'
        },
        foundingDate: '2023',
        email: 'leejinkyu0612@naver.com',
        telephone: '+82-2-1234-5678',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '봉은사로 129길 1003호',
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR'
        },
        sameAs: [
          'https://www.youtube.com/@HappyAI_0612',
          'https://blog.naver.com/happynlp0612',
          'https://github.com/leejin-kyu/happyaidata'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'South Korea'
        },
        knowsAbout: [
          'AI 빅데이터 분석',
          'ChatGPT',
          'BERT',
          'RAG',
          'Claude',
          '텍스트마이닝',
          '자연어처리',
          'AI LLM',
          'AI Agent',
          'MCP',
          'A2A',
          'Multimodal RAG'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.happyaidata.kr/#website',
        url: 'https://www.happyaidata.kr',
        name: 'HappyAI - AI 빅데이터 분석 전문 기업',
        publisher: {
          '@id': 'https://www.happyaidata.kr/#organization'
        },
        inLanguage: 'ko-KR'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.happyaidata.kr/#webpage',
        url: 'https://www.happyaidata.kr',
        name: 'HappyAI - AI 빅데이터 분석 전문 기업',
        isPartOf: {
          '@id': 'https://www.happyaidata.kr/#website'
        },
        about: {
          '@id': 'https://www.happyaidata.kr/#organization'
        },
        description: 'AI 기반 빅데이터 분석과 AI LLM 솔루션 전문 기업. ChatGPT, BERT, RAG 최신 AI 기술로 300+ 프로젝트 수행. TEXNOVA 빅데이터 분석, DOCUNOVA AI 챗봇 솔루션 제공.',
        inLanguage: 'ko-KR'
      },
      {
        '@type': 'Product',
        name: 'TEXNOVA',
        description: 'AI 기반 빅데이터 분석 플랫폼',
        brand: {
          '@id': 'https://www.happyaidata.kr/#organization'
        },
        category: 'AI Software'
      },
      {
        '@type': 'Product',
        name: 'DOCUNOVA',
        description: 'RAG 기술 기반 문서 지능형 대화 AI 시스템',
        brand: {
          '@id': 'https://www.happyaidata.kr/#organization'
        },
        category: 'AI Software'
      }
    ]
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
