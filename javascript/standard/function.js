#関数
#書き方1
function func1(str) { return str;};

#書き方2
const func2 = function (str) { return str;};

#書き方3 引数が一つの時（）内の引数を省略できる。また文が一つの時returnと{}を省略できる。
const func3 = () => str;

#書き方4
const func4 = (num1, num2) => ({
  hoge: num1,
  huga: num2,
});

