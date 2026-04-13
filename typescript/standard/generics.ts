// ジェネリクスを使わず型注釈された関数
const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }

  // ジェネリクスを使用すると型注釈された関数を簡単に量産できる
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  

  const numArry = repeat<number>(10, 3);
  const strArry = repeat<string>("hello", 3);
};

export default Example;
