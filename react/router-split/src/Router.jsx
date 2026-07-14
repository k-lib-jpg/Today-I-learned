import { Routes, Route } from 'react-router-dom';
import { page1Routes } from './Page1Routes';

export const Router = () => {
  return (
    <Routes>
      {page1Routes.map((route) => {
        // 子ルート（children）がある場合の処理
        if (route.children) {
          return (
            <Route key={route.path} path={`${route.path}/*`}>
              {/* 親自身のルート（/page1） */}
              <Route index element={route.element} />
              {/* 子ルート（/page1/detailA など）をさらにmapで回す */}
              {route.children.map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          );
        }

        // 通常のルート（子がない場合）
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};
