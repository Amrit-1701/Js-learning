let score="6ab5" //give Nan
let score1=null //give 0
let score2=undefined //give NaN
let sc=true //give 1

//cann't change in num so chek

console.log(typeof score)

let vaalInNum=Number(score)
console.table(typeof vaalInNum)
console.log(vaalInNum)

let isLoggedIn=1

let boolIsLogg=Boolean(isLoggedIn)
console.log(boolIsLogg)

/*example-
   "": false
   "df": true
*/

let someNum=556

let conStr=String(someNum)
console.log(typeof conStr)
console.log(conStr)

/*
null-null
undefine-undefine
num-str
*/

// let a = 70;
// console.log(a++); // outputs 70, the old value of a, but a will be 71 afterwards
// console.log(a)    // outputs 71; no matter how you increment, after the increment, the value has changed

let a = 77;
console.log(++a); // outputs 70, the old value of a, but a will be 71 afterwards
console.log(a)    // outputs 71; no matter how you increment, after the increment, the value has changed
