// 引数として渡される関数のことをコールバック関数と呼ぶ。 一方、コールバック関数を引数として使う関数やメソッドのことを高階関数と呼ぶ。
function print(callback) {
  console.log(callback);
  const result = callback();
  console.log(result);
}

function fn(number = 3) {
  return number * 2
}

print(fn);

//コールバック関数の実行とともに1行目に返り、fnを引数callbackに代入していく
