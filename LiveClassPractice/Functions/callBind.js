//call and apply => basic chef (kitchen)
//bind => return a new function 




function cookDish(ingredient, style){
    return `${this.name} prepares ${ingredient} in ${style} style: `

}

const sharmaKitchen = {name : "sharmaji kitchen"}
const guptaKitchen = {name : "gupta ji Kitchen"}
console.log(cookDish.call(sharmaKitchen, "paneer", "mexican"))

const guptaOrder = ["chole khulche", "punjabi Dhaba"]
console.log(cookDish.apply(guptaKitchen,guptaOrder))

const bills = [100,30,45,200]
// Math.max.apply(null,bills)
Math.max(...bills)
console.log(bills)

function reportDelivery(location , status){
    return `${this.name} at ${location}: ${status}`
}

const deliveryBoy = {name:"ranverr"};
console.log("call:", reportDelivery.call(deliveryBoy,"lyari", "ordered"));
console.log("Apply:", reportDelivery.apply(deliveryBoy,["mars", "pickUp"]));
console.log(("Bind:" , reportDelivery.bind(deliveryBoy, "London" , "What")));

const bindReport = reportDelivery.bind(deliveryBoy)
console.log((bindReport("hii","how")))