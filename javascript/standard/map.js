//normal for string
//田中 山田　じゃけぇ
const nameArr = ['田中', '山田', 'じゃけぇ'];
for (let index = 0; index < nameArr.length; index++) {
   console.log(nameArr[index]);

//map example
//田中 山田　じゃけぇ
nameArr.map((name) => console.log(name));

//map example2
//['田中', '山田', 'じゃけぇ']
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

//filter example
//[1, 3, 5]
const numArr = [1, 2, 3, 4, 5];
const newNumeArr = numArr.filter((num) => {
  return num % 2 === 1; 
});
console.log(newNumeArr)
