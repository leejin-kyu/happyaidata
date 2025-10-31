'use client';

import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = '0000'; // 관리자 비밀번호
const ITEMS_PER_PAGE = 10; // 페이지당 항목 수

export default function News() {
  const defaultNews = [
    {
      id: 1,
      category: "저서",
      title: "『챗GPT와 함께하는 주식 데이터 분석』 출간",
      date: "2025-09-05",
      publisher: "영진닷컴",
      description: "복잡한 코딩 없이도 챗GPT 프롬프트 엔지니어링만으로 주식 데이터를 수집하고 분석하는 방법을 다룬 실전 가이드북. 프롬프트 설계부터 데이터 수집·시각화, 백테스팅, AI 예측까지 전 과정을 체계적으로 설명합니다.",
      link: "https://product.kyobobook.co.kr/detail/S000217243589",
      image: "book"
    },
    {
      id: 2,
      category: "솔루션",
      title: "Private 문서 검색 전용 LLM '도큐노바(DocuNOVA)' 출시",
      date: "2025-08-22",
      description: "내부망 전용 RAG 시스템으로 기업 문서를 안전하게 검색하고 분석할 수 있는 Private LLM 솔루션. 벡터DB 기반 실시간 문서 업데이트와 고정밀 검색을 지원합니다.",
      image: "product"
    },
    {
      id: 3,
      category: "산학협력",
      title: "동국대학교 Knowledge Science 연구센터와 산학교차 인턴십 진행",
      date: "2025-08-06",
      description: "동국대학교 컴퓨터·AI학부 Knowledge Science 연구센터와 함께 산학교차 인턴십 프로그램에 참여. 대학과 기업 간 AI·빅데이터 기술 협력의 첫 교류를 시작했습니다.",
      image: "partnership"
    },
    {
      id: 4,
      category: "기술",
      title: "실시간 벡터DB 업데이트로 완성하는 LLM RAG 시스템",
      date: "2025-08-06",
      description: "실무형 RAG 시스템 구축 노하우 공개. 벡터 데이터베이스의 실시간 업데이트 전략과 LLM RAG 파이프라인 최적화 방법을 소개합니다.",
      image: "tech"
    },
    {
      id: 5,
      category: "교육",
      title: "맞춤형 LLM 제작을 위한 LoRA 파인튜닝 실습 강의 오픈",
      date: "2025-08-04",
      description: "기업 데이터로 LLM을 파인튜닝하여 맞춤형 AI 모델을 만드는 실전 교육 프로그램. LoRA 기법을 활용한 효율적인 파인튜닝 방법을 실습 중심으로 학습합니다.",
      image: "education"
    }
  ];

  const [newsItems, setNewsItems] = useState(defaultNews);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [pendingAction, setPendingAction] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    category: "솔루션",
    title: "",
    date: new Date().toISOString().split('T')[0],
    publisher: "",
    description: "",
    link: "",
    imageFile: null,
    imagePreview: null,
    iconType: "product"
  });

  const categories = ["전체", "언론보도", "솔루션", "기술", "교육", "저서", "공지"];

  // localStorage에서 뉴스 불러오기
  useEffect(() => {
    const savedNews = localStorage.getItem('happyai_news');
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews));
    }
  }, []);

  // 비밀번호 확인
  const checkPassword = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      setPasswordInput('');

      // 대기 중인 작업 실행
      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }
    } else {
      alert('비밀번호가 올바르지 않습니다.');
      setPasswordInput('');
    }
  };

  // 인증 필요 작업 실행
  const requireAuth = (action) => {
    if (isAuthenticated) {
      action();
    } else {
      setPendingAction(() => action);
      setShowPasswordModal(true);
    }
  };

  // 폼 입력 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 이미지 파일 선택 처리
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 수정할 뉴스 불러오기
  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      category: item.category,
      title: item.title,
      date: item.date,
      publisher: item.publisher || "",
      description: item.description,
      link: item.link || "",
      imageFile: null,
      imagePreview: typeof item.image === 'string' && item.image.startsWith('data:') ? item.image : null,
      iconType: typeof item.image === 'string' && !item.image.startsWith('data:') ? item.image : "product"
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 뉴스 추가/수정
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // 수정 모드
      const updatedNews = newsItems.map(item =>
        item.id === editingId
          ? {
              ...item,
              category: formData.category,
              title: formData.title,
              date: formData.date,
              publisher: formData.publisher || undefined,
              description: formData.description,
              link: formData.link || undefined,
              image: formData.imagePreview || formData.iconType
            }
          : item
      );
      setNewsItems(updatedNews);
      localStorage.setItem('happyai_news', JSON.stringify(updatedNews));
      setEditingId(null);
    } else {
      // 새 글 작성 모드
      const newNews = {
        id: Date.now(),
        category: formData.category,
        title: formData.title,
        date: formData.date,
        publisher: formData.publisher || undefined,
        description: formData.description,
        link: formData.link || undefined,
        image: formData.imagePreview || formData.iconType
      };

      const updatedNews = [newNews, ...newsItems];
      setNewsItems(updatedNews);
      localStorage.setItem('happyai_news', JSON.stringify(updatedNews));
      setCurrentPage(1); // 첫 페이지로 이동
    }

    // 폼 초기화
    setFormData({
      category: "솔루션",
      title: "",
      date: new Date().toISOString().split('T')[0],
      publisher: "",
      description: "",
      link: "",
      imageFile: null,
      imagePreview: null,
      iconType: "product"
    });
    setShowForm(false);
  };

  // 뉴스 삭제
  const handleDelete = (id) => {
    if (confirm('이 소식을 삭제하시겠습니까?')) {
      const updatedNews = newsItems.filter(item => item.id !== id);
      setNewsItems(updatedNews);
      localStorage.setItem('happyai_news', JSON.stringify(updatedNews));
    }
  };

  // 카테고리 필터링
  const filteredNews = selectedCategory === "전체"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  // 페이지네이션
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // 페이지 변경
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 카테고리 변경시 페이지 초기화
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // 아이콘 렌더링
  const renderIcon = (iconType) => {
    const iconClass = "w-24 h-24 text-white";

    switch(iconType) {
      case "book":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "product":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case "partnership":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "tech":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "education":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {/* 비밀번호 모달 */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              관리자 인증
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              비밀번호를 입력해주세요
            </p>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="비밀번호"
              autoFocus
            />
            <div className="flex gap-4">
              <button
                onClick={checkPassword}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                확인
              </button>
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordInput('');
                  setPendingAction(null);
                }}
                className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 히어로 섹션 */}
      <section className="relative bg-white dark:bg-gray-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                News & Updates
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              회사 소식
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              해피AI의 최신 소식, 저서 출간, 솔루션 출시, 산학협력 및 연구 활동을 공유합니다
            </p>
          </div>
        </div>
      </section>

      {/* 작성 폼 */}
      {showForm && isAuthenticated && (
        <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {editingId ? '소식 수정' : '새 소식 작성'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    카테고리
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    {categories.filter(c => c !== "전체").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    날짜
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="소식 제목을 입력하세요"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  발행처 (선택)
                </label>
                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="예: 영진닷컴"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  내용
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="소식 내용을 입력하세요"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  링크 (선택)
                </label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  이미지 업로드 (선택)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                {formData.imagePreview && (
                  <div className="mt-4">
                    <img src={formData.imagePreview} alt="미리보기" className="max-h-48 rounded-lg" />
                  </div>
                )}
              </div>

              {!formData.imagePreview && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    아이콘 타입 (이미지 미업로드시)
                  </label>
                  <select
                    name="iconType"
                    value={formData.iconType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="book">책</option>
                    <option value="product">제품</option>
                    <option value="partnership">협력</option>
                    <option value="tech">기술</option>
                    <option value="education">교육</option>
                  </select>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  {editingId ? '수정 완료' : '등록하기'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({
                      category: "솔루션",
                      title: "",
                      date: new Date().toISOString().split('T')[0],
                      publisher: "",
                      description: "",
                      link: "",
                      imageFile: null,
                      imagePreview: null,
                      iconType: "product"
                    });
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* 카테고리 필터 */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === selectedCategory
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

      {/* 소식 목록 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {currentNews.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700 group relative"
              >
                <div className="md:flex">
                  {/* 이미지 영역 */}
                  <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-400 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-600 transition-colors flex items-center justify-center">
                    {typeof item.image === 'string' && item.image.startsWith('data:') ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      renderIcon(item.image)
                    )}
                  </div>

                  {/* 컨텐츠 영역 */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </span>
                      {item.publisher && (
                        <>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item.publisher}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex gap-4">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline"
                        >
                          자세히 보기
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      )}
                      {isAuthenticated && (
                        <>
                          <button
                            onClick={() => handleEdit(item)}
                            className="inline-flex items-center text-green-600 dark:text-green-400 font-bold hover:underline"
                          >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            수정
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="inline-flex items-center text-red-600 dark:text-red-400 font-bold hover:underline"
                          >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            삭제
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                이전
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                다음
              </button>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            전체 {filteredNews.length}개 중 {startIndex + 1}-{Math.min(endIndex, filteredNews.length)}개 표시
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            최신 소식을 받아보세요
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            해피AI의 새로운 소식과 기술 인사이트를 이메일로 받아보세요
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

      {/* 관리자 버튼 - 하단 */}
      <div className="bg-gray-100 dark:bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => requireAuth(() => setShowForm(!showForm))}
            className="text-xs text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            title="관리자 전용"
          >
            Admin
          </button>
          {isAuthenticated && (
            <span className="ml-2 text-xs text-green-600 dark:text-green-500">
              ✓
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
