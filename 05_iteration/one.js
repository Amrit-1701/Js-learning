//for

for (let index = 0; index < 10; index++) {
    const element = index;

    if (index == 5) {
        // console.log('best choice');
    }
    // console.log(element);

}

//for (let i = 0; i <= 7; i++) {
//     //console.log(`outer loop val ${i}`);
//     console.log(`Table  of ${i}`);

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner looop val ${j} and outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }


// let arr=['flash','butcher','batman']
// for(let i=0;i<arr.length;i++){
//     let el=arr[i]
//     console.log(el);

// }


// BREAK and CONTINUE

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log('detected 5');   
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log('detected 5');   
        continue; //ignore the num and start from next one
    }
    console.log(`value of i is ${i}`);
    
}
