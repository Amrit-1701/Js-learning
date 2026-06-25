//to run current context we use THIS keyword
//arrow func do not use this keyword
const user = {
    name: 'amrit',
    price: 999,

    welcomeMess: function () {
        console.log(`${this.name}, welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMess()
// user.name='annie'
// user.welcomeMess()

//console.log(this); //gives {} in node environment

// function chai(){
//     let name:'amrit'
//     console.log(this.name); // gives undefined as it does not work in funct

// }
// chai()

// +++++++++++ ARROW +++++++++++
const chai = () => {
    let name = 'amrit'
    console.log(this.name); //undefined
}
// chai()

//Explicit return
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

//Implicit return
const addtwo = (num1, num2) => (num1 + num2)
//if we use {} then we have to use return keyword but if we use () the no need 

console.log(addtwo(3, 8));
