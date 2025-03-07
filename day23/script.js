//given question to find the second largest number in an array
// var arr = [3,4,2,2,1,5,6,8];

// function secondLargest(){
//     var uniqueValues= [...new Set(arr)];
//     var ans =  uniqueValues.sort(function(a,b){
//         return b-a;
//     })
//     console.log(ans[1]);
// }

// secondLargest(arr); //5


// var arr = [2,3,5,4,3,1,2];
// var arr2 = [];

// for(var i = arr.length-1; i>=0;i--){
//     arr2.push(arr[i]);
// }


// frequent Element

var arr = [3,4,1,3,4,6,7];
var obj = {};

arr.forEach(function(val){
    obj[val] === undefined ? obj[val] = 1 : obj[val]++;
})