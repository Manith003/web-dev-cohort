// let n = Number(prompt("Enter a number: "));

// if (isNaN(n)) {
//   console.log("Invalid input. Please enter a number.");
// } else {
//   let ei;
//   for (i = 1; i <= n; i++) {
//     console.log(`hello ${i}`);
//   }
//   console.log("fail at " + i);
// }

// 2.\

// let n = Number(prompt("Enter a number: "));

// if(isNaN(n)){
//     console.log("Invalid input. Please enter a number.");
// }
// else{
//     console.log("Print natural number up to n.");
//     let i;
//     for(i=n;i>0;i--){
//         console.log(i);
//     }
// }

// 3.

// let n = Number(prompt("Enter a number for table: "));

// for(let i=1;i<=10;i++){
//     console.log(`${n} X ${i} = ${n*i}`);

// }

// 4.

// let n = 5;
// let sum = 0;
// for(let i = 1 ; i<=n; i++){
//     sum = sum + i;
// }
// console.log(`Sum of ${n} is ${sum}`);

// function printFactors(n) {
//     // Write your logic here
//     for(let i = 1; i<=n ; i++){
//         if(n%i==0){
//             console.log(i);
//         }
//     }
// }
// printFactors(6); // 1 2 3 6



// prime

// let n = Number(prompt("Enter a number: "));

// let isPrime = true;

// for(let i = 2; i<n; i++){
//     if(n%i==0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime) console.log("Prime number");
// else console.log("Not a prime number");


// Q. Write a program to take two inputs a, b & find the value of a  raised to the power of b.
//      Ex - a = 2, b = 5 
//      OP - 2^5 = 32

// let a = Number(prompt("Enter a number for A: "));
// let b = Number(prompt("Enter a number for B: "));
// let result = a;

// for(let i = a; i<=b; i++){
//     result = result * a;
// }
// console.log(result);


let a = Number(prompt("Enter a number for A: "));
let b = Number(prompt("Enter a number for B: "));


if(a === 0 && b ===0) console.log("Undefine");
if(b === 0) console.log(1);

let result = 1;
for(let i = 1; i<=b; i++){
    result *= a;
}

console.log(result);