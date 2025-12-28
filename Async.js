<<<<<<< HEAD
// 1. Import fs module
const fs = require('fs');

// 2. Write data to a file (ASYNC)
fs.writeFile('data.txt', 'Hello from Async FS Module!', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File written successfully');

    // 3. Read data from the file (ASYNC)
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

fs.appendFile('data.txt', '\nNew Line Added', (err) => {
    if (err) throw err;
    console.log('Data appended');
});


fs.unlink('data.txt', (err) => {
    if (err) {
        console.log('Error deleting file:', err);
        return;
    }

    // 3. Success message
    console.log('File deleted successfully');
});
=======
// 1. Import fs module
const fs = require('fs');

// 2. Write data to a file (ASYNC)
fs.writeFile('data.txt', 'Hello from Async FS Module!', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File written successfully');

    // 3. Read data from the file (ASYNC)
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

fs.appendFile('data.txt', '\nNew Line Added', (err) => {
    if (err) throw err;
    console.log('Data appended');
});


fs.unlink('data.txt', (err) => {
    if (err) {
        console.log('Error deleting file:', err);
        return;
    }

    // 3. Success message
    console.log('File deleted successfully');
});
>>>>>>> bb323865090da1ecfd889f10cd8a819587a14ff2
