# 인스타그램 풀스택 구현하기

- 개발자 김보현 https://github.com/ksbohyun
- 개발자 이준희 https://github.com/junh0328
- 개발자 이현주 https://github.com/leemember

# 구현 기술

FRONT - React.js
BACK - Node.js
SERVER - MySQL

# 구성 방향

- 로그인 창에서 로그인을 통해 메인 페이지(main)에 접속
- 메인 페이지에서 SPA를 활용한 렌더링

# front 구성 (head, main, side)

- 해쉬태그 검색 컴포넌트 (head)
- 메인 뉴스피드 컴포넌트 (main)
- 댓글 달기 컴포넌트 (main)
- 추천 글 컴포넌트 (nav -> main)
- 프로필 편집 (nav -> main)
- 본인의 피드/ 유저들의 피드 (main)

# back 구성

- 사용자에 대한 CRUD
- socket.io 모듈을 활용한 대화기능 구현
- 페이스북 로그인 API를 통한 로그인 구현
- 회원가입을 통한 로그인 구현
- DB와의 연동을 통한 데이터 처리
- 해쉬 태그 검색 기능
- 사진 및 글 추가 기능
- 라우팅 연결을 통한 데이터 처리
