// //strong number in js

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number : "));
// let copy = n;
// let ans = 0

// while(n>0){
//      let rem = n%10;
//      let fact = 1;
//     for(let i = 1; i<=rem; i++){
//      fact = fact * i;
//     }
//     ans = ans + fact;
//     n=Math.floor(n/10);
// }

// console.log(ans);
// if(ans === copy) console.log("Strong number");
// else console.log("Not a strong number");

// armstrong

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number : "));
// let copy = n;
// let sum = 0;
// let rem;

// while(n>0){
//      let rem = n%10;
//      sum = sum + (rem*rem*rem);
//      n=Math.floor(n/10);
// }

// console.log(sum);
// if(sum === copy) console.log("armStrong");
// else console.log("not a armStrong");

//array started....

//array implementation
// push
// pop
//shift
//unshift
// indexing means to access the element of array

// --in js array always a dynamic array.

// let arr = [ 10,20,30]
// arr[10]= 300;
// console.log(arr);

//taking user input in an array and print sum of elements in array.
// const prompt = require("prompt-sync")();

// let size = Number(prompt("Enter the size of array : "));
// let arr = new Array(size);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter the element : "));
//   sum = sum + arr[i];
// }

// console.log("Array elements are : ", arr);
// console.log("Sum of array elements are : ", sum);

// find max element in an array

// let arr = [10,5,15,800,3,460,19];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if(arr[i]>max){
//      max = arr[i];
//   }
// }

// console.log("Array elements are : ", arr);
// console.log("Max element in array is : ", max);



// sum no.1
// let arr = [1,2,3,4,5,6];
// let left = 0; right = arr.length-1;

// while(left<right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;

// }

// console.log(arr);

