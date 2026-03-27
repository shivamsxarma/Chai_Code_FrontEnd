const pritviRaj = {
    name:"prithviraj",
    generation:"grandFather",
    cookTraditional(){
        return `${this.name} cook an ancient family recipie`
    }
}

const raj = Object.create(pritviRaj)
raj.name="raj"
raj.generation="father"
raj.runbusiness=function(){
    return`${this.name} runs the family business`
}
console.log(raj)

const ranbir = Object.create(raj)
ranbir.name="ranbir"
ranbir.generation="son"
ranbir.makefilms = function(){
    return `${this.name} directs a blockbuster film`

}
console.log(ranbir.makefilms())
console.log(ranbir.runbusiness())
console.log(ranbir.cookTraditional())
// console.log()

Array.prototype.last =function(){
    return this[this.length-1]
}
console.log([1,2,3].last())
console.log(["ANI","SHI","CH"].last())


Array.prototype.mapTwo = function(){
    this
}