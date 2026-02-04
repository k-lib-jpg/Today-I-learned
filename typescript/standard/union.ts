  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum)

  let strOrNumOrbool: string | number | boolean = 'Hello';
  strOrNumOrbool = true;
  console.log(strOrNumOrbool)

  let helloOrNumOrbool: 'Hello' | number | boolean = 'Hello';
  strOrNumOrbool = true;
  console.log(helloOrNumOrbool)

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello'

  type DayOfWeek =
  | 'Monday'
  | 'Tuesday'

  const DayOfWeek = 'MondayS'
