// console.log("hello world");
// console.warn("hello world");
// console.error("hello world");
// console.info("hello world");
console.table({name: 'manith',age: 20,email:'manithkumar8190@gmail.com'});



// let result = 35 * 2 - (10/2) + 7
// console.log(result);

console.log(typeof typeof typeof "hello");
console.log(typeof typeof 35);

console.log(null == undefined);


var a = 10;
var b= 12;
var c;

console.log(a,b);

c=a;
a=b;
b=c;

console.log(a,b);

const obj = {
    name: "manith",
    age: 20,
    email:'test@test.com'
}

Object.freeze(obj);
obj.name = "kumar";

