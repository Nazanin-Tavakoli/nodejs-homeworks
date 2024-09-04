/*
Question2
Create a Node.js script that reads the content of a file named 'example.txt' using the fs.readFile() function. Ensure that the file is read with the 'utf8' encoding.

- Implement error handling to log any errors encountered during the file reading process.
- If the file is successfully read, display its content to the console along with the message "File content:".
- Your solution should include the usage of the fs.readFile() function
*/

// answer
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('warning! hands up:', err);
        return;
    }
    
    console.log('Give me a high five:', data);
});