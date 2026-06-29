// let myNmae="amrit   "
// console.log(myNmae.truelength)

let myHero=['thor','spiderman']

let heroPow = {
    thor:'hammer',
    spiderman:'web',

    getSpiderPow:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.amrit = function(){
    console.log('amrit is present')
} //this shows i we add direct through object then it give acces to both array and object

Array.prototype.myName=function(){
    console.log("amrit my name")
}

//heroPow.amrit()
// myHero.amrit()
//myHero.myName()
    //heroPow.myName() // this show error as we cannt access by object if it extend through array

    
// +++++++++ Inheritence ++++++++++++

const user={
    name:'amrit',
    pass:"jnff65"
}

const Teacher ={
    makeVd: true
} 

const teachingSupport = {
    isAvailable:false
}

const TASupport={
    makeAssign:"JS Assignment",
    fullTime:true,
    __proto__:teachingSupport
}

Teacher.__proto__=user

//console.log(TASupport.isAvailable)

//modern Syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUsername= "Joanathan  "


String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

// anotherUsername.trueLength()
// "amrit".trueLength()
// "jai ho ".trueLength()

