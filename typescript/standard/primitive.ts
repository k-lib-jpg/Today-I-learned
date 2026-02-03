 //変数の後に「:型名」が入る！

  //string型
  let str: string = "Hello"
  str = "Bye";
  console.log(str);

　//number型
  let num: number = 1;
  num = 2;
  console.log(num);

　//bigint型
  let bignum: bigint = 102n;
  bignum = 1000n;
  console.log(bignum);

　//boolean型
  let bool: boolean = true;
  console.log(bool);

　//array型
　let array: number[] = [1, 2, 3];
　let array: Array<number> = [1, 2, 3];
　console.log(array[1])

　//tuple型
　let x: [string, number];
　x = ["Hello", 10]
　x = [10, "Hello"] //error

　//any型
　let whatever: any = 0;
　console.log(whatever);

　//unkwown型
　let probablyNumbers: unkwown = 2;
　console.log(probablyNumbers);

　//void型 undefinedしか代入できない
　let unusable: void = undefined;

　//null型、undefined型
　let n: null = null;
　let u: undefined = undefined;
