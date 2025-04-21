//App.jsx
//useStateをreactからインポートする必要がある
import { useState } from 'react';
import { ColorfulMessage } from './component/colorfulMessage';
//分割代入[state, setState]と書き、状態の変化を表現できる
//クリックすることでnumからsetNum関数内の変化が起きる
//useStateは関数コンポーネントの一番上に書く決まりがある  
export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

//main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


