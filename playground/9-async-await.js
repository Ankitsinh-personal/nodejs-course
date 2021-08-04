
//async => then it will return promises
// const doWork = () => {
    
// }
// console.log(doWork());  // undefined

const add = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('num must be non-negative')
            }
            resolve (a + b);
        }, 2000);
    })
}

const doWork = async () => {
    const sum = await add(1,49)
    const sum1 = await add(sum,49)
    const sum2 = await add(sum1,1)
    return sum2

    //all function run after return value
}
//await and async solve promises concept to easy
//not use await => return promises object
// console.log(doWork());  // if use async => return promises => Promise { undefined } if not  anything return

doWork().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e.message);
})
// be honeswt with youyr self


