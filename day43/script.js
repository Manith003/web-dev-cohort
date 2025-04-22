// let prompt = require('prompt-sync')();
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0;i<arr.length;i++){
// for(let j=0;j<arr[i].length;j++){
// process.stdout.write(`${arr[i][j]} `);
// }
// console.log();

// }


//with dynamic array

// let prompt = require('prompt-sync')();
// let row = Number(prompt('Enter the number of rows: '));
// let col = Number(prompt('Enter the number of columns: '));

// let arr = new Array(row);
// for(let i=0;i<arr.length;i++){
// arr[i] = new Array(col);
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j] = Number(prompt("Enter the value : " ));
//     }
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
// }

// practice sum to find the sum of dignoal elements of a matrix

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let leftSum = 0 , rightSum = 0;

for(let i=0;i<arr.length;i++){
for(let j=0;j<arr[i].length;j++){
    if(i == j){
        leftSum += arr[i][j];
    }
    if(i + j == arr.length - 1){
        rightSum += arr[i][j];
    }

}
}


console.log(`Left diagonal sum is : ${leftSum}`);
console.log(`Right diagonal sum is : ${rightSum}`);
