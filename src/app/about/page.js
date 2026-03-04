import Link from "next/link";

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
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-white dark:bg-gray-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>

        {/* AI 신경망 배경 패턴 */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-network-about" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                {/* 노드들 */}
                <circle cx="15" cy="15" r="2.5" fill="rgb(59, 130, 246)" opacity="0.7"/>
                <circle cx="75" cy="30" r="3" fill="rgb(99, 102, 241)" opacity="0.8"/>
                <circle cx="135" cy="20" r="2.5" fill="rgb(139, 92, 246)" opacity="0.7"/>
                <circle cx="45" cy="75" r="3" fill="rgb(59, 130, 246)" opacity="0.75"/>
                <circle cx="105" cy="90" r="2.5" fill="rgb(99, 102, 241)" opacity="0.7"/>
                <circle cx="30" cy="135" r="3" fill="rgb(139, 92, 246)" opacity="0.8"/>
                <circle cx="120" cy="130" r="2.5" fill="rgb(59, 130, 246)" opacity="0.7"/>

                {/* 연결선 */}
                <line x1="15" y1="15" x2="75" y2="30" stroke="rgb(59, 130, 246)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="75" y1="30" x2="135" y2="20" stroke="rgb(99, 102, 241)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="15" y1="15" x2="45" y2="75" stroke="rgb(139, 92, 246)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="75" y1="30" x2="105" y2="90" stroke="rgb(59, 130, 246)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="45" y1="75" x2="105" y2="90" stroke="rgb(99, 102, 241)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="45" y1="75" x2="30" y2="135" stroke="rgb(139, 92, 246)" strokeWidth="0.8" opacity="0.4"/>
                <line x1="105" y1="90" x2="120" y2="130" stroke="rgb(59, 130, 246)" strokeWidth="0.8" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-network-about)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                About HappyAI · AI Expert
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              회사소개
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              AI와 빅데이터 분석 전문 기업
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              10년 이상의 개발 및 연구 경험과 300+ 프로젝트 수행<br />
              ChatGPT·BERT·RAG 최신 AI 기술 활용
            </p>

            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/14rpWni82mGrV49qRG3hxKNgAgMhzmvVm/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-xl hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                기업소개서 다운로드
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">HappyAI</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              AI 전문 기업으로<br />
              <strong>AI 기반 빅데이터 분석</strong>과 <strong>AI LLM 솔루션</strong>을 제공합니다
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              ChatGPT, BERT, RAG 등 최신 AI 기술을 실무에 적용하여<br />
              고객의 업무 혁신을 이끌어냅니다
            </p>
          </div>

          {/* 주요 실적 통계 */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">300+</div>
              <p className="text-lg font-bold mb-1">프로젝트</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">정부기관·대기업</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <p className="text-lg font-bold mb-1">연구논문</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">SCI·KCI 등재</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
              <p className="text-lg font-bold mb-1">교육 강의</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">KT·삼성SDS</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">2</div>
              <p className="text-lg font-bold mb-1">핵심 솔루션</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">TEXNOVA·DOCUNOVA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 대표 소개 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">대표 소개</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">&ldquo;연구에서 끝나는 AI가 아닌, 조직에 적용되는 AI 전략을 제시합니다.&rdquo;</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-blue-100 dark:border-gray-700">
              {/* 헤더 영역 */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white/30">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-1">이진규 (Lee JinKyu)</h3>
                    <p className="text-lg text-blue-100 mb-3">AI&middot;LLM&middot;빅데이터 분석 전문가</p>
                    <p className="text-blue-200 text-sm">해피AI 대표 | 동국대학교 공학박사(인공지능) | 한성대학교 AI소프트웨어학과 겸임교수</p>
                    <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <div className="text-2xl font-bold">200+</div>
                        <div className="text-xs text-blue-200">프로젝트 수행</div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <div className="text-2xl font-bold">8+</div>
                        <div className="text-xs text-blue-200">국제저명 제1저자 논문</div>
                      </div>
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <div className="text-2xl font-bold">박사</div>
                        <div className="text-xs text-blue-200">인공지능 공학박사</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 본문 영역 */}
              <div className="p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* 주요 경력 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">주요 경력</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5 mr-3 flex-shrink-0 w-20">2026 ~ 현재</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">한성대학교 AI소프트웨어학과 겸임교수</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5 mr-3 flex-shrink-0 w-20">2023 ~ 현재</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">해피AI 대표 (생성형 AI&middot;빅데이터 전문기업)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5 mr-3 flex-shrink-0 w-20">2021 ~ 2023</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">스텔라비전 AI 연구원</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5 mr-3 flex-shrink-0 w-20">2018 ~ 2021</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">국립산림과학원 빅데이터 분석 연구원</span>
                      </li>
                    </ul>
                  </div>

                  {/* 핵심 전문 분야 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">핵심 전문 분야</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">생성형 AI&middot;LLM 실무 전략</span>
                      <span className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">Private LLM&middot;RAG&middot;Agent 구축</span>
                      <span className="bg-gradient-to-br from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">LLM 파인튜닝(LoRA&middot;RLHF)</span>
                      <span className="bg-gradient-to-br from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">텍스트마이닝&middot;NLP 분석</span>
                      <span className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">AI 업무자동화 시스템</span>
                    </div>
                  </div>
                </div>

                {/* 주요 기업 강의 실적 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">주요 강의&middot;교육</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">삼성SDS</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">LangChain&middot;RAG 기반 LLM 프로그래밍 (2024)</p>
                    </div>
                    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">KT</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">LLM/sLLM 애플리케이션 개발 교육 (2025)</p>
                    </div>
                    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">서울디지털재단</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">LLM 이론 및 RAG 챗봇 개발 실무 (2024)</p>
                    </div>
                    <div className="border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">한성대학교</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">데이터마이닝&middot;머신러닝&middot;딥러닝 정규 강의 (2026~)</p>
                    </div>
                  </div>
                </div>

                {/* 주요 연구 실적 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">주요 연구 실적</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded mt-0.5 mr-3 flex-shrink-0">국제저명</span>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Measuring and Mitigating Implicit Bias in LLMs</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Connection Science, 2026 | 제1저자</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded mt-0.5 mr-3 flex-shrink-0">국제저명</span>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Improving Commonsense Bias Classification</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">IEEE Access, 2024 | 제1저자</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded mt-0.5 mr-3 flex-shrink-0">국제저명</span>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Improving Generation of Sentiment Commonsense by Bias Mitigation</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">IEEE BigComp, 2023 | 제1저자</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 신뢰 기관 + 상세이력 링크 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Trusted by Leading Organizations</p>
                  <div className="flex flex-wrap gap-3 justify-center mb-6">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">삼성SDS</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">KT</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">한국전력공사</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">서울디지털재단</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">중앙행정기관</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-xs font-semibold">국립산림과학원</span>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://bit.ly/jinkyu-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      대표 상세이력 보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 솔루션 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              핵심 솔루션
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              두 가지 핵심 AI 플랫폼을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">TEXNOVA</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                ChatGPT·BERT 기반 빅데이터 분석 플랫폼
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">AI 텍스트마이닝 분석</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">맞춤형 플랫폼 개발</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">빅데이터 연구 컨설팅</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">DOCUNOVA</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                내부망 전용 Private LLM 문서 검색·분석 솔루션
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">벡터DB 기반 실시간 문서 검색</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">LLM RAG 기반 질의응답</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">기업 보안 환경 맞춤 Private RAG</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 고객사 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              주요 고객사
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              다양한 기관에서 신뢰하는 AI 파트너
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">정부·공공기관</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                법무부, 한국교육과정평가원,<br />고려대 민족문화연구원 등
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">대기업</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                삼성전자, 한국전력기술,<br />KT, 삼성SDS 등
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">연구기관</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                국립산림과학원,<br />한국보건의료연구원 등
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 협력 기관 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              협력 기관
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              HappyAI와 함께하는 파트너
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/한국교육과정평가원.png"
                alt="한국교육과정평가원"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/소프트웨어정책연구소.png"
                alt="소프트웨어정책연구소"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/한국전력공사.jpg"
                alt="한국전력공사"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/한국전력기술.jpg"
                alt="한국전력기술"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/서울대학교.png"
                alt="서울대학교"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/고려대학교민족문화연구원.jpg"
                alt="고려대학교 민족문화연구원"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/국립산림과학원.jpg"
                alt="국립산림과학원"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/한국보건의료연구원.png"
                alt="한국보건의료연구원"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/과학기술정책연구소.png"
                alt="과학기술정책연구소"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/한국데이터산업진흥원.png"
                alt="한국데이터산업진흥원"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/서울AI재단.jpg"
                alt="서울AI재단"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/경기도교육청.jpg"
                alt="경기도교육청"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/강릉시청소년상담복지센터.png"
                alt="강릉시청소년상담복지센터"
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src="/partners/티에스케이.jpg"
                alt="티에스케이"
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 비전 및 핵심 가치 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              HappyAI가 추구하는 가치
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">전문성</h3>
              <p className="text-gray-600 dark:text-gray-400">
                10년 이상의 AI 연구 경험과<br />300+ 프로젝트 수행 노하우
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">맞춤형 솔루션</h3>
              <p className="text-gray-600 dark:text-gray-400">
                고객의 니즈에 맞는<br />최적화된 AI 솔루션 제공
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">혁신</h3>
              <p className="text-gray-600 dark:text-gray-400">
                ChatGPT·BERT·RAG 등<br />최신 AI 기술을 실무에 적용
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 교육 & 산학협력 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              교육 & 산학협력
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              AI 기술 교육과 산학 협력을 통해 함께 성장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI 전문 교육</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                기업 맞춤형 AI 교육 프로그램을 제공합니다
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">LLM 파인튜닝(LoRA) 실습 교육</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">빅데이터 분석 & 텍스트마이닝 강의</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">RAG 시스템 구축 실무 교육</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">산학 협력</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                대학과 기업 간 AI·빅데이터 기술 교류를 추진합니다
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">동국대학교 Knowledge Science 연구센터 협력</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">산학교차 인턴십 프로그램 운영</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">AI·빅데이터 공동 연구 프로젝트</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            함께 성장할 파트너를 찾습니다
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            HappyAI와 함께 AI 기술로 업무 혁신을 시작하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-xl hover:shadow-xl"
          >
            문의하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
