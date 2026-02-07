function sum1(x:number ,y:number) {
  return x + y;
}
const result1 = sum1(1, 2);
const sum2 = (x:number ,y:number):number => x + y;
const result2 = sum2(10,10);
console.log(result2)

type Sum = (x:number, y:number) => number;
const sum3: Sum = (x, y) => x + y;
const result3 = sum3(1,2)
console.log(result3)

