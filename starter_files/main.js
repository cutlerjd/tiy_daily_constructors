//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status,color,hungry,owner) {
    this.status = status
    this.color = color
    this.hungry = hungry
    this.owner = owner
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog("normal","black",false,undefined)
let moonshine = new Dog("normal","black",true,undefined)
let atticus = new Dog("normal","black",true,undefined)
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
    this.cool = cool
}

Human.prototype.pet = function(dog){
    dog.status = 'happy'
    return dog;
}
Human.prototype.feed = function(dog){
    dog.hungry = false
    return dog
}
// Instances of Human
// Needed: mason, julia

let mason = new Human(false)
let julia = new Human(true)

//Dog needs:
// status property (and happy)
// color property
// hungry boolean
// owner property takes object



//Human needs
//function pet (takes dog) returns dog status updated to happy
//function feed (takes dog) sets hungry false
// property cool