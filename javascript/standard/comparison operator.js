//等価演算子
console.log(1 == 1); // => true
console.log("str" == "str"); // => true
console.log("JavaScript" == "ECMAScript"); // => false
console.log(1 == '1'); // => true

//厳密等価演算子
console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true

//不等価演算子
console.log(1 != 1); // => false
console.log("str" != "str"); // => false
console.log("JavaScript" != "ECMAScript"); // => true
console.log(true != true);// => false

//厳密不等価演算子
console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true
