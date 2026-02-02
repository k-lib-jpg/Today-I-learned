// 非同期処理（await/async）
let a = 0;

init();
async function init() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 1;
            resolve(a)
        }, 2000);
    })
        console.log(result);
    }

    
