const user = {
    username: 'amrit',
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        console.log(`get all details of ${this.username}`)
        console.log(this) // give current context of the object
    }
}

// console.log(user.username);
//  //console.log(user.getUserDetails());
// user.getUserDetails()
// console.log(this) 
// this will return the empty paranthesis because it is not inside
//  any object so it will return the global context if we do this at console(google) 
// it return windows object bcz it is the global context of browser


function User(username, loginCount, signedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn,
    // console.log(this)
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this
}

const userOne = new User("amrit", 5, true)
const userTwo =  new User("ram", 10, false)

//console.log(userOne.greeting()) // val overwritten because we are not using new keyword
console.log(userTwo.constructor)

//when u use new keyword it will create a empty object call as instance
//constructor func call by new keyword