import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Home() {
  const { home } = siteContent;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* 히어로 섹션 - 다른 섹션과 통일감 */}
      <section className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 md:py-40 lg:py-48 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full tracking-wider uppercase shadow-md">
                  {home.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                {home.hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-snug">
                {home.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed whitespace-pre-line font-medium">
                {home.hero.description}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 md:mb-16 font-medium">
                {home.hero.techStack}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={home.hero.buttons.bigdata.href}
                  className="group inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 hover:from-indigo-700 hover:via-violet-700 hover:to-fuchsia-700 transition-all rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
                >
                  {home.hero.buttons.bigdata.text}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href={home.hero.buttons.aillm.href}
                  className="group inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all rounded-full shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
                >
                  {home.hero.buttons.aillm.text}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 오른쪽 통계/시각 요소 - 솔루션 스타일과 통일 */}
            <div className="relative animate-slide-up mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {home.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 hover:-translate-y-1 transform"
                  >
                    <div className="relative text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 dark:from-blue-400 dark:via-cyan-400 dark:to-sky-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                      {stat.number}
                    </div>
                    <div className="relative text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 솔루션 - 심플 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
              {home.solutions.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {home.solutions.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {home.solutions.items.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 hover:-translate-y-1 transform overflow-hidden"
              >
                <div className="relative mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {index === 0 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed whitespace-pre-line">
                    {solution.description}
                  </p>
                </div>
                <ul className="relative space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mr-2 sm:mr-3 text-lg">→</span>
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="relative inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold text-base sm:text-lg transition-all group/link"
                >
                  {solution.linkText}
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-indigo-50/20 dark:from-slate-950 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
              {home.techStack.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {home.techStack.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {home.techStack.technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 text-center rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 relative overflow-hidden"
              >
                <div className="relative text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-105 transition-transform">
                  {tech.name}
                </div>
                <div className="relative text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wide">
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 고객 - 심플하게 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden">
        {/* 배경 글로우 약하게 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              {home.clients.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              {home.clients.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {home.clients.categories.map((category, index) => (
              <div
                key={index}
                className={
                  index === 1
                    ? "bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-white/20 hover:border-white/30 hover:bg-white/15 hover:scale-105 transition-all duration-300 transform"
                    : "bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform relative overflow-hidden group"
                }
              >
                <div className={index === 1 ? "relative text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4" : "relative text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 text-white"}>
                  {category.title}
                </div>
                <p className={index === 1 ? "relative text-slate-200 text-base sm:text-lg font-medium" : "relative text-indigo-50 text-base sm:text-lg font-medium"}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최신 콘텐츠 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
              {home.content.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {home.content.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {home.content.items.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 hover:-translate-y-1 transform"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div
                    className={
                      item.type === "YouTube"
                        ? "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-105 transition-all"
                        : "w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-md group-hover:scale-105 transition-all"
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
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed font-medium">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.type === "YouTube"
                      ? "inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-sm sm:text-base"
                      : "inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-sm sm:text-base"
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

      {/* CTA - 심플 */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-700 dark:via-violet-700 dark:to-fuchsia-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8">
            {home.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 font-medium">
            {home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {home.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.primary
                    ? "inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-black text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all transform"
                    : "inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-black text-white bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all transform"
                }
              >
                {button.text}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
