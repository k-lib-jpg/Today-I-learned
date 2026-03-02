#||（パイプ）と&&（アンパサンド）について

#||とは
const flag1 = true;
const flag2 = false;
#出力　1か2はtrueになります
if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

#&&とは
const flag3 = true;
const flag4 = true;
#出力　3か4はtrueになります
if (flag3 && flag4) {
  console.log("1も2もtrueになります");
}

#左側がtruthyであれば左側を返す
const num = 1;
const fee = num || "右を返す";
#出力　1
console.log(fee);

#左側がfalsyであれば左側を返す
const num = 0;
const fee = num && "右を返す";
#出力　0
console.log(fee);
