function bootNavigation(mapLoaded){
    try {
        console.log(`is Navigation loaded ${mapLoaded}`)
        if(!mapLoaded){
            throw new Error("Map was not passed in this Functiomm")
        }
        return "Nav_ok"
    } catch (error) {
        console.log(error)
        console.log(`Navigation failed ${error.message}`)
        
    } finally{
        console.log("Navigation sequence completed")
    }
}
const status1 = bootNavigation(true);
console.log(`result : ${status1}`)
