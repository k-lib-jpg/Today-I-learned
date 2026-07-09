//コンソールからユーザーの入力を受け取るためのモジュールを読み込む
const readline = require('readline');
//stdinは標準入力、stdoutは標準出力を表す
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//入力した郵便番号を受け取った後、インターフェイスを閉じる
rl.question('郵便番号を入力してください（半角数字7桁）: ', (zip) => {
  //郵便番号が7桁の半角数字であるかをチェックする
  if (!zip || isNaN(zip) || zip.length !== 7) {
    console.log('郵便番号は半角数字7桁で入力してください。');
  } else {
    formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
    console.log(`入力された郵便番号: ${formatted_zip}`);
  }
  rl.close();
});
