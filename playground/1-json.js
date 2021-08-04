const fs = require('fs');

// const book = {
//     title : 'book title',
//     author : 'ankitsinh'
// }

// json to string = JSON.stringify(object)
// string to json  = JSON.parse(object)
// console.log(book);

//store data
// const bookStringData =  JSON.stringify(book); //pass  data as string not json not json object
// fs.writeFileSync('1-json.json',bookStringData);

//read data
// const readData1 = fs.readFileSync('1-json.json');
// const stringData = readData.toString()
// console.log(JSON.parse(stringData).title);


//update data
const readData1 = fs.readFileSync('1-json.json');
const readData = JSON.parse(readData1);
//read data in string format  -> convert to json  so that we can change that data
readData.title = "new title1"
readData.author = "new author"
//for store agin change to string
const changeData = JSON.stringify(readData);
console.log(changeData.toString());
fs.writeFileSync('1-json.json',changeData)