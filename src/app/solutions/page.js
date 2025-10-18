import Link from "next/link";

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI LLM × 빅데이터 융합 솔루션
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            자연어로 대화하듯 빅데이터를 분석하고, 실시간으로 인사이트를 얻으세요
          </p>
        </div>
      </section>

      {/* AI LLM 솔루션 (70%) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Core Service 70%</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              AI LLM 솔루션
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              대규모 언어모델을 활용한 지능형 데이터 분석
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">맞춤형 LLM 개발</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                기업 데이터로 학습된 전용 AI 모델 구축
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 도메인 특화 모델 파인튜닝</li>
                <li>✓ 사내 데이터 보안 유지</li>
                <li>✓ 지속적 모델 업데이트</li>
                <li>✓ API 형태로 간편 연동</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-200 dark:border-blue-800">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4">RAG 시스템 구축</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                데이터베이스와 LLM을 연결한 질의응답 시스템
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 자연어로 데이터 조회</li>
                <li>✓ 실시간 정보 검색</li>
                <li>✓ 문맥 기반 응답 생성</li>
                <li>✓ 멀티모달 데이터 지원</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">AI 챗봇/어시스턴트</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                업무 자동화를 위한 지능형 대화 시스템
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 고객 상담 자동화</li>
                <li>✓ 사내 업무 지원</li>
                <li>✓ 다국어 지원</li>
                <li>✓ 음성/텍스트 멀티채널</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 빅데이터 분석 (30%) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Core Service 30%</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              빅데이터 분석
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              대규모 데이터 수집부터 예측 분석까지
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="text-5xl mb-4">📥</div>
              <h3 className="text-2xl font-bold mb-4">데이터 수집/정제</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                다양한 소스의 데이터를 수집하고 정제
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 웹 크롤링/API 연동</li>
                <li>✓ 데이터 클렌징</li>
                <li>✓ ETL 파이프라인 구축</li>
                <li>✓ 실시간 데이터 스트리밍</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">실시간 분석</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                대용량 데이터를 빠르게 분석하고 시각화
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 대시보드 구축</li>
                <li>✓ 실시간 모니터링</li>
                <li>✓ 이상 탐지</li>
                <li>✓ 트렌드 분석</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">예측 모델링</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                머신러닝 기반 예측 및 최적화
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✓ 수요 예측</li>
                <li>✓ 이탈 고객 예측</li>
                <li>✓ 추천 시스템</li>
                <li>✓ 최적화 알고리즘</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 융합의 힘 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 융합인가?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              AI LLM과 빅데이터를 결합하면 더 강력한 비즈니스 인사이트를 얻을 수 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl">🔗</div>
              <div>
                <h3 className="text-xl font-bold mb-2">자연어로 데이터 접근</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SQL이나 복잡한 쿼리 없이 &quot;지난 달 매출 추이 보여줘&quot;라고 질문하면 즉시 분석 결과를 받을 수 있습니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI 기반 인사이트 도출</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  단순 수치가 아닌 맥락을 이해한 분석 리포트를 자동으로 생성합니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">실시간 의사결정 지원</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  빅데이터 분석 결과를 LLM이 해석하여 즉각적인 액션 플랜을 제안합니다
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-bold mb-2">자동 리포트 생성</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  데이터 분석부터 경영진 보고서 작성까지 전 과정을 자동화합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            우리 회사에 맞는 솔루션이 궁금하신가요?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            무료 컨설팅을 통해 최적의 솔루션을 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 font-semibold px-10 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
            >
              융합 사례 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
