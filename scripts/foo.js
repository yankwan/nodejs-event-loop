import bar from './bar';

const fs = require('fs');

function readFileInAsync(callback) {
    fs.readFile('./files/foo.txt', callback);
}

readFileInAsync(() => {
    const startCallback = Date.now();

    while (Date.now() - startCallback < 10) {

    }

    console.log(`Finished read file callback`);
})

console.log('This is foo.js');