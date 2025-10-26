"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/data/translations";

export default function News() {
  const { language } = useLanguage();
  const content = getContent(language);
  const { news } = content;

  const newsItems = [
    {
      id: 1,
      category: "저서",
      title: "『챗GPT와 함께하는 주식 데이터 분석』 출간",
      date: "2025-09-05",
      publisher: "영진닷컴",
      description: "복잡한 코딩 없이도 챗GPT 프롬프트 엔지니어링만으로 주식 데이터를 수집하고 분석하는 방법을 다룬 실전 가이드북. 프롬프트 설계부터 데이터 수집·시각화, 백테스팅, AI 예측까지 전 과정을 체계적으로 설명합니다.",
      link: "https://product.kyobobook.co.kr/detail/S000217243589",
      image: "book"
    },
    {
      id: 2,
      category: "솔루션",
      title: "Private 문서 검색 전용 LLM '도큐노바(DocuNOVA)' 출시",
      date: "2025-08-22",
      description: "내부망 전용 RAG 시스템으로 기업 문서를 안전하게 검색하고 분석할 수 있는 Private LLM 솔루션. 벡터DB 기반 실시간 문서 업데이트와 고정밀 검색을 지원합니다.",
      image: "product"
    },
    {
      id: 3,
      category: "산학협력",
      title: "동국대학교 Knowledge Science 연구센터와 산학교차 인턴십 진행",
      date: "2025-08-06",
      description: "동국대학교 컴퓨터·AI학부 Knowledge Science 연구센터와 함께 산학교차 인턴십 프로그램에 참여. 대학과 기업 간 AI·빅데이터 기술 협력의 첫 교류를 시작했습니다.",
      image: "partnership"
    },
    {
      id: 4,
      category: "기술",
      title: "실시간 벡터DB 업데이트로 완성하는 LLM RAG 시스템",
      date: "2025-08-06",
      description: "실무형 RAG 시스템 구축 노하우 공개. 벡터 데이터베이스의 실시간 업데이트 전략과 LLM RAG 파이프라인 최적화 방법을 소개합니다.",
      image: "tech"
    },
    {
      id: 5,
      category: "교육",
      title: "맞춤형 LLM 제작을 위한 LoRA 파인튜닝 실습 강의 오픈",
      date: "2025-08-04",
      description: "기업 데이터로 LLM을 파인튜닝하여 맞춤형 AI 모델을 만드는 실전 교육 프로그램. LoRA 기법을 활용한 효율적인 파인튜닝 방법을 실습 중심으로 학습합니다.",
      image: "education"
    }
  ];

  const categories = ["전체", "저서", "솔루션", "산학협력", "기술", "교육", "언론보도"];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-white dark:bg-gray-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                News & Updates
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {news.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {news.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === "전체"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 소식 목록 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700 group"
              >
                <div className="md:flex">
                  {/* 이미지 영역 */}
                  <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-400 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-600 transition-colors flex items-center justify-center">
                    {item.image === "book" && (
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {item.image === "product" && (
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )}
                    {item.image === "partnership" && (
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {item.image === "tech" && (
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {item.image === "education" && (
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    )}
                  </div>

                  {/* 컨텐츠 영역 */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </span>
                      {item.publisher && (
                        <>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item.publisher}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline"
                      >
                        자세히 보기
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            최신 소식을 받아보세요
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            해피AI의 새로운 소식과 기술 인사이트를 이메일로 받아보세요
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-4 py-3 border-0 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-xl"
            >
              구독하기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
