import express, { Request, Response } from 'express';

const app = express();
app.use(express.json()); // JSON形式のリクエストボディを解析するミドルウェア

interface User {
  id: number;
  name: string;
}

// 模擬データベース
let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// 1. GET: サーバーからデータを取得する
app.get('/users', (req: Request, res: Response) => {
  res.status(200).json(users);
});

// 2. POST: サーバーにデータを送信して新規作成する
app.post('/users', (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser: User = {
    id: users.length + 1,
    name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 3. PUT: サーバーにあるデータを全体的に更新・置き換えする
app.put('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { id, name };
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 4. PATCH: サーバーにあるデータの一部だけを更新する
app.patch('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const user = users.find(u => u.id === id);

  if (user) {
    if (name) user.name = name;
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 5. DELETE: サーバーにあるデータを削除する
app.delete('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length < initialLength) {
    res.status(204).send(); // コンテンツなし
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
