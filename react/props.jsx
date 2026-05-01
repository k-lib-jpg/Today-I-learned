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

//App,jsx 親コンポーネント
import { ColorfulMessage } from './component/colorfulMessage';

export const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//colorfulMessage.jsx 子コンポーネント
export const ColorfulMessage = ({ color, children }) => {
  const contentStyle = {
    color,
    fontSize: '18px',
  };
//{children}はタグに囲まれた文字を返す手段
  return <p style={contentStyle}>{children}</p>;
};



