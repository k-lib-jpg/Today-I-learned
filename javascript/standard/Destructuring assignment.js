//オブジェクト
const myProfile = {
   name: 'じゃけぇ',
   age: 31,
};

//分割代入1
const { name, age } = myProfile;
const message1 = `名前は${name}です。年齢は${age}です。`;

//分割代入2
const myProfile = ['じゃけぇ', 31];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;

//分割代入4
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;

