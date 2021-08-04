
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('this is my error !', undefined)    //error
        callback(undefined, 'This is my success msg')    //success
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error);
    }
    console.log(result);
})

//callback function run based on arguments with error and success
//to solve this by promises -> default function resolve and reject


//promise automatically detect => error and success
//if success => resolve
//if reject => error

const doWorkPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('Error')                 //two reject then show first one
        // reject('Error message')             //error  
        resolve('success message')          //success
    }, 2000)
})

doWorkPromises.then((result) => {               //promises is object so that use .then()
    console.log('Success !',result);
}).catch((error) => {
    console.log('Error !',error);
})






//
//                          fulfilled
//                          /
//  Promise     --Pending
//                          \
//                          rejected
//