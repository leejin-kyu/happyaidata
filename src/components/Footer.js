import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white mt-auto relative overflow-hidden">
      {/* 배경 글로우 효과 - 약하게 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* 회사 정보 */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {footer.company.title}
            </h3>
            <p className="text-slate-300 dark:text-slate-400 text-sm leading-relaxed mb-4 sm:mb-6 whitespace-pre-line font-medium">
              {footer.company.description}
            </p>

            {/* 소셜 미디어 */}
            <div className="flex space-x-3">
              <a
                href={footer.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={footer.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Naver Blog"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726l8.898-12.845L24 24V0h-7.727z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4 text-white">{footer.quickLinks.title}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors text-sm flex items-center group font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 group-hover:bg-violet-400 transition-colors"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 솔루션 */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4 text-white">{footer.solutions.title}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-slate-300 dark:text-slate-400 font-medium">
              {footer.solutions.items.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-indigo-400 group-hover:text-violet-400 mr-2 transition-colors">→</span>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4 text-white">{footer.contact.title}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-slate-300 dark:text-slate-400 font-medium">
              <li className="flex items-start group">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-indigo-400 group-hover:text-violet-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all group-hover:text-white transition-colors">{footer.contact.email}</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-indigo-400 group-hover:text-violet-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-white transition-colors">{footer.contact.phone}</span>
              </li>
              <li className="flex items-start group">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-indigo-400 group-hover:text-violet-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-white transition-colors">{footer.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mb-6 sm:mb-8"></div>

        {/* 저작권 및 링크 */}
        <div className="text-center">
          <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footer.footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-white text-xs sm:text-sm flex items-center transition-colors font-medium"
              >
                {link.text}
                {link.text === '기업소개서' && (
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
