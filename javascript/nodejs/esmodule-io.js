//"type": "commonjs",から→ "module",に変更する
// axiosモジュールを読み込む
import axios from "axios";

// コンソールからユーザーの入力を受け取るためのモジュールを読み込む
import readline from "node:readline";

// OpenWeatherMapのAPIキーを設定する
const api_key = process.env.API_KEY;

// stdinは標準入力、stdoutは標準出力を表す
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// OpenWeatherMap APIと通信して情報を取得する
async function getWeather(formatted_zip) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${formatted_zip},JP&appid=${api_key}&lang=ja`;
    const response = await axios.get(url);
    const weather_data = response.data;

     console.log(`郵便番号: ${formatted_zip}`);
      console.log(`都市名: ${weather_data.name}`);
      console.log(`天気: ${weather_data.weather[0].description}`);
      console.log(`気温: ${(weather_data.main.temp - 273.15).toFixed(2)}℃`);
      console.log(`湿度: ${weather_data.main.humidity}%`);
      console.log(`風速: ${weather_data.wind.speed}m/s`);
  } catch (error) {
    console.log("エラーが発生しました。郵便番号を確認してください。");
  }
}

// 入力した郵便番号を受け取った後、インターフェイスを閉じる
rl.question("郵便番号を入力してください（半角数字7桁）: ", (zip) => {
  // 郵便番号が7桁の半角数字であるかをチェックする
  if (!zip || isNaN(zip) || zip.length !== 7) {
    console.log("郵便番号は半角数字7桁で入力してください。");
  } else {
    const formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
    console.log(`入力された郵便番号: ${formatted_zip}`);
    getWeather(formatted_zip);
  }

  rl.close();
});
