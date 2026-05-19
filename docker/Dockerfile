#dockerfileの書き方
FROM ubuntu:20.04

#RUNの後ろにコマンドを入力することで任意のコマンドを実行できる
RUN apt update

#appというディレクトリを作成し、その下にhello.txtファイルを作成する
COPY ./hello.txt /app/

#CMDでデフォルトコマンドを設定できる（Dockerfileで1度しか使えず、複数あると最後ののみ有効）
CMD ["ls", "-la"]
