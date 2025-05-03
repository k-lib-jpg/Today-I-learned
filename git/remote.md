#リモートの情報を確認（設定しているリモートリポジトリの内容を確認する。下はURLの表示）

git remote
git remote -v

#リモートリポジトリの内容を追加する（リモートリポジトリを複数登録したいとき使う。下はtutorialというショートカット名でリモートリポジトリを登録する）

git remote add （リモート名）
git remote add tutorial (guthubのURL)

#リモートから情報を取得する（フェッチ）

git fetch （リモート名）
git fetch origin

#リモートから情報を取得する（プル　リモートから情報を取得してマージまでを一度にやりたいとき）

git pull （リモート名） （ブランチ名）
git pull orogin master
上記の省略版
git pull

