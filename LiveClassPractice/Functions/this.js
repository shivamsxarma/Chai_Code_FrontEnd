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

const filmDirector = {
    name:"sanjay leela",
    cast:["ranveer", "deepika", "priyanka"],

    announceCast(){
        this.cast.forEach((actor) =>
        {
            console.log(`${this.name} introduced ${actor}`)
        })
    }
}
// filmDirector.announceCast()

const filmSet = {
    crew:"spot boys",
    prepareProps(){
        console.log(`outer this .crew : ${this.crew}` )
        function arrangeChairs(){
            console.log((`inner this crew: ${this.crew}`))
       
        }
             arrangeChairs();
             const arrangeLights = ()=>{
                console.log(`Arrow this .crew :${this.crew}`)
             }
             arrangeLights()
    }
}

filmSet.prepareProps();



const actor = {
    name:"ranverr",
    bow(){
        return`${this.name} take a bow `
    }
}

const detachedBow = actor.bow
console.log(detachedBow())