// 1.
// function abcd(fn){
//     setTimeout(fn,5000)
// }

// abcd(function(){
//     console.log('Hello');
// })


// 2.
// function mapkicopy(arr, fn) {
//   var newarr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newarr.push(fn(arr[i]));
//   }
//   return newarr;
// }

// var ans = mapkicopy([1, 2, 3, 4, 5], function (value) {
//   return value + 1;
// });

// 3.

// function abcd(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);    
//     }
// }

// var ans  =  abcd();
// ans();
// ans();


// 4.

// function fnlimiter(fn,limit){
//     let count = 0;
//     return function(){
//         if(count < limit){
//             count++;
//             fn();
//         }
//     }
// }

// var ans = fnlimiter(function(){
//     console.log("manith");   
// },4)


// ans();
// ans();

