const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lessNumbers = numbers.filter((number) => number > 4);

// number 배열 중 4 보다 큰 것만 남기고 걸러서 보여줘!

console.log(lessNumbers);

const newNumbers = [1, 2, 3, 4, 5];
const lessNewNumbers = newNumbers.filter((number) => number !== 3);

// newNumbers 배열에서 3이 아닌 것만 남기고 걸러서 보여줘!

console.log(lessNewNumbers);
