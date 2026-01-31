import express from 'express';

const app=express();
 
app.get('/',(req,res)=>{
    res.send('Hello World from Express.js');
});

app.get('/about',(req,res)=>{
    res.send('This is the about page');
});

app.get('/contact',(req,res)=>{
    res.send('This is the contact page');
});
app.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000');
})





// Express.js is used to create backend servers in Node.js.