//userefはコンポーネントの値を保持する仕組みである。usestateと違いとしては値が変化しても再レンダリングされないことである。

import { useState, useRef } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  // インターバルIDを保持するためのref
  const intervalRef = useRef(null);
	
	// タイマーを開始
  const startTimer = () => {
	  // タイマーがすでに動いている場合は何もしない
    if (intervalRef.current !== null) return;
		// 1秒ごとにsecondsの値を増やすインターバルを設定
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };
  
	//タイマーを停止
  const stopTimer = () => {
	  // インターバルが設定されている場合のみ停止処理を行う
    if (intervalRef.current !== null) {
	    // インターバルをクリアしてタイマーを停止
      clearInterval(intervalRef.current);
      // インターバルIDをリセットして無効化
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;
