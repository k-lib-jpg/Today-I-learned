function print(callback) {
  console.log(callback);
  const result = callback();
  console.log(result);
}
//ƒ fn(number = 3) {return number * 2}
//6

function fn(number = 3) {
  return number * 2
}

print(fn);

//コールバック関数の実行とともに1行目に返り、fnを引数callbackに代入していく
