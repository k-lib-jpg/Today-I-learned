#クラス・継承
 クラスとは、共通の型を持つデータの分類のこと。
 オブジェクトというのは、クラスの中にある実体のこと。
 書き方としては、classファイルに記入。
 
 
 kirishima = Person("Kirishima", 15)
 クラスで定義したものを使うには、kirishima = Person("Kirishima", 15)のようにインスタンス化する必要がある。
 
 継承とは、スーパークラスで定義したクラスをサブクラスを定義した際に流用することを言う。
 スーパークラス
 class Person:
     def __init__(self, name, age):
         self.name = name
         self.age = age
 
     def add_age(self, year):
         self.age += year
 
 サブクラス
 class Programmer(Person):
     pass
