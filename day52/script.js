// let prompt = require("prompt-sync")();
// let s = prompt("Enter a string: ");
// let freqArray = new Array(123).fill(0);
// let ans = [];
// for (let i = 0; i < s.length; i++) {
//   let ch = s.charCodeAt(i);
//   freqArray[ch] = freqArray[ch] + 1;
// }

// // console.log(freqArray);

// for (let i = 0; i < freqArray.length; i++) {
//   if (freqArray[i] > 0) {
//     ans[i] = String.fromCharCode(i) + " : " + freqArray[i];
//   }
// }

// console.log(ans);

// let prompt = require("prompt-sync")();
// let s1 = prompt("Enter a string1: ");
// let s2 = prompt("Enter a string2: ");
// let freqArray = new Array(123).fill(0);
// let isanagram = true;

// if (s1.length !== s2.length) {
//   return false;
// } else {
//   for (let i = 0; i < s1.length; i++) {
//     let ch = s1.charCodeAt(i);
//     freqArray[ch] = freqArray[ch] + 1;
//   }

//   for (let i = 0; i < s2.length; i++) {
//     let ch = s2.charCodeAt(i);
//     freqArray[ch] = freqArray[ch] - 1;
//   }

//   for (let i = 0; i < freqArray.length; i++) {
//     if (freqArray[i] !== 0) {
//       isanagram = false;
//       break;
//     }
//   }

//     if (isanagram) {
//         console.log("Anagram");
//     } else {
//         console.log("Not an anagram");
//     } 
// }

// function isAnagram(s1, s2) {
//     // Your code here
//     let isAna = true;
//     let freqArr = new Array(123).fill(0);
//     if(s1.length !== s2.length){
//         return false;
//     }else{
//     for(let i=0;i<s1.length;i++){
//         let ch = s1.charCodeAt(i);
//         freqArr[ch] = freqArr[i] + 1;
//     }
//     for(let i=0;i<s2.length;i++){
//         let ch = s2.charCodeAt(i);
//         freqArr[ch] = freqArr[i] - 1;
//     }
//     for(let i=0;i<freqArr.length;i++){
//         if(freqArr[ch] !== 0){
//             isAna = false;
//             break;
//         }
//     }
//     if(isAna){
//        return true;
//     }else{
//         return false;
//     }
//     }
    
// }

// isAnagram("listen", "silent"); // true



/**
 * @param {string} str
 * @return {void} - print ['a: 2', 'b: 1']
 */
function characterFrequency(str) {
    // Write your code here
    let freqArr = new Array(123).fill(0);
    let ans = [];
    for(let i=0;i<str.length;i++){
        let ch = str.charCodeAt(i);
        freqArr[ch] = freqArr[ch] + 1;
    }
    for(let i=0;i<freqArr.length;i++){
        if(freqArr[i]>0){
            ans.push(String.fromCharCode(i)+": "+freqArr[i]); 
        }
    }
    return ans;
}

console.log(characterFrequency("aabbcc")); // ['a: 2', 'b: 2', 'c: 2']