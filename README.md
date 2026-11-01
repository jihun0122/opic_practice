# The Everyday Journal

영어 기사 형태로 읽는 OPIc 연습 페이지입니다. 서버, API 키, 빌드 과정 없이 HTML/CSS/JavaScript만으로 동작합니다.

## 사용법

- 한국어 스크립트를 보고 영어로 떠올린 뒤, 문단을 클릭해 영어 예문을 확인합니다.
- **질문으로 연습**을 선택하면 한글 스크립트 없이 질문에 답하고 예문과 비교할 수 있습니다.
- **영문 모두 보기**로 전체 답변을 확인하거나 숨길 수 있습니다.
- 주제별 선택, 검색, 무작위 기사, 저장한 기사 필터를 사용할 수 있습니다.
- 저장한 기사와 영어 예문을 열어 본 기사 목록은 현재 브라우저의 localStorage에 저장됩니다. 기기 간 동기화는 지원하지 않습니다.
- 예문은 연습용 창작 콘텐츠입니다. 공식 시험 기출문제나 실제 보도 기사가 아닙니다.

## GitHub Pages에 올리기

1. 이 파일들을 GitHub 저장소 `main` 브랜치에 커밋하고 푸시합니다.
2. 저장소의 **Settings → Pages → Build and deployment**로 이동합니다.
3. Source에서 **Deploy from a branch**를 선택합니다.
4. Branch는 **main**, 폴더는 **/(root)**를 선택하고 **Save**를 누릅니다.
5. 배포가 완료되면 Pages 설정에 표시된 주소로 접속합니다.

이 저장소의 예상 주소: https://jihun0122.github.io/opic_practice/

위 주소는 Pages 설정 및 배포 후 사용할 수 있습니다. 모든 리소스는 상대 경로로 연결되어 프로젝트 하위 경로에서도 작동합니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub Pages에 올리는 학습 콘텐츠는 공개될 수 있으니 실제 개인정보나 회사 내부 자료 대신 예시 정보를 사용하세요.

## 내 스크립트 추가

`lessons.js`의 `window.LESSONS` 배열에 아래 형식의 객체를 추가합니다. `id`는 다른 기사와 겹치지 않게 지정하세요. 주제 메뉴, 기사 목록, 읽기 기록의 전체 개수는 자동으로 반영됩니다.

```js
{
  id: "music",
  topic: "Culture",
  label: "음악 · 취향",
  art: "Listen closely.",
  title: "The songs that stay with us",
  subtitle: "A familiar tune can change an ordinary day.",
  question: "What kind of music do you enjoy, and why?",
  questionKo: "어떤 음악을 좋아하고, 그 이유는 무엇인가요?",
  paragraphs: [
    { ko: "저는 주로 팝 음악을 들어요.", en: "I mostly listen to pop music." },
    { ko: "퇴근길에 들으면 기분이 좋아져요.", en: "It puts me in a good mood on my way home from work." }
  ],
  expressions: [["on my way home", "집에 가는 길에"]]
}
```

`lessons.js`는 자바스크립트이므로 각 객체 사이의 쉼표와 문자열 따옴표를 유지하세요. 영어 답변은 자신의 실제 경험과 말투에 맞게 수정하는 것을 권장합니다.

## 로컬 확인

`index.html`을 브라우저에서 열어 바로 사용할 수 있습니다. 로컬 서버를 사용하려면 저장소에서 다음 명령을 실행하세요.

```sh
python3 -m http.server 8000
```

그런 다음 http://localhost:8000 에 접속합니다. 파일로 직접 열 때는 브라우저에 따라 학습 기록 저장이 제한될 수 있습니다.
