export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "ChatGPT와 BERT로 구현하는 빅데이터 분석",
      date: "2025-10-01",
      category: "트렌드",
      excerpt: "ChatGPT와 BERT를 활용한 AI 기반 빅데이터 분석의 최신 트렌드와 실무 적용 방법을 살펴봅니다.",
      readTime: "5분"
    },
    {
      id: 2,
      title: "RAG 시스템 구축 완벽 가이드 - ChatGPT와 Claude 활용",
      date: "2025-09-28",
      category: "기술",
      excerpt: "ChatGPT와 Claude를 활용한 RAG(Retrieval-Augmented Generation) 시스템 구축 방법과 실제 적용 사례를 소개합니다.",
      readTime: "8분"
    },
    {
      id: 3,
      title: "기업 맞춤형 AI LLM 파인튜닝 전략",
      date: "2025-09-25",
      category: "기술",
      excerpt: "ChatGPT, GPT-4 등 공개 AI LLM을 기업 데이터로 파인튜닝하여 맞춤형 AI 모델을 만드는 효과적인 방법을 알아봅니다.",
      readTime: "7분"
    },
    {
      id: 4,
      title: "제조업의 AI 기반 품질 관리 혁명",
      date: "2025-09-20",
      category: "사례",
      excerpt: "제조 현장에서 ChatGPT 기반 AI와 빅데이터 분석을 활용하여 품질 관리를 자동화한 성공 사례를 분석합니다.",
      readTime: "6분"
    },
    {
      id: 5,
      title: "AI 기반 빅데이터 파이프라인 설계 베스트 프랙티스",
      date: "2025-09-15",
      category: "기술",
      excerpt: "AI 기반으로 대규모 데이터를 효율적으로 수집, 처리, 저장하는 빅데이터 파이프라인 설계 방법을 공유합니다.",
      readTime: "10분"
    },
    {
      id: 6,
      title: "금융권 AI 도입 시 고려사항",
      date: "2025-09-10",
      category: "인사이트",
      excerpt: "금융 산업에서 AI를 도입할 때 반드시 고려해야 할 보안, 규제, 윤리 이슈를 다룹니다.",
      readTime: "9분"
    }
  ];

  const categories = ["전체", "트렌드", "기술", "사례", "인사이트"];

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
                Tech Blog
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              기술 블로그
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ChatGPT, BERT, RAG 등 AI 기술과 빅데이터 분석에 대한 최신 트렌드, 기술 인사이트, 실전 노하우를 공유합니다
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

      {/* 블로그 포스트 목록 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-600 transition-colors flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:underline flex items-center">
                      읽기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <button className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold px-8 py-3 rounded-lg transition-colors">
              더 많은 글 보기
            </button>
          </div>
        </div>
      </section>

      {/* 뉴스레터 구독 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            최신 소식을 받아보세요
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            AI와 빅데이터에 대한 인사이트를 이메일로 받아보세요
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

      {/* 인기 태그 */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">인기 주제</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">자주 다루는 AI 및 빅데이터 기술 주제</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["ChatGPT", "BERT", "RAG", "AI LLM", "빅데이터분석", "텍스트마이닝", "자연어처리", "데이터파이프라인", "AI챗봇", "머신러닝"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 cursor-pointer transition-all shadow-sm hover:shadow-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
