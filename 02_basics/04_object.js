//const tinderUser= new Object()
const tinderUser = {
    tinderId: '125ad'
}
tinderUser.name = "Ammy"
tinderUser.isLoggIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'soe@gmail.com',
    fullName: {
        userName: {
            firstName: 'Amrit',
            lastName: "singh"
        }
    }
}

//console.log(regularUser.fullName.userName); //nesting 

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)//{}this is target ans other are source first one is targett

const obj3={...obj1, ...obj2}
//console.log(obj3);

//console.log(typeof Object.keys(obj1)); //o/p in arrays
//console.log(Object.values(obj1))
//console.log(Object.entries(obj1))

//console.log(tinderUser.hasOwnProperty('name')); //to check if it contains the property or not

const course={
    courseName:'js for beginner',
    fee:'999',
    teacher:'hitesh'
}

//console.log(course.teacher);

const{teacher:instructor}=course //(destructure) we can use teacher as diff word a
console.log(instructor);
