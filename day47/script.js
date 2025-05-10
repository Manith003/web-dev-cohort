
// let arr = [1, 2, 3, 4, 5];
// arr[2] = 10;
// console.log(arr); // [1, 2, 10, 4, 5]



// let name = "manith kumar"
// name[3] = 'q';
// console.log(name);

// console.log(name.substring(5)); // "i"


let s = "manith";
let temp = ''
for(let i=s.length-1;i>=0;i--){
    temp = temp + s.charAt(i);
}
if(s === temp){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
console.log(temp);