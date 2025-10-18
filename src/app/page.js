import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Home() {
  const { home } = siteContent;

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-40 md:py-48 overflow-hidden">
        {/* AI 신경망 배경 패턴 */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* 노드들 */}
                <circle cx="20" cy="20" r="3" fill="rgb(59, 130, 246)" opacity="0.6"/>
                <circle cx="100" cy="40" r="4" fill="rgb(99, 102, 241)" opacity="0.7"/>
                <circle cx="180" cy="30" r="3" fill="rgb(139, 92, 246)" opacity="0.6"/>
                <circle cx="60" cy="100" r="3.5" fill="rgb(59, 130, 246)" opacity="0.65"/>
                <circle cx="140" cy="120" r="3" fill="rgb(99, 102, 241)" opacity="0.6"/>
                <circle cx="40" cy="180" r="4" fill="rgb(139, 92, 246)" opacity="0.7"/>
                <circle cx="160" cy="170" r="3" fill="rgb(59, 130, 246)" opacity="0.6"/>

                {/* 연결선 */}
                <line x1="20" y1="20" x2="100" y2="40" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="100" y1="40" x2="180" y2="30" stroke="rgb(99, 102, 241)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="20" y1="20" x2="60" y2="100" stroke="rgb(139, 92, 246)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="100" y1="40" x2="140" y2="120" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="60" y1="100" x2="140" y2="120" stroke="rgb(99, 102, 241)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="60" y1="100" x2="40" y2="180" stroke="rgb(139, 92, 246)" strokeWidth="0.5" opacity="0.3"/>
                <line x1="140" y1="120" x2="160" y2="170" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-network)"/>
          </svg>
        </div>

        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02] dark:from-blue-400/[0.03] dark:to-indigo-400/[0.03]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-10">
                <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  {home.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                {home.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 leading-snug">
                {home.hero.subtitle}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
                {home.hero.description}
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500 mb-16">
                {home.hero.techStack}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={home.hero.buttons.bigdata.href}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-md shadow-lg hover:shadow-xl"
                >
                  {home.hero.buttons.bigdata.text}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href={home.hero.buttons.aillm.href}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all rounded-md shadow-md hover:shadow-lg"
                >
                  {home.hero.buttons.aillm.text}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 오른쪽 통계/시각 요소 */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {home.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={
                      index % 3 === 0
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-2xl shadow-xl"
                        : "bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl"
                    }
                  >
                    <div
                      className={
                        index % 3 === 0
                          ? "text-6xl font-bold text-white mb-3"
                          : "text-6xl font-bold text-blue-600 dark:text-blue-400 mb-3"
                      }
                    >
                      {stat.number}
                    </div>
                    <div
                      className={
                        index % 3 === 0
                          ? "text-sm font-medium text-blue-100 uppercase tracking-wide"
                          : "text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
                      }
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 솔루션 */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {home.solutions.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {home.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {home.solutions.items.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
                    {solution.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold mr-3">→</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors"
                >
                  {solution.linkText}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {home.techStack.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {home.techStack.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {home.techStack.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 text-center rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 고객 */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {home.clients.title}
            </h2>
            <p className="text-xl text-gray-300">
              {home.clients.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {home.clients.categories.map((category, index) => (
              <div
                key={index}
                className={
                  index === 1
                    ? "bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/20"
                    : "bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-2xl shadow-2xl"
                }
              >
                <div className={index === 1 ? "text-5xl md:text-6xl font-bold mb-4" : "text-5xl md:text-6xl font-bold mb-4 text-white"}>
                  {category.title}
                </div>
                <p className={index === 1 ? "text-gray-200 text-lg" : "text-blue-100 text-lg"}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최신 콘텐츠 */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {home.content.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {home.content.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {home.content.items.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={
                      item.type === "YouTube"
                        ? "w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4 shadow-md"
                        : "w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4 shadow-md"
                    }
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      {item.type === "YouTube" ? (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      ) : (
                        <path d="M16.273 12.845L7.376 0H0v24h7.726l8.898-12.845L24 24V0h-7.727z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.type === "YouTube"
                      ? "inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                      : "inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                  }
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    {item.type === "YouTube" ? (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    ) : (
                      <path d="M16.273 12.845L7.376 0H0v24h7.726l8.898-12.845L24 24V0h-7.727z" />
                    )}
                  </svg>
                  {item.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {home.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            {home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {home.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.primary
                    ? "inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    : "inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 rounded-lg shadow-lg hover:shadow-xl transition-all"
                }
              >
                {button.text}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
