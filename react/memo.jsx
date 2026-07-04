//memoとはprops自身が変更されない限り再レンダリングしないようにする仕組みのことである
//下の例でいうと親コンポーネントの変化によって子コンポーネントも一緒に再レンダリングされるのを防いでいる

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('ChildrenAreaがレンダリングされた');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

