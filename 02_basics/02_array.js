const marvelHero = ['spider', 'iron', 'captain', 'thor', 'hulk']
const dc = ['superman', 'flash', 'bat']

// marvelHero.push(dc) //merge the array in array count as a one index
// console.log(marvelHero[5]);

// const allHero = marvelHero.concat(dc)

const allHero = [...marvelHero, ...dc] //spread operator
// console.log(allHero);//solve push prblm

const mergeArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //how to solve this
const realMerArr = mergeArr.flat(Infinity)

//console.log(realMerArr);

//console.log(Array.isArray('hello'));
const convertArr=Array.from('hello')
// console.log(Array.isArray(convertArr));
// console.log(convertArr);

//console.log(Array.from({name:'amrit'})); //intresting fact as it give empty bcz we have to tell if we want to convert key or val 

let score1=65
let score2=75
let score3=77
console.log(Array.of(score1,score2,score3));
