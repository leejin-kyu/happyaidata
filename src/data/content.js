// 사이트 전체 텍스트 설정 파일
// 이 파일만 수정하면 전체 사이트의 텍스트를 변경할 수 있습니다

export const siteContent = {
  // 공통 정보
  common: {
    companyName: "HappyAI",
    tagline: "AI 전문 기업",
    description: "AI 기반 빅데이터 분석 × AI LLM 솔루션",
  },

  // 헤더 메뉴
  header: {
    logo: "HappyAI",
    menu: {
      home: "홈",
      about: "회사소개",
      news: "회사소식",
      bigdata: "빅데이터 분석",
      aillm: "AI LLM",
      contact: "문의/견적"
    },
    social: {
      youtube: "https://www.youtube.com/@HappyAI_0612",
      blog: "https://blog.naver.com/happynlp0612"
    }
  },

  // 푸터
  footer: {
    company: {
      title: "HappyAI",
      description: "AI 전문 기업\nAI 기반 빅데이터 분석 × AI LLM 솔루션"
    },
    quickLinks: {
      title: "빠른 링크",
      links: [
        { text: "회사소개", href: "/about" },
        { text: "회사소식", href: "/news" },
        { text: "빅데이터 분석", href: "/bigdata" },
        { text: "AI LLM", href: "/aillm" },
        { text: "문의하기", href: "/contact" }
      ]
    },
    solutions: {
      title: "솔루션",
      items: [
        "TEXNOVA - 빅데이터 분석",
        "DOCUNOVA - AI LLM RAG",
        "맞춤형 AI 솔루션 개발",
        "AI 컨설팅"
      ]
    },
    contact: {
      title: "연락처",
      email: "contact@happyaidata.kr",
      phone: "02-1234-5678",
      address: "서울특별시 강남구 테헤란로 123"
    },
    social: {
      title: "Follow Us",
      youtube: "https://www.youtube.com/@HappyAI_0612",
      blog: "https://blog.naver.com/happynlp0612",
      brochure: "https://drive.google.com/file/d/1xtvrIejY8SDXAdGIUSxDRUPASkfw-T71/view"
    },
    copyright: "© 2025 HappyAI. All rights reserved.",
    footerLinks: [
      { text: "YouTube", href: "https://www.youtube.com/@HappyAI_0612" },
      { text: "Blog", href: "https://blog.naver.com/happynlp0612" },
      { text: "기업소개서", href: "https://drive.google.com/file/d/1xtvrIejY8SDXAdGIUSxDRUPASkfw-T71/view" }
    ]
  },

  // 메인 페이지 (홈)
  home: {
    // 히어로 섹션
    hero: {
      badge: "300+ Projects · Trusted by Government & Enterprises",
      title: "AI 전문 기업",
      subtitle: "AI 기반 빅데이터 분석 × AI LLM 솔루션",
      description: "최신 AI 기술과 10년 이상의 개발 및 연구 경험으로\n고품질 맞춤형 AI 솔루션을 제공합니다",
      techStack: "ChatGPT · BERT · RAG 등 최신 AI 기술 활용 · 텍스트마이닝 · 자연어처리 전문",
      buttons: {
        bigdata: {
          text: "AI 빅데이터 분석",
          href: "/bigdata"
        },
        aillm: {
          text: "AI LLM 솔루션",
          href: "/aillm"
        }
      },
      stats: [
        { number: "300+", label: "프로젝트 수행" },
        { number: "10+", label: "Years Experience" },
        { number: "AI", label: "LLM & BigData" },
        { number: "RAG", label: "Latest Tech" }
      ]
    },

    // 핵심 솔루션 섹션
    solutions: {
      title: "핵심 솔루션",
      subtitle: "AI 기술로 비즈니스 혁신을 실현합니다",
      items: [
        {
          name: "TEXNOVA - AI 빅데이터 분석",
          description: "ChatGPT, BERT 기반 텍스트 빅데이터 분석 플랫폼으로\n복잡한 데이터에서 인사이트를 발굴합니다",
          features: [
            "텍스트마이닝 & 자연어처리",
            "ChatGPT·BERT AI 분석",
            "데이터 시각화 대시보드"
          ],
          link: "/bigdata",
          linkText: "자세히 보기"
        },
        {
          name: "DOCUNOVA - AI LLM RAG",
          description: "최신 AI LLM과 RAG 기술로\n문서 기반 지능형 대화 시스템을 구축합니다",
          features: [
            "ChatGPT·Claude 등 최신 LLM",
            "RAG 기반 문서 검색·대화",
            "맞춤형 AI 챗봇 구축"
          ],
          link: "/aillm",
          linkText: "자세히 보기"
        }
      ]
    },

    // 기술 스택 섹션
    techStack: {
      title: "최신 AI 기술",
      subtitle: "검증된 최신 AI 기술로 솔루션을 구현합니다",
      technologies: [
        { name: "ChatGPT", description: "OpenAI LLM" },
        { name: "BERT", description: "NLP Model" },
        { name: "RAG", description: "Retrieval-Augmented" },
        { name: "Claude", description: "Anthropic AI" }
      ]
    },

    // 주요 고객 섹션
    clients: {
      title: "신뢰받는 AI 파트너",
      subtitle: "공공기관, 대기업, 연구기관 등 300+ 프로젝트 성공 경험",
      categories: [
        {
          title: "공공기관",
          description: "정부, 지자체 AI 시스템 구축"
        },
        {
          title: "대기업",
          description: "금융, 제조, 유통 AI 혁신"
        },
        {
          title: "연구기관",
          description: "대학, 연구소 AI 연구 협력"
        }
      ]
    },

    // 최신 콘텐츠 섹션
    content: {
      title: "최신 콘텐츠",
      subtitle: "AI 기술과 빅데이터 분석에 대한 유익한 정보를 제공합니다",
      items: [
        {
          type: "YouTube",
          title: "YouTube",
          subtitle: "HappyAI 채널",
          description: "AI 기술 튜토리얼, 빅데이터 분석 실습, 최신 AI 트렌드를 영상으로 만나보세요.",
          buttonText: "채널 방문하기",
          link: "https://www.youtube.com/@HappyAI_0612"
        },
        {
          type: "Blog",
          title: "Blog",
          subtitle: "네이버 블로그",
          description: "AI 프로젝트 사례, 기술 인사이트, 빅데이터 분석 노하우를 상세히 공유합니다.",
          buttonText: "블로그 방문하기",
          link: "https://blog.naver.com/happynlp0612"
        }
      ]
    },

    // CTA 섹션
    cta: {
      title: "AI 솔루션 도입을 시작하세요",
      subtitle: "무료 컨설팅과 맞춤형 견적을 받아보세요",
      buttons: [
        {
          text: "무료 상담 신청",
          href: "/contact",
          primary: true
        },
        {
          text: "사례 보기",
          href: "/cases",
          primary: false
        }
      ]
    }
  }
};
