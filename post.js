// Postman is used to test and debug APIs.

import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World from Express.js');
});

app.get('/user',(req,res)=>{
    res.json([
        {id:1, name:'John Doe'},
        {id:2, name:'Jane Smith'},
        {id:3, name:'Alice Johnson'}

    ]);
});

app.get('/product',(req,res)=>{
    res.json([
        {id:101, name:'Laptop', price:999.99},
        {id:102, name:'Smartphone', price:499.99},
        {id:103, name:'Tablet', price:299.99}
    ]);
});








app.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000');
});












// res.send vs res.json
// res.send() → text / html
// res.json() → JSON data (API res
