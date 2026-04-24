#jsxとはreact特有のタグ内の記法である
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

#Appアロー関数内にあるh1タグとpタグ内がある。このような記法をjsxといい、タグ内のワードが表示される
#<></>で囲まなければならないというルールがある
#タグ内はjs形式で{}に入力しなければいけない
const App = () => {
 const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
    margin: 100,
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちわ</h1>
      <p style={contentStyle}>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
