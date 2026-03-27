const aadharShivam= Symbol("aadhar")
const aadharAjay= Symbol("aadhar")

console.log(typeof aadharShivam)
console.log(typeof aadharAjay)
console.log(aadharShivam === aadharAjay)
console.log(aadharShivam.toString())
console.log(aadharShivam.description)

const nonIndian = Symbol() 
console.log(nonIndian.description) 
const bioMetricHash = Symbol("bioMetricHash")
const bloodGroup = Symbol("BlooGroup")

const citozenRecord = {
    name:"ved pandey",
    age:21,
    [bioMetricHash]:"hjbjbjbbjb",
    [bloodGroup]:"o+"

}
console.log(Object.keys(citozenRecord))
console.log(Object.getOwnPropertySymbols(citozenRecord))
const RTIQuery = {
    queries:["Infra budget ", "Ration Card " , "Education Budget"],
   [Symbol.iterator] () {
    let index = 0 
    const queries = this.queries
    return{
        next(){
            if(index < queries.length){
                return {value:queries[index++], done:false};

            }
            return {value:undefined, done:true}
        }
    }

   }
}

for(const query of RTIQuery){
    console.log(`Filing RTI : ${query}`)
} 