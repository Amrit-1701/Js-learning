//four-of (array specific)

const arr = [1, 2, 3, 5, 6]

for (const num of arr) {
   //console.log(num);

}

const greeting = "hello world!"
for (const val of greeting) {
   // console.log(val);

}

// ++++++++++ MAP +++++++++++

//hold val pair and remember the original insertion order of key 
//any val may be use as either key or val
//unique values

const map = new Map()
map.set('a', 'chd')
map.set('b', 'jaipur')
map.set('c', 'delhi')
map.set('d', 'punjab')
//map.set('a',"chd") // do not add this

//console.log(map);

for (const [key, val] of map) {
   //console.log(`${key} => ${val}`);

}


//for object

const myObj = {
   'game1': 'nfs',
   'game2': 'gta 6',
   'game3': 'ff'

}
// for (const [key,val] of myObj) {
//    console.log(key,val); //no iterable give error
// }

