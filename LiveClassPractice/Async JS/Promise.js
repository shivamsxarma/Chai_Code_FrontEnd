// // pending , done (fulfill , resolve), nope (not , reject , nhii)

// const promise = new Promise((res , rej) => {
//     setTimeout(()=>{
// rej(new Error("chaicode"))
//         //  res("chaicode");

//     },2000)
   
// })
// console.log(promise)
// // setTimeout(()=>{
// //     console.log(promise)
// // },3000);

// // const myFunction = value =>{
// //     console.log(value)
// // }

// // promise.then((value) =>{
// //     console.log(value)
// // })

// promise
// .then((data) => {
//      newData = data.toUpperCase();
//      return newData;
// })
// .then((data) =>{
//     return data + ".com";
// })
// .then(console.log)
// .catch((error) => console.log(error))
   
    
    
//     // .catch((error) => console.log(error))


const fast  = Promise.resolve("fast");
console.log(fast)

const allPromise = Promise.allSettled([
    Promise.resolve("chai"),
    Promise.resolve("code"),
    Promise.reject("Error"),
])

const hPromise = new Promise((res , rej) => {
    setTimeout(() => {
        res("masterji");
    } , 3000)
})

async function nice() {
    try{
    const result = await hPromise;
    console.log(result) 
}catch(error){
    console.log("error aa gaya")
}
    }


nice();

// const newresult = await hPromise;
// console.log(newresult)