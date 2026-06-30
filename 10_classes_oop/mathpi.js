//**can we change val of pi if not why not** 

// console.log(Math.PI)
//  Math.PI=5
//  console.log(Math.PI)
// hence we see we give new val to math.pi but it is not change 

//now we check why
let descript = Object.getOwnPropertyDescriptor(Math, 'PI')
//console.log(descript)

//as we see it returns :
// value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false  

// we can also make this global const by applyinh all this changes

const chai = {
    name: 'ind chai',
    price: '100',
    isAvailable: true,
    orderChai() {
        console.log("chai nhi hai")
    }
}

//console.log(chai)

const prop = Object.getOwnPropertyDescriptor(chai, 'name')
console.log(prop);

// Object.defineProperty(chai,'name',{
//     writable: false,
//     enumerable:false
// })
// console.log(prop);

//As we Know Object are not iterable so to iterate we use Object.entries('name')
for (let [key, val] of Object.entries(chai)) {
    if (typeof val !== 'function') {
        console.log(`${key} : ${val}`);
    }
}// if emunerable of name is false the val of name will not be iterate