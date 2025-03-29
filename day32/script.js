//learning do while loop;
// let i =0
// do{
// console.log("Hello World");
// i++;
// }while(i<5);

// let userInput;
// do{
//     console.log("dai, pootai");
//     userInput = prompt("want to conntinue ? type 'yes' to continue or no to stop").toLowerCase();
// }while(userInput === 'yes');

// let com = Math.floor(Math.random()*100)+1;
// console.log(`computer number is ${com}`);

// let userInput;

// do{
//     userInput = parseInt(prompt("Enter a number between 1 and 100"));
//     if(isNaN(userInput) || userInput < 0 || userInput > 100){
//         console.log("Invalid input. Please enter a valid number between 1 and 100.");
//         continue;
//     }
//     if(userInput > com) console.log("Too high");
//     else if(userInput < com) console.log("Too low");
//     else console.log(`Congratulation!🎉 You guessed the correct number. your number is ${userInput} and computer number is ${com}.`);
// }while(userInput !== com);

//make calculator

// let userInput;
// do {
//   let num1 = parseInt(prompt("Enter first number"));
//   let num2 = parseInt(prompt("Enter second number"));
//   let operator = prompt("Enter operator (+,-,*,/)");

//   switch (operator) {
//     case "+":
//       console.log("The result is " + (num1 + num2));
//       break;
//     case "-":
//       console.log("The result is " + (num1 - num2));
//       break;
//     case "*":
//       console.log("The result is " + num1 * num2);
//       break;
//     case "/":
//       {
//         if (num2 === 0) {
//           console.log("Error: Division by zero is not allowed.");
//         } else {
//           console.log("The result is " + num1 / num2);
//         }
//       }
//       break;
//     default:
//       console.log("Invalid operator");
//   }
//   userInput = prompt("Do you want to continue? (yes/no)").toLowerCase();
// } while (userInput === "yes");
