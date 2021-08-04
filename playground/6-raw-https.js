const https = require('http')

const url = 'http://api.weatherstack.com/current?access_key=8d3f4cbc939c27e97de1a8d56557664a&query=nadiad';

const request = https.request(url, res => {
    let data = '';
    res.on('data',(chunk)=>{
        data = data + chunk.toString()
    })
    res.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error',(error)=>{
    console.log(erro);
})

request.end()