// .call keyworrd is use to hold the reference of first call function
//.call() is a method used to call a function immediately and explicitly set the value of this

function setUsername(username){
    //complex DB calls
    this.username=username
}

function createUser(username,pass,email){
    setUsername.call(this,username)
    //we use .call to hold the reference in setUsername func and this parameter so it uses the this of this func and store data  
    this.email=email
    this.pass=pass
}


let userOne = new createUser("amrit","264tg","ghvtdd@gmail.com")
console.log(userOne)