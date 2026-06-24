let a = 100
const b = 30
var c = 40

if (true) {  //block scope
    let a = 10
    const b = 20
    //var c=30
    //console.log(`inner: ${a}`);

}

//console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = 'amrit'

    function two() {
        const web = 'yt'
        // console.log(username);
    }
    //console.log(web);
    two()
}
// parent child se saman nhi mang skta

one()
// line of execution: one() -> .log(web) error -> two() -> .log(name)

if (true) {
    const name = "amrit"
    if (name === "amrit") {
        const web = "yt"
        console.log(name + web);
    }
    //console.log(web);  //ERROR out of scope

}
//console.log(name);  // ERROR out of scope

//  +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}
//addone(5)

addtwo(5)
const addtwo = function(num){ // ths is called EXPRESSION
    return num+2
}
//addtwo(5)

