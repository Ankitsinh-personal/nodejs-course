// setTimeout(()=>{
//     console.log("after 2 sec");
// },2000)





// const geocode = (address , callback)=>{
//     const data = {
//         longitude : 0,
//         latitude : 0
//     }
//     return data;
// }
// const data = geocode();
// console.log(data);



// const geocode = (address,callback)=>{
//     setTimeout(() => {
//     const data = {
//         longitude : 0,
//         latitude : 0
//     }
//     callback (data);
//     }, 2000);
// }
// const data = geocode((data)=>
//    {
//     console.log(data); 
//    }
// );

const add = (a,b,callback) =>{
    setTimeout(() => {
        callback (a + b);
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum);
})




const doWork = (callback) =>{
    setTimeout(() => {
        // callback('this is my error !', undefined)    //error
        callback(undefined,'This is my success msg')    //success
    },2000)
}

doWork((error,result)=>{
    if(error){
        return console.log(error);
    }
    console.log(result);
})