// function gcd(a,b){
//  while(b!==0){
//     let temp = b;
//     b = a%b;
//     a = temp;
//  }
//  return a;
// }
// let a = 1;
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// learn to take input from user in terminal with the help o f prompt-sync npm package.
// const prompt = require('prompt-sync')();

// var name = prompt('What is your name? ');
// console.log('Hello ' + name + '!');

// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number: ");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }

const prompt = require("prompt-sync")();
let n = prompt("Enter the number: ");

for (let i = n; i >= 1 ; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log();
}