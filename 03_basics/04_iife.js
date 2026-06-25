// Immediately Invoked Function Expression (IIFE)
//global scope var declaration ke pollution se prblm na ho to use kia

(function chai() {
    //named iife
    console.log("hello student");

})();//to run this code immediately 
//always use ; after this

((name) => { //unnamed iife
    console.log(`hello ${name}`);

})("amrit");

//chai()