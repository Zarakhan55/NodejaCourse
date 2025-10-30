// | Function          | Purpose                       |
// | ----------------- | ----------------------------- |
// | `fs.writeFile()`  | Write data to a file (async)  |
// | `fs.readFile()`   | Read data from a file (async) |
// | `fs.appendFile()` | Add new data to a file        |
// | `fs.unlink()`     | Delete a file                 |

const fs =require("fs");
fs.writeFile("note.txt","hello we are learning fs modules!",(err)=>{
    if (err) console.log(err);
    else console.log("file created!");
})

 fs.readFile("note.txt","utf8",(err,data)=>{
        if (err) console.log(err);
    else console.log("file content:!",data);

 })