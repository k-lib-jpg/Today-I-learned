// 非同期処理
// settimeout
function taskA() {
    console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
    console.log("タスクBを実行 at " + Date.now());
}
function taskAsync() {
    console.log("非同期のタスクを実行 at " + Date.now());
}

taskA();
setTimeout(() => {
    taskAsync();
}, 1000);
taskB();

// promise
let a = 0;
new Promise((resolve, reject) => {
    setTimeout(() => {
      a=1;
      resolve(a)
    }, 2000);
}).then((b) => {
  console.log(b);
}).catch((c) => {
  console.log('catchが実行', c)
})

