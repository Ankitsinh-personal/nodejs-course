// const add = (a,b,callback) =>{
//     setTimeout(() => {
//         callback (a + b);
//     }, 2000);
// }

// add(1,4,(sum)=>{
//     console.log(sum);
// })

//this function return promises
const add = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve (a + b);
        }, 2000);
    })
}

// add(1,4).then((sum)=>{
//     console.log(sum);

//     add(sum,4).then((sum2)=>{
//         console.log(sum2);
//     }).catch((e)=>{
//         console.log(e);
//     })

// }).catch((e)=>{
//     console.log(e);
// })

//here nested promise => use two times error
//resolved them to use promises chaining

add(1,4).then((sum)=>{
    console.log(sum);
    return add(sum,4)   //return promises => out of function

}).then((sum2)=>{
    console.log(sum2);
    
}).catch((e)=>{
    console.log(e);
})