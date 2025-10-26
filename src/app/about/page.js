import AboutContent from "./AboutContent";

export const metadata = {
  title: '회사소개 - AI 빅데이터 분석 전문 기업',
  description: '10년 이상의 AI 연구 경험과 300+ 프로젝트 수행. ChatGPT, BERT, RAG 최신 AI 기술 활용. TEXNOVA 빅데이터 분석, DOCUNOVA AI LLM 솔루션 제공. 정부기관, 대기업, 대학과 함께하는 AI 전문 기업.',
  keywords: ['AI 전문 기업', 'HappyAI', '이진규', 'AI 박사', '빅데이터 전문가', 'AI 연구원', 'TEXNOVA', 'DOCUNOVA', 'AI 솔루션'],
  openGraph: {
    title: 'HappyAI 회사소개 - AI 빅데이터 분석 전문 기업',
    description: '10년 이상의 AI 연구 경험과 300+ 프로젝트 수행 실적. ChatGPT, BERT, RAG 최신 AI 기술 전문 기업',
    type: 'website'
  }
};

export default function About() {
  return <AboutContent />;
}
