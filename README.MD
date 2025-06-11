# 🍽️ 오늘 점심 뭐 먹지? - 점심 메뉴 룰렛

점심 메뉴 선택의 고민을 재미있게 해결해주는 PWA(Progressive Web App) 룰렛 앱입니다.

## 🎯 주요 기능

- ✨ **커스텀 메뉴 추가/삭제**: 원하는 메뉴를 자유롭게 추가하고 삭제할 수 있습니다
- 💾 **자동 저장**: localStorage를 활용하여 메뉴가 자동으로 저장됩니다
- 🎉 **화려한 애니메이션**: GSAP를 활용한 부드러운 룰렛 회전과 폭죽 효과
- 📱 **모바일 최적화**: 스마트폰에서 완벽하게 작동하는 반응형 디자인
- 🔌 **오프라인 지원**: Service Worker를 통한 오프라인 사용 가능
- 📲 **PWA 지원**: 홈 화면에 추가하여 네이티브 앱처럼 사용 가능

## 🚀 사용 방법

### 온라인으로 바로 사용하기
[https://zeroslee21.github.io/claude-lunch_roulette/](https://zeroslee21.github.io/claude-lunch_roulette/)

### 홈 화면에 추가하기 (PWA)
1. 모바일 브라우저에서 위 링크 접속
2. 브라우저 메뉴에서 "홈 화면에 추가" 선택
3. 앱처럼 사용하기

### 로컬에서 실행하기
```bash
# 저장소 클론
git clone https://github.com/zeroslee21/claude-lunch_roulette.git

# 디렉토리 이동
cd claude-lunch_roulette

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js의 http-server 사용
npx http-server
```

## 🛠️ 기술 스택

- **HTML5 Canvas**: 룰렛 그래픽 렌더링
- **GSAP**: 부드러운 애니메이션 효과
- **localStorage**: 메뉴 데이터 영구 저장
- **Service Worker**: 오프라인 지원 및 캐싱
- **PWA**: 네이티브 앱 경험 제공

## 📁 파일 구조

```
claude-lunch_roulette/
├── index.html              # 메인 HTML 파일
├── manifest.json           # PWA 매니페스트
├── sw.js                   # Service Worker
├── lunch_app_icon.png      # 앱 아이콘
├── lunch_app_opengraph.png # 오픈그래프 이미지
└── README.md              # 프로젝트 설명
```

## 🎨 주요 특징

- **반응형 디자인**: 모든 화면 크기에 최적화
- **터치 인터페이스**: 모바일 터치 제스처 완벽 지원
- **진동 피드백**: 지원 기기에서 햅틱 피드백 제공
- **다크 테마**: 눈이 편안한 어두운 색상 테마
- **접근성**: 명확한 색상 대비와 큰 터치 영역

## 📱 브라우저 지원

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Samsung Internet
- ✅ Edge
- ✅ Firefox

## 🤝 기여하기

버그 리포트나 기능 제안은 [Issues](https://github.com/zeroslee21/claude-lunch_roulette/issues)에 등록해주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 공개되어 있습니다.

---

Made with ❤️ by zeroslee21