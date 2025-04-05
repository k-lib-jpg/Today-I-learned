#typescript

typescriptの導入と動作確認のやり方を学んだ。
まず、以下のコマンドでインストール
$npm insatll -g typescript

その後、Typescriptのプロジェクトの雛形を作るために、以下のコマンドでtsconfig.jsonを作成
$tsc --init

その後、以下のようなtest.tsのファイルを作成する
export function test() {
  return "test"
}

最後に、以下のコマンドで実行
$tsc

またtypescriptは型指定が厳しいプログラミング言語であるが、tsconfig.jsonの設定をいじれば、型指定の厳密さをいじることもできる。
