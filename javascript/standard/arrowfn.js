//通常の関数
function fn(number) {
  return number * 2;
}

console.log(fn(2));

//アロー関数
const fnArrow = (number) => {
  return number * 2;
}

console.log(fnArrow(2))

//アロー関数省略
const fnArrow2 = number => number * 2;
console.log(fnArrow2(2))
