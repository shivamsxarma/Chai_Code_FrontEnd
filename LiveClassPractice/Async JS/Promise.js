// pending , done (fulfill , resolve), nope (not , reject , nhii)

const promise = new Promise((res) => {
    setTimeout(()=>{
         res("chaicode")
    },2000)
   
})
console.log(promise)
// setTimeout(()=>{
//     console.log(promise)
// },3000);

// const myFunction = value =>{
//     console.log(value)
// }

// promise.then((value) =>{
//     console.log(value)
// })

promise.then(
    (data) => console.log(data)).catch((error) => console.log(error))