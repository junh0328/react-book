// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기

// 배열 다루기
const array = [
  { id: 1, value: true },
  { id: 2, value: false },
  { id: 3, value: true },
];

let nextArray = array.concat({ id: 4 }); // 새 항목 추가
