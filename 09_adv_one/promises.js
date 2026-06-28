//if response aaya so .then() me aega
//nhi aya (error hai) so .catch() me aega
//or .finally() me hamesha aega chahe response aaye ya error aaye

const promiseOne = new Promise(function (resolve, reject) {
    //do an asynchronous task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('async task is complete')
        resolve() // this is use to connect the promise with .then() method
    }, 1000)
})

// .then is related to resolve and catch is related to reject
promiseOne.then(function () {
    console.log("promise consumed")
})