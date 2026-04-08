function PrepareOrderCB(dish,CB){
    setTimeout(() => CB(null , {dish , status:"prepared"}),100)
}
function pickupOrderCB(order,CB){
    setTimeout(() => CB(null , {...order , status:"PickedUP"}),100)
}
function deliverOrderCB(order,CB){
    setTimeout(() => CB(null , {...order , status:"delivered"}),100)
}

// PrepareOrderCB("Biryani" , (err, order) => {
//     if(err) return console.log(err)
//         pickupOrderCB(order, (err , order)=>
//     {
//         if(err) return console.log(err)
//             deliverOrderCB(order,(err,order =>
//         {
//             if(err) return console.log(err)
//                 console.log(`${order.dish} : ${order.status}`)
//         }))
//     })
// })

// promises -  pending , fullfilled , rejected

//
function preparedOrder(dish){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!dish){
                reject(new Error("no dish is there"))
                return 
            }
            console.log(`${dish} is ready`)
            resolve({dish,status:"prepared"})
        } ,100)
    })
}
function pickedOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
     
            
            console.log(`${dish} is ready`)
            resolve({...order,status:"prepared"})
        } ,100)
    })
}
function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`${order} is ready`)
            resolve({...order,status:"prepared"})
        } ,100)
    })
}

preparedOrder("paneer Tikka")
.then(order => pickedOrder(order))
.then(order => deliverOrder(order))
.catch()
