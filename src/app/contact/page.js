'use client';

import { useState } from 'react';

export default function Contact() {
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  const handleGoogleMeetBooking = () => {
    // Google Calendar 이벤트 생성 URL
    const title = 'HappyAI 상담 미팅';
    const details = 'AI 솔루션 도입 상담을 위한 Google Meet 미팅입니다.';
    const location = 'Google Meet';

    // 현재 시간으로부터 1주일 후, 오전 10시로 기본 설정
    const now = new Date();
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    nextWeek.setHours(10, 0, 0, 0);
    const endTime = new Date(nextWeek.getTime() + 60 * 60 * 1000); // 1시간 후

    const startTime = nextWeek.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endTimeStr = endTime.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${startTime}/${endTimeStr}&add=contact@happyaidata.kr`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-24 md:py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="mb-6 animate-slide-up">
              <span className="inline-block px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg">
                Contact Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up animation-delay-200">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                문의 · 견적
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
              AI 솔루션 도입이 궁금하신가요?<br />
              전문가가 맞춤형 상담과 견적을 제공해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* 문의 유형 선택 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                문의 유형
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">어떤 서비스에 관심이 있으신가요?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:-translate-y-2 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">빅데이터 분석</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                TEXNOVA 플랫폼 도입 및<br />빅데이터 연구 컨설팅
              </p>
            </div>
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-2 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI LLM 솔루션</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                DOCUNOVA 플랫폼 도입 및<br />RAG 기반 AI 시스템 구축
              </p>
            </div>
            <div className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 hover:-translate-y-2 transform">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">맞춤형 개발</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                기관 전용 AI 솔루션<br />설계 및 개발
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Meet 예약 섹션 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* 왼쪽: 정보 */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">화상 상담 예약</h2>
                    <p className="text-red-100 text-sm mt-1">Google Meet으로 간편하게</p>
                  </div>
                </div>

                <p className="text-lg mb-6 text-white/90 leading-relaxed">
                  전문가와 1:1 화상 미팅으로 프로젝트에 대해 자세히 상담받으세요.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">AI 솔루션 도입 전략 상담</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">맞춤형 견적 및 일정 논의</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">실시간 데모 시연 가능</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">30분 무료 컨설팅</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-white/80">
                    <strong>💡 Tip:</strong> Google Calendar에 자동으로 추가되며, Google Meet 링크가 생성됩니다.
                  </p>
                </div>
              </div>

              {/* 오른쪽: 액션 */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-br from-red-500 to-orange-500 rounded-full p-4 mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    지금 바로 예약하기
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    원하는 날짜와 시간을 선택하세요
                  </p>
                </div>

                <button
                  onClick={handleGoogleMeetBooking}
                  className="w-full bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-5 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center text-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Google Meet 예약하기
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    평일 09:00 - 18:00 예약 가능
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                    <strong>또는 다른 방법으로 문의하기</strong>
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:contact@happyaidata.kr"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      이메일로 문의
                    </a>
                    <a
                      href="tel:02-1234-5678"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      전화로 문의
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 양식 및 연락처 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  연락처 정보
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">이메일</h3>
                    <p className="text-blue-600 dark:text-blue-400">contact@happyaidata.kr</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">24시간 이내 답변</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">전화</h3>
                    <p>02-1234-5678</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">평일 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">주소</h3>
                    <p>서울특별시 강남구 테헤란로 123</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">직접 방문 가능 (사전 예약 필수)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">운영 시간</h3>
                    <p>평일 09:00 - 18:00</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>

              {/* 빠른 상담 안내 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">빠른 상담 안내</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    무료 컨설팅: 프로젝트 범위 및 예산 상담
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    데모 시연: TEXNOVA, DOCUNOVA 실제 체험
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    견적 제공: 맞춤형 솔루션 견적 산출
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    POC 제안: 파일럿 프로젝트 진행 가능
                  </li>
                </ul>
              </div>
            </div>

            {/* 문의 양식 */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  문의하기
                </span>
              </h2>
              <form className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">이름 *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">이메일 *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">회사명</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="회사명 (선택)"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">전화번호</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="010-1234-5678"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">문의 유형 *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">선택해주세요</option>
                    <option value="bigdata">빅데이터 분석 (TEXNOVA)</option>
                    <option value="aillm">AI LLM 솔루션 (DOCUNOVA)</option>
                    <option value="custom">맞춤형 개발</option>
                    <option value="consulting">컨설팅</option>
                    <option value="etc">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">문의 내용 *</label>
                  <textarea
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="프로젝트 내용, 예산, 일정 등을 자유롭게 작성해주세요"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  문의 보내기
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  제출하신 정보는 문의 답변 목적으로만 사용되며, 개인정보보호법에 따라 안전하게 관리됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                자주 묻는 질문
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">고객님들께서 가장 많이 문의하시는 내용입니다</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                프로젝트 진행 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-bold">A.</span> 프로젝트 규모에 따라 다르지만, 일반적으로 POC는 1-2개월, 본 프로젝트는 3-6개월 소요됩니다.
                초기 상담 시 정확한 일정을 안내해드립니다.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                온프레미스 설치가 가능한가요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-bold">A.</span> 네, TEXNOVA와 DOCUNOVA 모두 온프레미스 설치를 지원합니다. 보안이 중요한 금융, 공공기관에서
                많이 선택하시는 방식입니다.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                기존 시스템과 연동이 가능한가요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-bold">A.</span> 네, API 및 다양한 프로토콜을 통해 기존 시스템과 연동 가능합니다.
                레거시 시스템 연동 경험이 풍부합니다.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                유지보수 및 기술 지원은 어떻게 제공되나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-bold">A.</span> 프로젝트 완료 후 12개월 무상 유지보수를 제공하며, 이후 유료 기술지원 계약을 통해
                지속적인 업데이트와 기술지원을 받으실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            AI 전문가와 상담하세요
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed animate-fade-in animation-delay-200">
            300+ 프로젝트 경험을 바탕으로 최적의 AI 솔루션을 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <a
              href="mailto:contact@happyaidata.kr"
              className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 문의
            </a>
            <a
              href="tel:02-1234-5678"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              전화 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
