# Remember Me 프로젝트

## 📖 프로젝트 설명

다양한 수단들로 암기를 시키는 앱 서비스.
1단계 목표는 장소를 이용해 암기를 트리거 시킨다.

## 💿 개발 환경 및 스택

React.js / TS / Vite / useSyncExternalStore

## 🧨 기술적 포인트

- React 18의 useSyncExternalStore를 이용한 전역 상태 직접 개발
- 모든 상태를 잘 정의해 전역 상태로 사용(혹자는 micro external state라고 부름)
- 상태 정의를 위해 객체지향 개념을 적극적으로 활용
- TDD 설계 시도를 통해 실용성 및 인사이트 체크
- 지역성에 근거한 폴더 구조 및 컴포넌트 관리

## 🔗 배포링크

[🔗 배포 링크 이동](https://rememberme-ten.vercel.app/)

## 💻 실행방법

```bash
# 프로젝트 클론
git clone "https://github.com/2taesung/rememberme.git"

# 프로젝트 폴더 진입
cd rememberme

# 모듈 설치 및 실행
npm && npm dev
```

## 📦 폴더구조

```
📦 src
├── 📂 components
│   ├── 📄 lottiePractice.tsx
│   ├── 📄 ...
├── 📂 hooks
│   ├── 📄 useCurrentPosition.tsx
│   ├── 📄 ...
├── 📂 mocks
│   ├── 📄 handler.ts
│   └── 📄 setup.ts
├── 📂 models
│   ├── 📄 PositionList.ts
│   ├── 🧪 PositionList.test.ts
│   ├── 📄 ...
├── 📂 pages
│   ├── 📄 MainPage.tsx
│   ├── 📄 ...
├── 📂 routes
│   ├── 📄 Layout.tsx
│   └── 📄 routes.tsx
├── 📂 stores
│   ├── 📄 PositionListStore.ts
│   ├── 🧪 PositionListStore.test.ts
│   ├── 📄 ...
├── 📂 styles
│   └── 📄 GlobalStyle.ts
├── 📂 types
│   ├── 📄 CurrentPosition.ts
│   └── 📄 Position.ts
├── 📄 App.tsx
├── 🧪 App.test.tsx
├── 📄 main.tsx
├── 📂 apis
│   └── 📄 api.ts
```

## ⚠️ 주의사항

- LottieFile react version conflict

[🔗 관련 이슈 링크](https://stackoverflow.com/questions/72184976/getting-error-in-while-installing-react-lottie-in-react18/)
