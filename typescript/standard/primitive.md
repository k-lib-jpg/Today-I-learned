#typescriptの特徴

typescriptはjavascriptに型定義機能を追加したもの。
javascriptを記述するときとは異なり、定義した変数の横に「:型名」を書く。
具体的なコード例はprimitive.mdに記載。
簡単に型を説明する。

#boolean型

true/falseを定義するときに使う。

#number型

前提として、javascriptと同様にtypescriptも浮動小数点値である。
number型は浮動小数点値と2、8、10、16進数を定義するときに使う。

#string型

文字列を定義するときに使う

#array型

配列、すなわち[]で囲われているものを定義するときに使う。

#tupel型

tupelという文字で定義する訳ではない。stringとnumberのような二つの型が混ざった配列を定義するときに使う。

#any型

型が不明な変数扱うときにとりあえずコンパイル通過させるときに使う。
ただ、typescriptの恩恵にあずかれないので、できるだけanyの現れないコードを使うようにする。

#unkwown型

型安全なanyを表したいときに利用する。違いがよくわからないので、後で調べる。

#void型

any型に反対で、型がまったくないことを表す。一般に値を返さない関数の戻り型として利用する。
void型が付与されたものは、undefinedしか代入できない。

#null型、undefined型

nullとundefinedを定義するときに使う。

#never型

発生し得ない値の型を表します。関数でいうと、戻り値を得られないとき、戻り型をnever型として採用できる。

#object型

非プリミティブ型を表す、boolean、string、number、symbol、null、undefinedのいずれでもないもの。
{}ブレースを使った定義では、エラーはえられない。

#
