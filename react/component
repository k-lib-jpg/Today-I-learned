//App.jsx内にある関数コンポーネント（部品）をエクスポートすることでmain.jsxで使用することができる
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

//App.jsx
export const App = () => {
  return (
    <>
      <h1>こんにちわ</h1>
      <p>お元気ですか</p>
    </>
  );
};
