class User{
     constructor(username){
        this.username=username
     }
     logMe(){
        console.log(`Username is ${this.username}`)
     }
   static createId(){
      console.log('1234') 
     }
   }
//Static methods and properties belong to the class, 
// not to its instances, so they must be accessed using the class name (e.g., User.info()).

const amrit=new User('amrit')
//console.log(amrit.createId()) //error as it is static

class Teacher extends User{
   constructor(username,pass){
      super(username)
      this.pass=pass
   }
}
const iphone=new Teacher('amrit','4568')
iphone.logMe()
iphone.createId() // erro as createId is static 
Teacher.createId() //this will work as You access a static property or static method using the class name, not an object.