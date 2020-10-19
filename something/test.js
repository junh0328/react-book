const array = [1, 2, 3, 4, 5];

const nextArrayBad = array; // 배열을 복사하는 것이 아니라 똑같은 배열을 가리킵니다.
nextArrayBad[0] = 100;

// console.log(nextArrayBad);

// console.log(array === nextArrayBad); // 완전히 같은 배열이기 때문에 true입니다.

const nextArrayGood = [...array]; // 배열 내부의 값을 모두 복사합니다.

nextArrayGood[0] = 100;

// console.log(nextArrayGood);

// console.log(array);
// console.log(array === nextArrayGood); // 내부의 배열은 같아보여도 (...)을 통해 복사해온 객체이므로 === 다른 배열입니다. 그에 따라 false 값이 출력됩니다.

const object = {
  fop: "bar",
  value: 1,
};

const nextObjectBad = object; // 객체가 복사되지 않고, 똑같은 객체를 가리킵니다.
nextObjectBad.value = nextObjectBad.value + 1;

// console.log(object);
// console.log(nextObjectBad);
// console.log(object === nextObjectBad); // 복사한 것이 아닌 같은 객체를 가리키므로 비교 값이 true입니다.

const nextObjectGood = {
  ...object, // 기존에 있던 내용을 모두 복사해서 넣습니다.
  value: object.value + 1, //새로운 값을 덮어 씁니다.
};

// console.log(object);
// console.log(nextObjectGood);
// console.log(object === nextObjectGood);

const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // 아직까지는 똑같은 객체를 가리키고 읽기 때문에 true

nextTodos[0] = {
  // 새로운 객체 (nextTodos[0]) 에 ...문법을 통해 복사한 뒤에 값을 할당해 주었다.
  ...nextTodos[0],
  checked: false,
};

console.log(todos[0]);
console.log(nextTodos[0]);

console.log(todos[0] === nextTodos[0]);

// 얕은 복사를 통해 객체의 값츤 같지만, 내부의 값이 완전히 복사된 것이 아닌 값만 복사된 얕은 복사상태로 두 배열의 값을 비교하면 false이다.
