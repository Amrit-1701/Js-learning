class User{
     constructor(username){
        this.username=username
     }
     logMe(){
        console.log(`Username is ${this.username}`)
     }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }

    addCourse(){
       return `new course is taken by ${this.username}`
    }
}

let chai=new Teacher('amrit','jgje@gmal.com','ptnr')
console.log(chai.addCourse())