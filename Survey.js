const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
rl.question('What  your name? ', (answer) => {
rl.question('What  an activity you like doing? ', (answer) => {   
rl.question('What do you listen to while doing that? ', (answer) => {
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
rl.question('What is your favourite thing to eat for that meal? ', (answer) => {    
rl.question('Which sport is your absolute favourite? ', (answer) => {   
rl.question('What is your superpower? In a few words, tell us what you are amazing at!? ', (answer) => {    
console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
});
});
});
});
});
});
});
});
