require('../task-manager/src/db/mongoose')
const Task = require('../task-manager/src/models/task')

// Task.findByIdAndDelete('610292a8658ca7291ca58ab2').then((task)=>{
//     console.log(task);

//     return Task.countDocuments({completed:true})         //it also return promises

// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })



const findAndDelete = async (id)=>{
    const task = await Task.findByIdAndDelete(id)  //{age:age} => {age}  then it ok
    const count = await Task.countDocuments({completed: false})
    return count 
}

findAndDelete('610371fc0829df1d3078b796').then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e.message);
})

