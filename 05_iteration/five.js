//

const coding = ['java', 'cpp', 'ruby', 'js', 'react']

// coding.forEach( function (item){
//     console.log(item);

// } )

// coding.forEach((item)=>{
//     console.log(item);

// })


// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe) //only reference no execute


coding.forEach((item, index, arr) => {
    // console.log(item,index,arr);
})


const myCoding = [
    {
        langName: 'javascript',
        landFileName: 'js'
    },
    {
        langName: 'python',
        landFileName: 'py'
    },
    {
        langName: 'c++',
        landFileName: 'cpp'
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);

})