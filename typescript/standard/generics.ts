const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  

  const numArry = repeat<number>(10, 3);
  const strArry = repeat<string>("hello", 3);
};

export default Example;
