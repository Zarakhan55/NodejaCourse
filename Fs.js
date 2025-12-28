const fs=require("fs");
const path=require("path");
const fileName="test.txt";
const filePath=path.join(__dirname,fileName);
// const writefile=
// fs.writeFileSync(filePath,"This is my new file for learn fs modules in node js ..........",'utf-8');
// console.log(writefile);

// const readfile=fs.readFileSync(filePath,"utf-8");
// console.log(readfile);

// const appendfile=fs.appendFileSync(filePath,
//     "this is new data for you",
//     "utf-8"
// );
// console.log(appendfile);

const dlt=fs.unlinkSync(filePath);
console.log(dlt);