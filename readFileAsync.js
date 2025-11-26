const fs = require('fs/promises');

// Read a file asynchronously
async function readFileContent() {
  try {
    const data = await fs.readFile('example.txt', 'utf-8');

    // Print file content
    console.log('File content:', data);
  } catch (error) {
    // Handle file read errors
    console.error('Failed to read file:', error.message);
  }
}

readFileContent();
