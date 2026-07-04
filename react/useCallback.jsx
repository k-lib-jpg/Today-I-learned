//アロー関数は毎回新しい関数を生成しているとみなされ、memoで囲んでいてもpropsが変化したという判定になっている。それを防ぐための仕組みがuseCallbackである
//例

import { useState, useCallback } from 'react';
import { ChildArea } from './ChildArea';

export default function App() {
  console.log('App');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  );
}
