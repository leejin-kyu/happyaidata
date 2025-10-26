// 이 파일을 C:\Users\leeji\Desktop\happyaidata\src\app\page.js 에 복사하세요

import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Home() {
  const { home } = siteContent;

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 모바일 최적화 */}
      <section className="relative bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden">
        {/* AI 신경망 배경 패턴 */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="rgb(59, 130, 246)" opacity="0.6"/>
                <circle cx="100" cy="40" r="4" fill="rgb(99, 102, 241)" opacity="0.7"/>
                <circle cx="180" cy="30" r="3" fill="rgb(139, 92, 246)" opacity="0.6"/>
                <circle cx="60" cy="100" r="3.5" fill="rgb(59, 130, 246)" opacity="0.65"/>
                <circle cx="140" cy="120" r="3" fill="rgb(99, 102, 241)" opacity="0.6"/>
                <circle cx="40" cy="180" r="4" fill="rgb(139, 92, 246)" opacity="0.7"/>
                <circle cx="160" cy="170" r="3" fill="rgb(59, 130, 246)" opacity="0.6"/>
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

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02] dark:from-blue-400/[0.03] dark:to-purple-400/[0.03]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full tracking-wider uppercase shadow-md">
                  {home.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                {home.hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-snug">
                {home.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed whitespace-pre-line font-medium">
                {home.hero.description}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16 font-medium">
                {home.hero.techStack}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={home.hero.buttons.bigdata.href}
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
                >
                  {home.hero.buttons.bigdata.text}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href={home.hero.buttons.aillm.href}
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
                >
                  {home.hero.buttons.aillm.text}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 오른쪽 통계/시각 요소 */}
            <div className="relative animate-slide-up mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {home.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={
                      index % 3 === 0
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform"
                        : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                    }
                  >
                    <div
                      className={
                        index % 3 === 0
                          ? "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3"
                          : "text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3"
                      }
                    >
                      {stat.number}
                    </div>
                    <div
                      className={
                        index % 3 === 0
                          ? "text-xs sm:text-sm font-medium text-blue-100 uppercase tracking-wide"
                          : "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide"
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {home.solutions.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              {home.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {home.solutions.items.map((solution, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 transform"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed whitespace-pre-line">
                    {solution.description}
                  </p>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold mr-2 sm:mr-3 group-hover/item:scale-125 transition-transform">→</span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-base sm:text-lg transition-all group/link"
                >
                  {solution.linkText}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {home.techStack.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              {home.techStack.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {home.techStack.technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 text-center rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {tech.name}
                </div>
                <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 고객 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {home.clients.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              {home.clients.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {home.clients.categories.map((category, index) => (
              <div
                key={index}
                className={
                  index === 1
                    ? "bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 transform"
                    : "bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform"
                }
              >
                <div className={index === 1 ? "text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4" : "text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-white"}>
                  {category.title}
                </div>
                <p className={index === 1 ? "text-gray-200 text-base sm:text-lg" : "text-blue-100 text-base sm:text-lg"}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최신 콘텐츠 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {home.content.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              {home.content.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {home.content.items.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 transform"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div
                    className={
                      item.type === "YouTube"
                        ? "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform"
                        : "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-110 transition-transform"
                    }
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      {item.type === "YouTube" ? (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      ) : (
                        <path d="M16.273 12.845L7.376 0H0v24h7.726l8.898-12.845L24 24V0h-7.727z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.type === "YouTube"
                      ? "inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-sm sm:text-base"
                      : "inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-sm sm:text-base"
                  }
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            {home.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12">
            {home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {home.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.primary
                    ? "inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 transform"
                    : "inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 transform"
                }
              >
                {button.text}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
