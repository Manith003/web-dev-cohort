// day40 advanced array

// 1st method to rotation by k element

// let arr = [1, 2, 3, 4, 5];
// let k = 7 % arr.length;

// for (let j = 1; j <= k; j++) {
//   let copy = arr[0];
//   for (i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

// 2nd method to rotation by k element

// let arr = [1, 2, 3, 4, 5];
// let k = 2 % arr.length;
// let temp = new Array(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp);

// 3rd method to rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let k = 2 % arr.length;
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1);
// console.log(arr);

// function reverse(arr,i,j){
//     while(i<j){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//         i++;
//         j--;
//     }
// }

//linear search

// let arr = [1,2,3,4,5,6];
// let target = 7;
// let index = -1;
// for(i=0;i<arr.length;i++){
// if(arr[i]== target){
//     index = i;
//     break;
// }
// }

// if(index == -1)
//     console.log("not found");
// else
//     console.log("found at index",index);

//binary search

let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 67;

if (binary(arr, target) == -1) {
  console.log("not found");
} else {
  console.log("found at index", binary(arr, target));
}
function binary(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) e = mid - 1;
    else s = mid + 1;
  }
  return -1;
}
