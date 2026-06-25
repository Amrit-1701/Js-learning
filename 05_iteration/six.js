//const coding = ['js', 'ruby', 'java', 'python', 'cpp']


// let val=coding.forEach((item) => {
//     console.log(item); 

// })

//console.log(val); //undefined , forEach never return val so we can never store it in variable 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum1 = myNum.filter((num) => num >= 4)
//console.log(newNum1);

//filter return the val so we can store it in variable
//** if u use ()=>{use return in this} **

// const newNum = myNum.filter((num) => {
//     return num >= 4
// })
// console.log(newNum);

//**using forEach**
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// books.forEach((item)=>{
// console.log(item.genre);

// })

const userBook = books.filter((bk) => bk.publish > 1980 && bk.genre == 'History')
console.log(userBook);
console.log(`total num of books: ${userBook.length} `);
