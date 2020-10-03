# 과제: 리액트 REST 게시판 만들기

1. node.js에서 게시판을 스키마를 작성 (mongoDb 또는 mySQL), 데이터 삽입
- 번호(key, id)/ 글 작성자(userid)/ 제목(title) / 날짜 (date) 

2. route 작성

- localhost:3001/board/list : 삽입한 JSON 리스트를 뿌려준다.
- localhost:3001/board/detail/1 : json 1번 글의 상세정보

3. 리액트에서 axios를 사용하여 리스트 작성

- 받아올 json 파일 만들기
- axios를 통해 받아온 json 파일을 맵핑으로 풀어서 보여줄 자식 컴포넌트 만들기

4. 상세정보를 화면에 출력
(영화 게시판 만든 것 참고하여 만들기)

- routes 폴더 >> App.js 에서 라우팅한 파일들을 담을 폴더
- components 폴더 >> App.js에 렌더링하는 컴포넌트에 대한 파일을 담을 폴더
