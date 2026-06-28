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


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'amrit', email: 'jsfe@gmail.com' })
        } else {
            reject('error: something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user)
        return user.username  //Because whatever you return from one .then()
        //becomes the input of the next .then().
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        //console.log(error)
    }).finally(() => {
        //console.log('promise is either resolved or rejected') 
    })


//Why do we chain .then()?
// Because each .then() can process the result from the previous step and pass a new value to the next step. 
// This allows us to perform multiple asynchronous operations(which take time and the sys do no wait for it) in sequence without nested callbacks.


//+++++++ async & await ++++++++
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: 'amrit', email: 'jsfe@gmail.com' })
//         } else {
//             reject('error: Js went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// } //promiseFive is a Object so we do not consume it like a function (promiseFive())

// consumePromiseFive()


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //we use await bcsz this .json convrsion take time and if we do no use it the code show error
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
//getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
