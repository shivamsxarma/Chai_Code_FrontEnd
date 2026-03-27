function TataCar(chassisNumber,modelname)
{
    this.chassisNumber=chassisNumber;
    this.modelname = modelname;
    this.fuelLevel = 100;
}

TataCar.prototype.status=function()
{
    return`Tata ${this.modelname} #${this.chassisNumber} : Fuel : ${this.fuelLevel}`
}

const car1 = new TataCar("MH- 101", "Nexon")
const car2 = new TataCar("DL-202","Harrier")

console.log(car1.status())
console.log(car2.status())

