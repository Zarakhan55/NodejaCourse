const path = require("path"); 
// Import Node.js built-in 'path' module to work with file and folder paths

console.log(__dirname);
// Shows the absolute path of the current directory (where this file exists)

console.log(__filename);
// Shows the absolute path of the current file (including file name)

const filePath = path.join("folder", "Students", "data.txt");
// Joins folder names safely to create a file path (works on all OS)

console.log(filePath);
// Prints the joined path

const parseData = path.parse(filePath);
// Breaks the path into an object (root, dir, base, name, ext)

const resolvedPath = path.resolve(filePath);
// Converts the path into an absolute path from current directory

const extname = path.extname(filePath);
// Gets only the file extension (.txt)

const basename = path.basename(filePath);
// Gets the file name from the path (data.txt)

const dirname = path.dirname(filePath);
// Gets the directory path without the file name

console.log({ parseData, resolvedPath, extname, basename, dirname });
// Prints all extracted path information together
