//Primitive

//7 types: number string boolean bigint null undefined symbol

// Reference (Non Primitive)

//array object Function
// Stack (primitive, copy provide) , Heap (non-primitive , reference provide)

let myName="aj"

let otherName = myName
otherName="jiya"

console.log(myName)
console.log(otherName) //no change in myName as it send only the copy to otherName

let user={
    email:"kjdkn@gmail.com"
}

let userOne= user
userOne.email="jfbejg2gmail.com"

console.log(user.email)
console.log(userOne.email) //it change the val