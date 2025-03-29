// let num = '0471958697'.split("")
// console.log(num);
// let count = 0; 
// let sum = 0;
// num.forEach(function(val){
//     ++count;
//     sum = sum + Number(val)*count;
//     console.log(val, count, sum);
// })

// if(sum%11 === 0){
//     console.log('Valid ISBN');
// }else{
//     console.log('Invalid ISBN');
// }


let n = Number(prompt("Enter a number: "));
let copy = n;
let sq = n*n;
let count = 0;

while(n>0){
    count++;
    n = Math.floor(n/10);
}

if(sq%Math.pow(10,count) === copy) console.log("Automorphic Number");
else console.log("Not a Automorphic Number");



