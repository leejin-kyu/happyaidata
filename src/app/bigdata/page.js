"use client";

import Link from "next/link";
import { useState } from "react";

export default function BigData() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    "한국교육과정평가원-2025": {
      title: "한국교육과정평가원 - STM 기반 수능·대입 여론 분석",
      period: "2025년",
      client: "한국교육과정평가원",
      category: "공공기관",
      description: "STM(Structural Topic Model)을 활용하여 수능 및 대입 제도와 관련된 미디어 빅데이터를 분석하고 여론 트렌드를 시계열로 추적합니다.",
      tech: ["STM", "Topic Modeling", "시계열 분석", "여론분석"],
      results: ["주요 이슈 10개 토픽 자동 추출", "시기별 여론 변화 시각화", "정책 수립 인사이트 제공"]
    },
    "소프트웨어정책연구소-2025": {
      title: "소프트웨어정책연구소 - SW 기업 구조화 체계 개발",
      period: "2025년",
      client: "소프트웨어정책연구소",
      category: "공공기관",
      description: "임베딩 기법과 머신러닝을 활용하여 SW 기업 빅데이터를 자동으로 분류하고 구조화하는 체계를 구축했습니다.",
      tech: ["Word Embedding", "분류 알고리즘", "빅데이터 처리", "자동화"],
      results: ["5만+ 기업 데이터 자동 분류", "산업별 세부 카테고리 구축", "정책 분석 효율 40% 향상"]
    },
    "동국대학교-2025": {
      title: "동국대학교 - 산학교차 인턴십 협력",
      period: "2025년",
      client: "동국대학교 Knowledge Science 연구센터",
      category: "대학",
      description: "동국대학교 컴퓨터·AI학부와 산학교차 인턴십 프로그램을 통해 AI·빅데이터 기술 교류 및 협력을 진행했습니다.",
      tech: ["산학협력", "AI 연구", "빅데이터 분석", "기술 멘토링"],
      results: ["대학-기업 협력 모델 수립", "AI 연구 인력 양성", "지속 협력 기반 마련"]
    },
    "경기도교육청-2024": {
      title: "경기도교육청 - 교육정책 설문 빅데이터 분석",
      period: "2024년",
      client: "경기도교육청",
      category: "교육청",
      description: "NLP 기법을 활용하여 대규모 주관식 설문 응답을 자동으로 분류하고 교육 정책 수립에 필요한 핵심 인사이트를 도출했습니다.",
      tech: ["NLP", "텍스트 분류", "감성분석", "주제 추출"],
      results: ["30만+ 응답 자동 분류", "10개 주요 의견 그룹 식별", "정책 반영률 향상"]
    },
    "국립산림과학원-2024": {
      title: "국립산림과학원 - 복원 용어 텍스트마이닝",
      period: "2024년",
      client: "국립산림과학원",
      category: "공공기관",
      description: "Transformer 기반 딥러닝 모델을 활용하여 산림복원 관련 전문용어를 체계적으로 분석하고 분류 체계를 구축했습니다.",
      tech: ["Transformer", "전문용어 추출", "텍스트마이닝", "분류 체계"],
      results: ["1,500+ 전문용어 체계화", "용어 간 관계 네트워크 구축", "연구 효율성 향상"]
    }
  };

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-white dark:bg-gray-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgb(147, 51, 234) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
                BigData Analysis · 300+ Projects
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI 빅데이터 분석
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              ChatGPT·Agent·MCP 기반 텍스트마이닝 전문
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              언론기사·SNS·논문에서 인사이트를 도출하는<br />
              AI 기반 빅데이터 분석 플랫폼
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl transition-all shadow-xl hover:shadow-2xl"
              >
                무료 컨설팅 신청
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              최신 AI 기술로 비정형 데이터를 분석합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  텍스트마이닝 & 자연어처리
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  ChatGPT, Agent, MCP를 활용한 고급 자연어 분석
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">언론기사·SNS 여론 분석</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">감성분석 & 토픽모델링</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">키워드 네트워크 분석</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  데이터 시각화
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  직관적인 대시보드와 맞춤형 리포트
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">실시간 대시보드</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">인터랙티브 차트</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">맞춤형 리포트 생성</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 상세 설명 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              전문적인 AI 분석 서비스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              공공기관, 연구기관, 대학, 기업을 위한 맞춤형 빅데이터 분석 및 교육
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">정책·공공기관 분석</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">정책 의제·이해관계자 네트워크 분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">여론 및 담론 분석 (언론/SNS 기반)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">AI LLM 기반 의제 탐지 및 트렌드 추적</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">시계열 기반 정책 변화 분석</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">기관 연구 데이터 분석</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">연구기관 학술데이터 텍스트마이닝</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">LDA, STM, BERTopic 등 고급 분석기법</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">ChatGPT·LLaMA 기반 최신 AI분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">기관 맞춤형 데이터 분석 파이프라인 설계</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">기관 맞춤형 교육 및 연구지원</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">공공·연구기관 내부 실습 세션</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">LLM·RAG·LangChain 기관 교육</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">대학·기업·공공기관 강의 다수 진행</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">전문가 컨소시엄 팀 연구지원</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 서비스 적합 대상 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              서비스 적합 대상
            </h3>
            <p className="text-center text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-10">(기관 전용)</p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🏛️</span>
                  <span>공공·정책 연구기관</span>
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                    <span>정책 기획·여론·사회이슈 등 정책 기반 데이터 분석이 필요한 기관</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                    <span>소셜 네트워크 분석(SNA), AI 의제 탐지, 시계열 분석 등 국책·지자체 과제 수행 부서</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                    <span>정책평가·행정혁신·복지·문화·환경 등 정책 데이터 분석 담당 기관</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🧪</span>
                  <span>연구기관 및 대학 연구소</span>
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5">•</span>
                    <span>학술·정책 연구용 비정형 데이터 분석 및 텍스트마이닝이 필요한 연구소</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  <span>교육·연구 지원 기관</span>
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 dark:text-pink-400 font-bold mt-0.5">•</span>
                    <span>AI 도구·파이썬 등을 활용해 직접 분석이 가능한 AI 빅데이터 분석 교육이 필요한 기관</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-center">
              <p className="text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2 flex-wrap">
                <span>📌</span>
                <span>본 서비스는 기관 프로젝트 전용이며, 개인 논문 대필·컨설팅 서비스와 무관합니다.</span>
              </p>
            </div>
          </div>

          {/* 상세 분석 기법 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              상세 분석 기법
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">1</span>
                  </div>
                  기본 텍스트마이닝
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 빈도(TF), TF-IDF, DoV, 워드 클라우드</li>
                  <li>• 네트워크 분석 (동시출현, N-gram)</li>
                  <li>• 중심성 분석 (근접, 연결, 매개, 위세)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  AI/머신러닝 기반
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• LDA, DTM, STM 토픽모델링</li>
                  <li>• BERTopic, LLM 임베딩 고급 기법</li>
                  <li>• LLM, Agent, ChatGPT 감성분석</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                  </div>
                  감성분석
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 감성사전 기반 (KNU, VADER 등)</li>
                  <li>• 맞춤형 감성사전 제작</li>
                  <li>• 최신 AI 기반 감성분석</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                    <span className="text-pink-600 dark:text-pink-400 font-bold">4</span>
                  </div>
                  최신 LLM 분석
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• ChatGPT, LLaMA, Falcon 활용</li>
                  <li>• RAG, LangChain 기반 분석</li>
                  <li>• 맞춤형 프롬프트 설계</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 텍스트마이닝 분석 프로세스 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AI 빅데이터 분석 프로세스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              데이터 수집부터 인사이트 도출까지 End-to-End 분석
            </p>
          </div>

          {/* 프로세스 플로우 */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white text-center shadow-lg h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </div>
                  <p className="text-xs font-bold">데이터 수집</p>
                  <p className="text-[10px] text-white/70 mt-1">뉴스 &middot; SNS &middot; 리뷰 &middot; 설문</p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-5 text-white text-center shadow-lg h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <p className="text-xs font-bold">전처리 &middot; 정제</p>
                  <p className="text-[10px] text-white/70 mt-1">형태소 분석 &middot; 불용어 제거</p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white text-center shadow-lg h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <p className="text-xs font-bold">AI &middot; NLP 분석</p>
                  <p className="text-[10px] text-white/70 mt-1">토픽 &middot; 감성 &middot; 네트워크</p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-5 text-white text-center shadow-lg h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <p className="text-xs font-bold">시각화</p>
                  <p className="text-[10px] text-white/70 mt-1">차트 &middot; 워드클라우드</p>
                </div>
              </div>
              <div className="relative col-span-2 md:col-span-1">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white text-center shadow-lg h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-xs font-bold">인사이트 리포트</p>
                  <p className="text-[10px] text-white/70 mt-1">LLM 해석 &middot; 보고서</p>
                </div>
              </div>
            </div>

            {/* 분석 기법 시각 카드 */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-blue-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3" strokeWidth={2}/><circle cx="12" cy="12" r="8" strokeWidth={1} opacity="0.3"/><line x1="12" y1="4" x2="12" y2="1" strokeWidth={2} strokeLinecap="round"/><line x1="12" y1="23" x2="12" y2="20" strokeWidth={2} strokeLinecap="round"/><line x1="4" y1="12" x2="1" y2="12" strokeWidth={2} strokeLinecap="round"/><line x1="23" y1="12" x2="20" y2="12" strokeWidth={2} strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">LDA &middot; BERTopic</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Topic Modeling</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">문서 내 잠재 토픽을 자동 추출하고 시간에 따른 토픽 변화를 추적합니다</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-purple-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sentiment Analysis</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">AI Sentiment</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">텍스트의 감성을 긍정/부정/중립으로 분류하고 여론 흐름을 분석합니다</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-green-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="6" r="2" strokeWidth={2}/><circle cx="18" cy="6" r="2" strokeWidth={2}/><circle cx="12" cy="18" r="2" strokeWidth={2}/><line x1="7.5" y1="7.5" x2="10.5" y2="16.5" strokeWidth={1.5}/><line x1="16.5" y1="7.5" x2="13.5" y2="16.5" strokeWidth={1.5}/><line x1="8" y1="6" x2="16" y2="6" strokeWidth={1.5}/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Keyword Network</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Network Graph</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">핵심 키워드 간 관계를 네트워크 그래프로 시각화하여 구조를 파악합니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* 빅데이터 핵심 분석 역량 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              핵심 분석 역량
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              NLP 기반 텍스트마이닝 전문 분석 기술
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">토픽 모델링</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">LDA, BERTopic 기반 주제 분류 및 시계열 트렌드 분석</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">감성 분석</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Sentiment Analysis 기반 긍/부정 여론 분석 및 인사이트 도출</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">키워드 네트워크</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">핵심 키워드 간 관계 네트워크 시각화 및 구조 분석</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">맞춤형 솔루션</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">기관별 맞춤형 텍스트마이닝 솔루션 개발 및 리포트 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* NLP 분석 파이프라인 */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-purple-400 tracking-wide uppercase mb-3">
              NLP Analysis Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              텍스트마이닝 분석 파이프라인
            </h2>
            <p className="text-xl text-gray-400">
              원천 데이터에서 비즈니스 인사이트까지
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Pipeline Flow */}
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">1</div>
                      <h4 className="font-bold text-sm">Data Collection</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">뉴스 크롤링</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">SNS API</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">설문 데이터</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">리뷰 수집</span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">공공 데이터</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border border-indigo-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">2</div>
                      <h4 className="font-bold text-sm">Preprocessing</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">형태소 분석</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">불용어 제거</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">정규화</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">토큰화</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">TF-IDF</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">3</div>
                      <h4 className="font-bold text-sm">Feature Engineering</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Word2Vec</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">FastText</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Sentence-BERT</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Doc2Vec</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">4</div>
                      <h4 className="font-bold text-sm">AI Analysis</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded">LDA</span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded">BERTopic</span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded">STM</span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded">감성분석</span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded">네트워크</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">5</div>
                      <h4 className="font-bold text-sm">Visualization</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">워드클라우드</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">네트워크 그래프</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">히트맵</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-1 rounded">시계열 차트</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2 text-sm font-bold">6</div>
                      <h4 className="font-bold text-sm">Insight Report</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-1 rounded">LLM 해석</span>
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-1 rounded">요약 리포트</span>
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-1 rounded">정책 제언</span>
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-1 rounded">대시보드</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 분석 도구 & 프레임워크 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-3">
              Analysis Framework
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              분석 도구 &middot; 프레임워크
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              산업 현장에서 가장 많이 사용되는 분석 기술
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Python NLP */}
            <div className="bg-gradient-to-b from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-yellow-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 py-2.5">
                <h3 className="text-white font-bold text-xs">Python NLP</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">KoNLPy &middot; Mecab</p>
                  <p className="text-[10px] text-gray-500">한국어 형태소 분석</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">spaCy &middot; NLTK</p>
                  <p className="text-[10px] text-gray-500">자연어 처리 프레임워크</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Gensim &middot; scikit-learn</p>
                  <p className="text-[10px] text-gray-500">토픽모델링 &middot; ML</p>
                </div>
              </div>
            </div>

            {/* Deep Learning */}
            <div className="bg-gradient-to-b from-red-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-red-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5">
                <h3 className="text-white font-bold text-xs">Deep Learning</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">PyTorch &middot; TensorFlow</p>
                  <p className="text-[10px] text-gray-500">딥러닝 프레임워크</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">HuggingFace Transformers</p>
                  <p className="text-[10px] text-gray-500">사전학습 모델</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">BERTopic &middot; SetFit</p>
                  <p className="text-[10px] text-gray-500">최신 NLP 모델</p>
                </div>
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-blue-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5">
                <h3 className="text-white font-bold text-xs">Visualization</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Plotly &middot; D3.js</p>
                  <p className="text-[10px] text-gray-500">인터랙티브 시각화</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">NetworkX &middot; Gephi</p>
                  <p className="text-[10px] text-gray-500">네트워크 분석</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">WordCloud &middot; Matplotlib</p>
                  <p className="text-[10px] text-gray-500">워드클라우드 &middot; 차트</p>
                </div>
              </div>
            </div>

            {/* Platform */}
            <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-green-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-5 py-2.5">
                <h3 className="text-white font-bold text-xs">Platform &middot; Infra</h3>
              </div>
              <div className="p-4 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">AWS &middot; GCP &middot; Azure</p>
                  <p className="text-[10px] text-gray-500">클라우드 인프라</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Apache Spark &middot; Airflow</p>
                  <p className="text-[10px] text-gray-500">대용량 데이터 처리</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Streamlit &middot; Gradio</p>
                  <p className="text-[10px] text-gray-500">분석 대시보드</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEXNOVA 플랫폼 */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TEXNOVA
            </h2>
            <p className="text-xl opacity-90">
              AI LLM 기반 빅데이터 분석 플랫폼
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">핵심 기능</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>대용량 데이터 실시간 수집·처리</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>AI 기반 자동 데이터 정제·분류</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>자연어 기반 데이터 조회·분석</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>커스터마이징 대시보드</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">주요 특장점</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>기관별 맞춤 개발</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>AI LLM 통합 지능형 해석</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>온프레미스/클라우드 지원</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>강력한 보안·접근 제어</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="http://texnova.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-purple-600 bg-white hover:bg-gray-100 rounded-lg transition-all shadow-xl hover:shadow-2xl"
            >
              TEXNOVA 바로가기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              적용 분야
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              다양한 산업 분야에서 활용되고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">공공기관</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                정책 분석 및 의사결정 지원
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">금융기관</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                리스크 관리 및 거래 분석
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">제조기업</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                생산 최적화 및 품질 관리
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">의료기관</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                의료 데이터 분석 및 연구
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 실적 인포그래픽 */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              검증된 분석 역량
            </h2>
            <p className="text-xl text-purple-200">
              공공&middot;대기업&middot;국책기관 프로젝트 실적
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black mb-2">300<span className="text-4xl md:text-5xl">+</span></div>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-3 rounded-full"></div>
              <p className="text-purple-200 text-sm font-medium">누적 프로젝트 수</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black mb-2">50<span className="text-4xl md:text-5xl">+</span></div>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-3 rounded-full"></div>
              <p className="text-purple-200 text-sm font-medium">공공기관 수행</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black mb-2">10<span className="text-4xl md:text-5xl">년</span></div>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-3 rounded-full"></div>
              <p className="text-purple-200 text-sm font-medium">텍스트마이닝 경력</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black mb-2">98<span className="text-4xl md:text-5xl">%</span></div>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-3 rounded-full"></div>
              <p className="text-purple-200 text-sm font-medium">고객 만족도</p>
            </div>
          </div>

          {/* 주요 고객군 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-lg font-bold text-center mb-6">주요 고객군</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <p className="text-xs font-medium">중앙행정기관</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <p className="text-xs font-medium">교육기관</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <p className="text-xs font-medium">국책연구기관</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-xs font-medium">대기업</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <p className="text-xs font-medium">금융권</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 데이터 분석 아키텍처 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase mb-3">
              Data Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              분석 시스템 아키텍처
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              TexNOVA 빅데이터 분석 플랫폼 구조
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              {/* Input Sources */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Data Sources</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">뉴스</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">SNS</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">리뷰</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">설문</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">논문</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
                    <p className="text-[10px] font-medium text-blue-700 dark:text-blue-300">보고서</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </div>

              {/* Processing Engine */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Processing Engine</p>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-4 border border-indigo-100 dark:border-gray-700">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <p className="text-[10px] font-bold text-gray-900 dark:text-white">NLP 전처리</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <p className="text-[10px] font-bold text-gray-900 dark:text-white">AI 분석</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      </div>
                      <p className="text-[10px] font-bold text-gray-900 dark:text-white">시각화</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-1.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <p className="text-[10px] font-bold text-gray-900 dark:text-white">리포팅</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </div>

              {/* Output */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Output &middot; Deliverables</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-4 text-center border border-green-200 dark:border-green-800/30">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">분석 보고서</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800/30">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">대시보드</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center border border-purple-200 dark:border-purple-800/30">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">시각화 자료</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-4 text-center border border-orange-200 dark:border-orange-800/30">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">AI 인사이트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 프로젝트 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              대기업·공공기관·유명대학과 함께한 300+ 프로젝트 (클릭하여 상세보기)
            </p>
          </div>

          {/* 2025년 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-xl">
                2025
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 ml-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국보건의료연구원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">AI기반 보건의료 기사 빅데이터 분석 연구</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.10~11 | AI기반 빅데이터분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">티에스케이</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">기업</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">AI기반 문서 표준내역서 개발</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.10~12 | AI LLM개발</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">과학기술정책연구원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">UN ESCAP 총회 및 CICTSTI 위원회 의제 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.07~09 | AI기반 빅데이터분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">고려대학교 민족문화연구원</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">대학</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">AI기반 빅데이터 분석을 통한 인문사회 연구 아젠다 및 사회적 기여 전략 도출</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.08 | AI기반 빅데이터분석</p>
              </div>

              <div
                onClick={() => setSelectedProject("한국교육과정평가원-2025")}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국교육과정평가원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">STM 기반 수능·대입 여론 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.05 | AI기반 빅데이터분석</p>
                <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <span>상세보기</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject("소프트웨어정책연구소-2025")}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">소프트웨어정책연구소</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">SW 기업 구조화 체계 개발</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.03~07 | AI기반 빅데이터분석</p>
                <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <span>상세보기</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">강릉시청소년상담복지센터</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">강릉시 청소년 생활실태 조사 설문 통계분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2025.07~10 | 통계분석</p>
              </div>
            </div>
          </div>

          {/* 2024년 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-xl">
                2024
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 ml-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                onClick={() => setSelectedProject("국립산림과학원-2024")}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">국립산림과학원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">복원 용어 텍스트마이닝</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2024.08~11 | AI기반 빅데이터분석</p>
                <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <span>상세보기</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국전력공사</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">기업</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Private LLM기반 RAG 챗봇 모델 구축</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2024.07~10 | LLM개발</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국전력기술</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">기업</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">기관 맞춤형 Private LLM 개발</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2024.07~ | LLM개발</p>
              </div>

              <div
                onClick={() => setSelectedProject("경기도교육청-2024")}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">경기도교육청</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">교육청</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">교육정책 설문 빅데이터 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2024.06~ | 자연어처리</p>
                <div className="mt-3 flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <span>상세보기</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl shadow-md border-2 border-dashed border-blue-300 dark:border-blue-700 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">+15</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">기타 프로젝트</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">공공기관 및 대학 빅데이터 분석</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2023년 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-xl">
                2023
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 ml-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">법무부</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">AI 모델 기반 판결문 범죄사실 추출 서비스</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2023.07~11 | 자연어처리(LLM개발)</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">서울디지털재단</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Instruction Fine-Tuning 및 강화학습 기반 LLM모델 연구</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2023.08~11 | 자연어처리(LLM개발)</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">삼성전자</h3>
                  <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">대기업</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">AI언어모델 기반 헬스케어 서비스 리뷰 텍스트 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2023.05~06 | 자연어처리</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국대기환경학회</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">학회</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">대기환경학회 연구동향 텍스트마이닝 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2023.03 | 자연어처리</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">서울대학교</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">대학</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">법학 설문 빅데이터 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">딥러닝 기반 토픽모델링 및 네트워크 시각화</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">청운대학교</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">대학</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">설문 질적연구 자료 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">NLP 기법 활용 질적 데이터 자동 코딩 및 주제 분석</p>
              </div>
            </div>
          </div>

          {/* 2022년 이전 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-xl">
                2018-2022
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 ml-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국데이터산업진흥원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">데이터 산업 정책 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2022.02~04 | 텍스트마이닝 분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">서울기술연구원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">안전사고 유형 빅데이터 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2022.07 | 텍스트마이닝 분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">한국보건의료연구원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">비대면 진료 언론 토픽분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">딥러닝 기반 토픽모델링 및 시계열 여론 트렌드 분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">국립산림과학원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">산림휴양공간 수요예측 및 관리기술 개발</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2020 | 빅데이터분석 (30+ 프로젝트)</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">국립공원관리공단</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">국립공원 탐방 키워드 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">빅데이터 텍스트마이닝 기반 방문자 요구사항 및 운영관리방안 도출</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">울산대학교</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">대학</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">정맥간호 인식 NLP 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">자연어처리 기법 활용 의료분야 인식 변화 추적 분석</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">경기연구원</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">공공</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">설문 빅데이터 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">Word2Vec과 감성분석 융합 기법 적용 설문문항 인사이트 도출</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">충북대학교</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">대학</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">간호 설문 질적연구 분석</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">딥러닝·머신러닝 기반 텍스트 분석 및 인사이트 도출</p>
              </div>
            </div>
          </div>

          </div>
        </section>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && projectDetails[selectedProject] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">{projectDetails[selectedProject].category} · {projectDetails[selectedProject].period}</span>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{projectDetails[selectedProject].title}</h2>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">프로젝트 개요</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{projectDetails[selectedProject].description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetails[selectedProject].tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">주요 성과</h3>
                <ul className="space-y-2">
                  {projectDetails[selectedProject].results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 기존 활용사례 섹션 제거 */}
      {false && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                빅데이터 분석 활용사례
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                다양한 분야에서의 AI 빅데이터 분석 성공사례
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 사례 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-3">교육 정책</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">교육청 설문 분석 시스템</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    NLP 기법을 활용하여 대규모 주관식 응답을 자동으로 분류하고 교육 정책 인사이트를 도출하는 시스템 구축
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">NLP</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">자동분류</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">설문분석</span>
                  </div>
                </div>
              </div>

              {/* 사례 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">산림 환경</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">산림 빅데이터 플랫폼</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    Transformer 기반 산림복원 전문용어 분석 및 내부망 전용 텍스트마이닝 플랫폼 구축으로 산림 연구 효율화
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Transformer</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">내부망</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">전문용어</span>
                  </div>
                </div>
              </div>

              {/* 사례 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-3">의료 헬스케어</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">헬스케어 리뷰 분석</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    AI 언어모델 기반 사용자 리뷰 토픽분석 및 감성분석을 통한 제품 개선 인사이트 도출
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">Agent MCP</span>
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">토픽모델링</span>
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">감성분석</span>
                  </div>
                </div>
              </div>

              {/* 사례 4 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-3">학술 연구</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">판례 빅데이터 분석</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    100만+ 판결문 데이터에서 법리 변화 추이와 판결 패턴을 분석하여 법학 연구에 활용
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">판례분석</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">대규모데이터</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">추이분석</span>
                  </div>
                </div>
              </div>

              {/* 사례 5 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wide mb-3">언론 미디어</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">수능·대입 여론 분석</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    STM(Structural Topic Model) 기반 미디어 빅데이터 분석으로 교육 정책 여론 트렌드 파악
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-2 py-1 rounded">STM</span>
                    <span className="text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-2 py-1 rounded">여론분석</span>
                    <span className="text-xs bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-2 py-1 rounded">트렌드</span>
                  </div>
                </div>
              </div>

              {/* 사례 6 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-3">소프트웨어 산업</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">SW 기업 분류 체계</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    임베딩 기법을 활용한 빅데이터 기반 SW 기업 자동 분류 및 구조화 시스템 개발
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">임베딩</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">분류체계</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">자동화</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            빅데이터 분석을 시작하세요
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            전문가 상담을 통해 최적의 빅데이터 전략을 수립하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl transition-all shadow-xl hover:shadow-2xl"
            >
              무료 컨설팅 신청
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-2 border-purple-600 dark:border-purple-400 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              사례 보기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
