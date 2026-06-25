// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// {} this make a scope so it do no use outside it and if we use var then we can use but it is not good for future 
// console.log(`User power: ${power}`);


const balance = 700

//in single line
//if (balance > 500) console.log("test"),console.log("test2");

// if (balance > 100 && balance <= 500) {
//     console.log("less than 500");
// } else if (balance > 500 && balance <= 750) {
//     console.log("less than 750");

// } else if (balance > 750 && balance <= 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}