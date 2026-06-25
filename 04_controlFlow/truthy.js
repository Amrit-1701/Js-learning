const userEmail = []
// if (userEmail) {
//     console.log("got email");

// }else{
//     console.log("no email");

// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { // for check array if empty or not
//     console.log("Array is empty");
// }


// const emptyObj={} //checking if object is empty or not

// if((Object.keys(emptyObj)).length===0){
//     console.log("obj is empty");
// // (Object.keys(emptyObj) this gives the keys in array from the object so we check the given array length
// }


//false==0  //true
//false=="" //true
//0=="" //true

//Nullish Coalescing Operator (??) : null undefined

let val1
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15
var1 = null ?? 10 ?? 15

console.log(var1);

//Terniary operation

//condition ? true : false

let a=2
a<5 ? console.log("yes") : console.log("no");

