// learn about bubble sort algorithm;

// let arr = [1, 4, 3, 2, 9, 10];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }

// console.log(arr);

//learn about selection sort algorithm

// let arr = [10, 3, 5, 1, 15];

// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;// 10  3 1
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) {
//       small = j;
//     }
//   }
//   if (i != small) {
//     temp = arr[i];
//     arr[i] = arr[small];
//     arr[small] = temp;
//   }
// }

// console.log(arr);


// learn about insertion sort algorithm

let arr = [1, 4, 3, 2, 9, 10];

for(let i=1; i<arr.length;i++){
let current = arr[i];
let j=i-1;
while(j>=0 && arr[j]>current){
    arr[j+1] = arr[j];
    j--;
}
arr[j+1]= current;
}

console.log(arr);
