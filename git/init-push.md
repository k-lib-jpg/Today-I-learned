#ローカルリポジトリの新規作成（.gitディレクトリが作成される）

git init

#リポジトリが作成しているか確認

ls -a

ls .git/
→HEAD branches config（設定ファイルがある） description hooks info objects（リポジトリの本体で、圧縮ファイル、ツリーファイルの本体がある） refs

#.gitディレクトリとは

以下のファイルで構成されるディレクトリ
・リポジトリ（圧縮ファイル、ツリーファイル、コミットファイル）
・インデックスファイル
・設定ファイル

#ディレクトリ作成、ディレクトリ移動（新規プロジェクトを作成していない場合）

mkdir (ファイル名)

cd (ファイルパス）

#gitリポジトリをコピーする

git clone (githubのurl)

#変更をステージに追加する

git add .

#変更を記録する（コミット）

git commit

git commit -m "(推奨メッセージ：変更内容と変更理由を書く）"

git commit -v

#現在の変更状況を確認する（コミットまでしてしまえば特にコミットするものないよと表示される）

git status

#変更差分を確認する（git addする前と後でコマンドが異なる、前回のスナップショットとの差分を見ている）

git diff 
git diff --staged

#変更履歴（コミット）を確認する

git log 

#ファイルの削除をする（一番下はリポジトリ上の削除）

git rm （ファイル名）
git rm -r （ディレクトリ名）
git rm --cached （ファイル名）

#ステージ上のファイル名を変更する

git mv （旧ファイル）（新ファイル）

#リモートリポジトリを新規追加する（originという名前でgithubにアップしたり取得できるようになる）

git remote add origin （githubのURL）

#githubにプッシュする（プッシュする際、ユーザー名とパスワードが求められる。-uをつけることで次回以降git pushだけでpushできる）

git push （リモート名）（ブランチ名）
git push origin main
git push -u origin main 
