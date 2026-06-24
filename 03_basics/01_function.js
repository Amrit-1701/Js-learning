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

console.log(calcCartPrice(100,200,500,230));
