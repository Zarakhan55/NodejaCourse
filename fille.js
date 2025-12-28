// const col=require('./matth');
// console.log(col.add(5,34));
// console.log(col.sub(45,12));
const Person = require("./matth");

const p2 = new Person(
    "Zara khan",
    22,
"Nasir Khan",
    "B2361142",
    "Karachi"
);

p2.greet();
console.log(p2.getDetails());
