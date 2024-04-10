const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a value: ', (value) => {
    console.log('You entered:', value);
    rl.close();
});