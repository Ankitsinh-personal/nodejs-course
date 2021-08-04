require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('61038f0ae24ef416c407e715',{age:1}).then((user)=>{
//     console.log(user);

//     return User.countDocuments({age:1})         //it also return promises

// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


const findAndUpdate = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})  //{age:age} => {age}  then it ok
    const count = await User.countDocuments({age:2})
    return count 
}

findAndUpdate('61038f0ae24ef416c407e715',2).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e.message);
})