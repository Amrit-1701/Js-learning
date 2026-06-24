function sayMyName() {
    console.log("a");
    console.log("m");

}
//sayMyName()

function addnum(num1, num2) { //parameter the required one or while defining func
    //console.log(`adittion result is ${num1+num2}`)
    let result = num1 + num2
    return result //after return nothing happen in func
}

//if we use log in funtion the val is not storing in the esult file bt when we use return in function it solve the prblm
const result = addnum(78, 56) //argument the provided data during func call
//console.log(result);

function loginUserMess(username) {
    if (username === undefined) {
        console.log("plz enter username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMess('amrit'))


function calcCartPrice(...num1) { //rest operator
    return num1
}

// function calcCartPrice(val1,val2, ...num1) {
//     return num1
//   //o/p [ 500, 230 ] bcz val1 and val2 takke first two element so it only shows the left one
// }

//console.log(calcCartPrice(100,200,500,230));

const user={
    username:'amrit',
    price:149
}


//console.log(user.hasOwnProperty('username'));
//console.log(user.hasOwnProperty('price'));

function handleObj(anyObj){
    console.log(`name is ${anyObj.username} and price of course is ${anyObj.price}`);
    
}

//handleObj(user)
     //this create error if in obj instead of price the codr uses prices so it returns undefined s we use the check code first

// handleObj({
//     username:"amrit",
//     price:"399"
// })

const myNewArr=[200,100,400,500]

function returnArrEl(getArr){
    return getArr[1]
}
// console.log(returnArrEl(myNewArr));
console.log(returnArrEl([100,200,400,500]));




