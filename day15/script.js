// problem 1:

// var age = Number(prompt("What is your age?"));

// if(age<18){
//     console.log("You are underage!");
// }else if(age>=18 && age<=60){
//     console.log("You are an adult!");
// }else{
//     console.log("You are a senior citizen!");
// }

// problem 2:

// var num1 = Number(prompt("Enter a number:"));
// var num2 = Number(prompt("Enter another number:"));

// var num3 = num1 + num2;

// if(num3%2===0){
//     console.log("The sum of the two numbers is even.");
// }else{
//     console.log("The sum of the two numbers is odd.");
// }


// problem 3:

// var char = String(prompt("Enter a character:"));

 
// if(char >= 'A' && char <='Z'){
//     console.log("The character is in Uppercase.");
// }else if (char >= 'a' && char <= 'z'){
//     console.log("The character is in Lowercase.");
// }else{
//     console.log("Not a Character.");
// }


// problem 4:

// var num1 = Number(prompt("Enter a number:"));
// var num2 = Number(prompt("Enter another number:"));
// var num3 = Number(prompt("Enter another number:"));

// if(num1>num2 && num1>num3){
//     console.log(num1 + " is the largest number.");
// }
// else if(num2>num3){
//     console.log(num2 + " is the largest number.");
// }else{
//     console.log(num3 + " is the largest number.");
// }

// problem 5:
// var year = Number(prompt("Enter a year:"));

// if(year%4==0){
//     console.log(year + " is a leap year.");
// }else{
//     console.log(year + " is not a leap year.");
// }

// problem 6:

// var num1 = Number(prompt("Enter a number:"));
// var num2 = Number(prompt("Enter another number:"));
// var operator = prompt("Enter an operator: +, -, *, /");

// if(operator=='+'){
//     console.log("the addition of two is " + (num1 + num2));
// }else if(operator=='-'){
//     console.log("the subtraction of two is " + (num1 - num2));
// }else if(operator=='*'){
//     console.log("the multiplication of two is " + (num1 * num2));
// }else if(operator=='/'){
//     console.log("the division of two is " + (num1 / num2));
// }

// problem 7:

var num = Number(prompt("Enter a number:"));

if(num>0){
    console.log(num + " is a positive number.");
}else if(num<0){
    console.log(num + " is a negative number.");
}else{
    console.log(num + " is zero.");
}