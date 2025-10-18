import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
              {footer.company.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
              {footer.company.description}
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 솔루션 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.solutions.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {footer.solutions.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.contact.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>이메일: {footer.contact.email}</li>
              <li>전화: {footer.contact.phone}</li>
              <li>주소: {footer.contact.address}</li>
            </ul>

            {/* 소셜 미디어 */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                {footer.social.title}
              </h4>
              <div className="flex space-x-4">
                <a
                  href={footer.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={footer.social.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Naver Blog"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.273 12.845L7.376 0H0v24h7.726l8.898-12.845L24 24V0h-7.727z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>{footer.copyright}</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            {footer.footerLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-4">
                {index > 0 && <span>•</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  {link.text}
                  {link.text === '기업소개서' && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
