import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

export const page1Routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/page1',
    element: <Page1 />,
    // Page1配下の子ルートを定義
    children: [
      { path: 'detailA', element: <Page1DetailA /> },
      { path: 'detailB', element: <Page1DetailB /> },
    ],
  },
  {
    path: '/page2',
    element: <Page2 />,
  },
];
