// js内で特殊な動きをするグローバル変数みたいなもの。主に4つの使われ方をする
// 実行コンテキストにおけるthis
<script>
// 実行コンテキストは"Script"
console.log(this); // => window
</script>

<script type="module">
// 実行コンテキストは"Module"
console.log(this); // => undefined
</script>


// 関数宣言や関数式におけるthis
"use strict";
function fn1() {
    return this;
}
const fn2 = function() {
    return this;
};
// 関数の中の`this`が参照する値は呼び出し方によって決まる
// `fn1`と`fn2`どちらもただの関数として呼び出している
// メソッドとして呼び出していないためベースオブジェクトはない
// ベースオブジェクトがない場合、`this`は`undefined`となる
console.log(fn1()); // => undefined
console.log(fn2()); // => undefined
// メソッド呼び出しにおけるthis
const obj = {
    // 関数式をプロパティの値にしたメソッド
    method1: function() {
        return this;
    },
    // 短縮記法で定義したメソッド
    method2() {
        return this;
    }
};
// メソッド呼び出しの場合、それぞれの`this`はベースオブジェクト(`obj`)を参照する
// メソッド呼び出しの`.`の左にあるオブジェクトがベースオブジェクト
console.log(obj.method1()); // => obj
console.log(obj.method2()); // => obj

