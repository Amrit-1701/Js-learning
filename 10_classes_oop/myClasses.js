// ES6
// class user {
//     constructor(name, email, pass) {
//         this.name = name
//         this.email = email
//         this.pass = pass
//     }


//     encryptPass() {
//         return `${this.pass}abc`
//     }
//     changeUserNAme(){
//         return `${this.name.toUpperCase()}`
//     }
//}

    //const chai = new user('amrit','jj@email.com','1234')
    // console.log(chai.encryptPass())
    // console.log(chai.changeUserNAme())

//BTS

function User(name, email, pass){
    this.name = name
    this.email = email
    this.pass = pass
}

User.prototype.encryptPass=function(){
    return `${this.pass}abc`
}
User.prototype.changeUserNAme=function(){
     return `${this.name.toUpperCase()}`
}

const tea=new User('amrit','jj@email.com','1234')
console.log(tea.encryptPass())
console.log(tea.changeUserNAme())