class cricketer{
    constructor(name,role){
        this.name=name
         this.role = role
         this.matchesPlayed=0
         this.stamina= 100

    }
    introduce(){
        return `${this.name} the ${this.role} matchesPlayed ${this.matchesPlayed} stamina${this.stamina}`

    }
    
}
const player1 = new cricketer("virat", "Batman")
const player2 = new cricketer("Bumrah", "Bowler")

console.log(player1.hasOwnProperty("name"))
console.log(typeof cricketer)

class Debutant{
    constructor(name) {
        this.name = name 
        this.walkOut = () => `${this.name} wals out to bat for the first time`
    }
}

const Debutant1 = new Debutant("Shubman")
const somethingFromLastClass = Debutant1.walkOut
const Debutant2 = new Debutant("yashasvi")
console.log(Debutant1.walkOut === Debutant2.walkOut)
// console.log(somethingFromLastClass())