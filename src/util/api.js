
// 发送ajax请求后返回一个0-20的随机数

const randomNumber = (max) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max + 1)))
        }, 1000);
    })
}

export default {
    randomNumber
}