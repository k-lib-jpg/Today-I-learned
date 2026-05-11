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

#既存のコンテナの流用

Up状態のコンテナに任意のコマンドを実行させるコマンド
docker container exec {既存コンテナ名} {実行したいコマンド}

イメージからコンテナを新規作成し、コマンドを実行する
docker container run -it {イメージ名} {実行したいコマンド}

既存のコンテナで、コマンドを実行する
docker container exec -it {コンテナ名} {実行したいコマンド}

#その他

イメージの詳細情報を表示するコマンド
docker image inspect {イメージ名}

コンテナを起動して任意のコマンドを実行させるコマンド
docker container run {イメージ名} {実行したいコマンド名}
