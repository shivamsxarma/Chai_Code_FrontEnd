console.log(brewPotion("healing Herbs" , 3))
function brewPotion(ingredient,dose){
    return `brew with ${ingredient} ${dose}...potion ready`
}

const mixElix = function (ingredient){

return`mixing elix with ${ingredient}`
 }

 // no own 'this ', no arguments object
 const distil = (ingredient)=>{
    return `mixing elix with ${ingredient}`
 }

 function oldBrew(){
    console.log("type :" , typeof arguments)
    console.log(arguments)
    console.log("is array : ",Array.isArray(arguments))
    const argsArray = Array.from(arguments)
    console.log(argsArray)

 }
 oldBrew("sage", "Rosemarry")