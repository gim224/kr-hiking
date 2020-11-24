# kr-hiking github pages

_[Go to github pages link](https://gim224.github.io/kr-hiking/)_

## 주제

kr-hiking project : 등산 기록 및 스케쥴링 등.

## 목적

1. steady study of PERN (PostgreSQL, Express, React, Nodejs)

```markdown
#혼자 #차근차근 #기획 #개발 #문서작성

📌소개
◾ 개발자 : 김기태(1993.12.28, gtgt.kim)
◾ PERN 모두 처음 접하는 2년따리(2020 기준) SI개발자, '이대로 살면 도태된다' 느끼고 도전🏊‍♂️🚴‍♂️🏃‍♂️
◾ 우아한 형제들 개발 문화를 동경 [youtube-우아한Tech](https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang) / [기술 블로그](https://woowabros.github.io/) 등

📌개발환경
◾ OS : windows 10
◾ JAVA : openjdk 14.0.2
◾ nodejs : v12.18.3
◾ android sdk : ...
◾ flutter : ...
◾ Git : ...

📌개발도구
◾ vscode
◾ windows terminal
◾ android studtio

📌기타
◾ github : 형상관리
◾ github pages : 피가되고 살이되는 소소한 정리📋

훗날 적용해보고 싶은 기술스택 : typescript / docker / ec2..(cloud computing anything) / ESLint module 등
```

## APPLICATION

### 구성도

![Image]()

### client

1. React 사용기
   ![Image](data:image/png;base64,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)

```markdown
🏴‍☠️삽질 : react 탬플릿을 활용하지 않기로 함.(react 학습에도 목적이 있으므로.)

- react 탬플릿을 활용 [light-blue-react-template](https://github.com/flatlogic/light-blue-react-template)
  - Fork : 변경의 여지가 존재하니까 내 프로젝트로 fork~
  - 'cd [project-root]' : 프로젝트루트로 이동
  - `git clone [remote-URL] client` : 원격저장소로부터 client 폴더에 클론
  - `cd client` : client폴더로 이동
  - `npm install` : 의존(패키지) 다운로드
  - `npm start` : 서버 시작
```

```markdown
🏴‍☠️삽질 : react 탬플릿을 활용하지 않기로 함.(react 학습에도 목적이 있으므로.)

- git subtree
  - `cd [project-root]` : 프로젝트루트로 이동
  - `git remote -v` : 확인
  - `git remote add client [remote-URL]` : git remote add {remote-name} {child-reopsitory}
  - `git subtree add --prefix client client master` : git subtree add --prefix {child-path} {remote-name} {child-branch}
    - `git reset --hard` : "Working tree has modifications. Cannot add."
```

```markdown
삽질을 되돌리기 위해 git 초기화 진행

- `cd [project-root]` : 프로젝트루트로 이동
- `rm -r ./.git -Force` : 로컬에 존재하는 .git 디렉토리를 삭제
- `rm -r ./client -Force` : 로컬에 존재하는 client 디렉토리를 삭제
- `git init` : git 초기화
- `git add .`
- `# git commit -m <커밋 메시지>` : 현재 상태로 커밋을 진행
- `git remote add [remote-name] <url>` : 원격 저장소를 연결
  - `git remote -v` : 원격 저장소 연결 확인
- `git branch -m master main` : git init의 경우 브랜치명을 master를 생성하는 경우도 있어, main으로 명칭 변경.
- `git push --force --set-upstream [remote-name] main` : 현재 상태를 원격저장소 main에 적용
```

```markdown
`cd [project top folder]` : go to project top folder (Don’t forget to navigate to your project top folder!)
`npx create-react-app client` : Quick Start; simple react project from facebook
`cd client`
`npm start` : http://localhost:3000/
```

### server

1. Node.js 사용기
   ![Image](data:image/png;base64,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)

```markdown
- Nodejs (LTS version / Windows(x64)) 다운로드 [Download Link](https://nodejs.org/ko/)
- `cd [project top folder]` : go to project top folder (Don’t forget to navigate to your project top folder!)
- @폴더 구성하기 mkdir api? server?@
- `npm init` : 해당 경로에서 node를 사용할 수 있도록 함..?
- `npm -i express` : express 모듈 설치 (rest api 서버 구축을 간편하게 도와줌.)
- `npm -i nodemon -D` : nodemon 모듈 설치 (소스파일 수정 시 서버가 자동으로 재기동되도록 함.)
- `npm -i prettier -D -E` : prettier 모듈 설치 (코드 정렬을 강제해서 가독성이 있도록 지원함.)
```

## 참조

- [How to combine React and Nodejs](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
- [LIGHT BLUE REACT TEMPLATE - Free React Template with Stylish Transparent Design](https://flatlogic.com/templates/light-blue-react-template)
