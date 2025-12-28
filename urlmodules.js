const http=require("http");
const url=require("url");
const querystring=require("querystring");

const server=http.createServer((req,res)=>{
    const parseurl=url.parse(req.url);
    const path=parseurl.pathname;
    const query = querystring.parse(parsedUrl.query);

    res.writeHead(200,{"content-type":"application/json"})
})