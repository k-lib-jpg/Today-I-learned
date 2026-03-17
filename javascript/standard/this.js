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


// 関数におけるthis
// アロー関数以外におけるthis

