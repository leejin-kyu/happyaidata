export default function Products() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">제품소개</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">AI 웹 빌더</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              코드 없이 AI 기반 웹사이트를 구축할 수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 드래그 앤 드롭 인터페이스</li>
              <li>✓ 자동 반응형 디자인</li>
              <li>✓ SEO 최적화</li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">데이터 분석</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              기업 데이터를 실시간으로 분석하고 인사이트를 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 실시간 대시보드</li>
              <li>✓ AI 기반 예측</li>
              <li>✓ 커스터마이징 가능</li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">이미지 분석</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              이미지 인식 및 분석 기능을 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 객체 인식</li>
              <li>✓ 품질 검사</li>
              <li>✓ 자동 분류</li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">자동 알람/모니터링</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              시스템 상태를 24/7 모니터링하고 알림을 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ 실시간 모니터링</li>
              <li>✓ 이상 감지</li>
              <li>✓ 다중 채널 알림</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
