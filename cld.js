// Importing readline module for user input
import readline from "readline";
// CLI = Command Line Interface
// Importing chalk for colored console output
import chalk from "chalk";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(chalk.blue("Enter your name: "), (name) => {
//   rl.question(chalk.green("Enter your course: "), (course) => {
//     console.log(chalk.yellow(`\nWelcome ${name}!`));
//     console.log(chalk.cyan(`You are learning ${course} `));
//     rl.close();
//   });
// });






// What is a CLI app?
// 👉 Correct: runs in terminal & takes input

// ✔ Input module?
// 👉 Correct: readline

// ✔ Why chalk?
// 👉 Correct: color output in terminal
// If interviewer asks:

// Can you build CLI tools in Node.js?

// You confidently say:

// Yes, I have built CLI apps using Node.js, readline, and chalk for user input and colored output.


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter your name:",(name)=>{
    console.log(chalk.green(`Hello ${name}`));
    console.log(chalk.red("Welcome to Node.js"));
    rl.close();
})