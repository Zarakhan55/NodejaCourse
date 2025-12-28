// **`fs/promises` in Node.js** is the modern, non-blocking way to work with the file system using **Promises** and **`async/await`**.
//  You import it with `const fs = require('fs/promises')` (or `import fs from 'fs/promises'`) and then use methods like `fs.readFile`, 
//  `fs.writeFile`, `fs.appendFile`, `fs.unlink`, `fs.rename`, `fs.mkdir`, and `fs.readdir`, all of which **return Promises** instead of using callbacks.
//   This makes code cleaner, easier to read, and simpler to handle errors using `try...catch`. It is preferred over callback-based and synchronous `fs` methods because it **does not block the event loop**
//   , works perfectly in servers and APIs, and is the **recommended approach for modern Node.js applications**.



const fs=require("fs");
const path=require("path");

const fileName="data.txt";
const filePath=path.join(__dirname,"data.txt");
// fs.promises.readdir(__dirname).then(files=>{
//     console.log("Files in directory:",files);
// })
// .catch(err =>{
//     console.log('Error reading directory:', err);
// })

fs.promises.writeFile(filePath,'Hello from fs/promises Module!')
.then(() => {
    console.log('File written successfully');
    return fs.promises.readFile(filePath, 'utf8');
})
.then((data) => {
    console.log('File content:', data);
    return fs.promises.appendFile(filePath, '\nNew Line Added');
})
.then(() => {
    console.log('Data appended');
    return fs.promises.unlink(filePath);
})
.then(() => {
    console.log('File deleted successfully');
})
.catch((err) => {
    console.log('Error:', err);
});
