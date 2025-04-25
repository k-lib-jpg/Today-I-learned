#コンテナの作成・実行方法

イメージからコンテナを作成し起動するコマンド
docker container run { イメージ名 }

ローカルマシンに存在するイメージを表示
docker container ls

起動中のコンテナを止めるコマンド
docker container stop { コンテナ名 }

コンテナを再起動するコマンド
docker container restart { コンテナ名 }

コンテナを破棄する
docker container rm { コンテナ名 }
