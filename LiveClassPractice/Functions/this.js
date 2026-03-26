// console.log(this)



function ranveerOnGlobalStage(){
    return typeof this;
}

// console.log(ranveerOnGlobalStage())

function ranveerOnNoScript(){
//    "use strict"
    return this;
}
// console.log(ranveerOnNoScript())

const bollywoodFilm = {
    name:"Dhurandhar",
    lead:"ranveer",

    introduce(){
        return `${this .lead} performs in ${this.name}`
    }
}

console.log(bollywoodFilm.introduce())