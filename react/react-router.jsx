//react routerとはページ遷移時にHTMLをサーバーから再び取得することなく、Javascriptで処理することで、ページ読み込みを早くする技術

//セットアップ
npm install react-router

//例
// main.jsx
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// App.jsx (バージョン6以降）
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      {/* Switch から Routes に変更 */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/page1/*"
          element={
            <Routes>
              {/* /page1 のとき */}
              <Route path="/" element={<Page1 />} />
              {/* /page1/detailA のとき */}
              <Route path="/detailA" element={<Page1DetailA />} />
              {/* /page1/detailB のとき */}
              <Route path="/detailB" element={<Page1DetailB />} />
            </Routes>
          }
        />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



