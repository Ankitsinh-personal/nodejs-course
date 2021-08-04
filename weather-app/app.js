// const request = require('request');
const gecode = require('./utils/geocode');
const forecast = require('./utils/forecast')

const address = process.argv[2];
if(!address)
{
    console.log('please provide an address !!');
}
else{
    gecode(address, (error,data)=>{
        // console.log('address:',address);
        if(error){
            return console.log(error);
        }
        forecast(data.latitude, data.longitude,(error,forecastData)=>{
            if(error){
                return console.log(error);
            }
            // console.log(data);
            console.log(data.location);
            console.log(forecastData);
        })
    })
}
console.log(process.argv);