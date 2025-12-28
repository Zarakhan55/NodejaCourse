const http=require("http");
const fs=require("fs");
const PORT=3200;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','apilcation/json');