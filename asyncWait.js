// Non-blocking
// Clean & readable
// Easy error handling
// Best for APIs & servers

const fs = require('fs/promises');

// async function crudOperation() {
//   try {
//     // CREATE
//     await fs.writeFile('data.txt', 'Hello World');
//     console.log('File Created');

//     // READ
//     const data = await fs.readFile('data.txt', 'utf-8');
//     console.log('Read:', data);

//     // UPDATE
//     await fs.appendFile('data.txt', '\nUpdated using async/await');
//     console.log('File Updated');

//     // DELETE
//     await fs.unlink('data.txt');
//     console.log('File Deleted');

//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// crudOperation();

// async function asyncWait() {
//   try {
//     // CREATE
//     await fs.writeFile('student.txt', 'Name: Zara\nMarks: 85');
//     console.log('File Created');

//     // UPDATE
//     await fs.appendFile('student.txt', '\nGrade: A');
//     console.log('File Updated');

//     // READ
//     const data = await fs.readFile('student.txt', 'utf-8');
//     console.log('Read:', data);

//     // DELETE
//     await fs.unlink('student.txt');
//     console.log('File Deleted');
//   } catch (error) {
//     console.log('Error:', error.message);
//   }
// }

// asyncWait();


async function asyncWait() {
  try {
    // CREATE
    const initialData = [
      { id: 1, name: "Zara", age: 22 }
    ];
    await fs.writeFile('users.json', JSON.stringify(initialData, null, 2));
    console.log('File Created');

    // READ
    const data = await fs.readFile('users.json', 'utf-8');
    const users = JSON.parse(data);
    console.log('User Data:', users);

    // UPDATE
    users.push({ id: 2, name: "Aishi", age: 22 });
    await fs.writeFile('users.json', JSON.stringify(users, null, 2));
    console.log('Data Updated');

    // READ AGAIN
    const updatedData = await fs.readFile('users.json', 'utf-8');
    console.log('Updated User Data:', JSON.parse(updatedData));

    // DELETE
    await fs.unlink('users.json');
    console.log('File Deleted');

  } catch (error) {
    console.log('Error:', error.message);
  }
}

asyncWait();
