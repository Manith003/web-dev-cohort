// find the second max element.

// let arr = [28, 6, 74, 48, 84, 79];
// let arr = [1,7,3,10,10] ;
// let max = Math.max(arr[0],arr[1]);
// let sMax = Math.min(arr[0],arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i];
//     }else if(arr[i]>sMax && max!=arr[i]){
//         sMax = arr[i];
//     }
// }

// console.log("Given array is : " + arr);
// console.log("First max element : " + max);
// console.log("Second max element : " + sMax);

//find the first minimum element.
// let arr = [28, 6, 74, 48, 84, 79];

// let min = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i];
//         }
// }

// console.log("Given array is : " + arr);
// console.log("First Minimum element : " + min);

// find the second min element.

// let arr = [7, 7, 2, 3, 3, 1];

// let min = Math.min(arr[0],arr[1]);
// let sMin = Math.max(arr[0],arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i]<min){
//         sMin = min;
//         min = arr[i];
//     }else if(arr[i]<sMin && min!=arr[i]){
//         sMin = arr[i];
//     }
// }

// console.log("Given array is : " + arr);
// console.log("First min element : " + min);
// console.log("Second min element : " + sMin);

//reverse the array.

// let arr = [1,2,3,4,5,6];
// let temp = new Array(arr.length);
// let i=0;

// for(let j=arr.length-1;j>=0;j--){
//     temp[i] = arr[j];
//     i++;
// }

// console.log("the Given Array is : " + arr);
// console.log("the Reversed Array is : " + temp);

//reversed without extra space
// let arr = [1,2,3,4,5,6];
// let i=0;
// let j=arr.length-1;

// while(i<j){
//     [arr[i],arr[j]]=[arr[j],arr[i]];
//     i++;
//     j--;
// }
// console.log(arr);

//all zero are left side and all ones are right side
// let arr = [1,1,0,1,0,1,0,1] ;


// let i=0;
// let j=0; 

// while(i<arr.length){
//     if(arr[i]===1){
//         temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
//     i++;
// }

// console.log(arr);


//with extra space.
// let arr = [1, 1, 0, 1, 0, 1, 0, 1];
// let temp = new Array(arr.length);

// let i = arr.length - 1;
// let j = arr.length - 1;
// while (i >= 0) {
//   if (arr[i] === 0) {
//     let temp1 = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp1;

//     j--;
//   }
//   i--;
// }

// temp = arr;
// console.log(temp);


// array rotational by from rigt side.;
 
// let arr = [1,2,3,4,5];
// let temp = arr.length;

// for(let i=arr.length-1; i>0;i--){
// arr[i]=arr[i-1];
// }

// arr[0]=temp;

// console.log(arr);

// array rotational by from left side.;

// let arr = [1,2,3,4,5];
// let temp = arr[0];

// for(let i=0; i<arr.length-1;i++){
// arr[i] = arr[i+1];
// }

// arr[arr.length-1] = temp;
// console.log(arr);