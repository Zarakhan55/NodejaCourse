import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function showMenu() {
  console.log(chalk.cyan("\n=== TASK MENU ==="));
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Exit");

  rl.question("Choose an option: ", (choice) => {
    if (choice === "1") {
      addTask();
    } else if (choice === "2") {
      viewTasks();
    } else if (choice === "3") {
      console.log(chalk.green("Goodbye 👋"));
      rl.close();
    } else {
      console.log(chalk.red("Invalid choice!"));
      showMenu();
    }
  });
}

function addTask() {
  rl.question("Enter your task: ", (task) => {
    tasks.push(task);
    console.log(chalk.yellow("Task added successfully ✅"));
    showMenu();
  });
}

function viewTasks() {
  console.log(chalk.blue("\nYour Tasks:"));
  if (tasks.length === 0) {
    console.log(chalk.red("No tasks added yet."));
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

// Start app
showMenu();
