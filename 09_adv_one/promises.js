//if response aaya so .then() me aega
//nhi aya (error hai) so .catch() me aega
//or .finally() me hamesha aega chahe response aaye ya error aaye


// const promiseOne = new Promise(function (resolve, reject) {
//     //do an asynchronous task
//     //DB calls, cryptography, network
//     setTimeout(function () {
//         //  console.log('async task is complete')
//         resolve() // this is use to connect the promise with .then() method
//     }, 1000)
// })
// // .then is related to resolve and catch is related to reject
// promiseOne.then(function () {
//     //  console.log("promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()      
//     },1000)
// }).then(function(){
//     console.log('promise consumed 2');   
// })


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //resolve({username:'amrit', email:'rrf@gmail.com'})
    }, 1000)
})

// promiseThree.then(function (user) {
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'amrit', email:'jsfe@gmail.com'})
        }else{
            reject('error: something went wrong')
        }
    },1000)
})

promiseFour.then(function())

