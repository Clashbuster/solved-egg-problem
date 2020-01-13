
//just making some pretty eggs
class Egg {
    constructor(height){
        this.breaksAt = height;
        this.broken = false;
    }

    breakEgg(){
       this.broken = !this.broken 
    }

    checkStatus(){
        if(this.broken === true){
            console.log('this egg is broken')
        } else {
            console.log('this egg survived the fall')
        }
    }
}

// unknown break limit per runtime
const breakHeight = Math.floor(Math.random()*100)

//two eggs with same break limit
let egg1 = new Egg(breakHeight)
let egg2 = new Egg(breakHeight)

for(let i = 0; i < 100; i++){
    //drop egg
    if (i === egg1.breaksAt){
        egg1.breakEgg()
        egg1.checkStatus()
        console.log(`All yer eggs will survive a maximum height of ${i - 1} floors`)
        break;
    }
}
