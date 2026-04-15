//数値や文字列をenumを使うことでまとめることができる

#数値列挙 enunm + 宣言したい変数
enum ZeroOrOne {
  Zero = 0,
  One = 1,
}
const zeroOrOne: ZeroOrOne = 0; 

 #文字列列挙

enum Ports {
  USER_SERVICE = "8800",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8888"
}
