const myArray=[0,1,2,5,3,5]
//in js arr are resizable can have diff datatype not associative
//zero indexed js array-copy operation make shallow copy(share same reference)

const myHero=['ben10','iron','spider','bat','thor']

const myArr1=new Array(1,2,3,4,5,6,7)
//console.log(myHero[0]);

//Arrar methid
// myArr1.push(5)
// console.log(myArr1);

// myArr1.pop()

myArr1.unshift(20) // add in 0 index
myArr1.shift() //remove

//console.log(myArr1.includes(10));
//console.log(myArr1.indexOf(4));

const myArr2=myArr1.join()

// console.log(myArr1);
// console.log(typeof myArr2);

//slice, splice

console.log('A',myArr1);

const myn1=myArr1.slice(1,5)
//const myn2=myArr1.splice(1,5)

console.log(myn1);

console.log('B',myArr1)
//console.log(myn2);

