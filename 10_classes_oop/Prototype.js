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
myHero.myName()
heroPow.myName() // this show error as we cannt access by object if it extend through array