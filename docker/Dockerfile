#dockerfileの書き方
FROM ubuntu:20.04

#RUNの後ろにコマンドを入力することで任意のコマンドを実行できる
RUN apt update

#appというディレクトリを作成し、その下にhello.txtファイルを作成する
COPY ./hello.txt /app/

#CMDでデフォルトコマンドを設定できる（Dockerfileで1度しか使えず、複数あると最後ののみ有効）
CMD ["ls", "-la"]

#環境変数の設定
ENV hello = "Hello World"

#マルチステージビルドをすることで最終的な実行環境を調整する等して、コンテナの容量を下げられる（以下だと
FROM gcc:12.2.0
WORKDIR /app
COPY /hello.c .
RUN gcc hello.COPY
CMD ["./a.out"]

FROM ubuntu:20.04
WORKDIR /app
COPY --from=compiler /app/a.out .
CMD ["./a.out"]
