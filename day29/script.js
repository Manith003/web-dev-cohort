// let year = Number(prompt("Enter a year: "));

// if(year%4===0 && year%100!==0){
//     console.log(`${year} is a leap year`);
// }else if(year%400===0){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }

// let amount = Number(prompt("Enter amount: "));
// let dis = 0

// if (amount>0 && amount<=5000) dis = 0;
// else if(amount>5000 && amount<=7000) dis = 5;
// else if(amount>7000 && amount<=9000) dis = 10;
// else if(amount>9000) dis = 20;
// else console.log("Invalid amount");

// console.log(amount - ((dis*amount)/100));

// let x = "" ;
// if(x){
//     console.log("truthy")
// }else {
//     console.log("falsy")
// }

// currency breakdown

// let amount = Number(prompt("Enter the INR amount :"));
// console.log(`Entered amount is : ${amount}`);

// function currency(amount) {
//   const denomination = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
//   let result = {};

//   for (let note of denomination) {
//     if (amount >= note) {
//       result[note] = Math.floor(amount / note);
//       amount = amount % note;
//     }
//   }

  
//   console.log("Currency Breakdown:");
//   for (let note in result) { 
//     console.log(`₹${note}: ${result[note]}`);
//   }
// }

// currency(amount);


// review 
// let movieName = prompt("Enter the movie name: ");;
// let rating = Number(prompt("Enter the rating between(1 to 5): "));

// if(rating<0 && rating>5){
//     console.log("Invalid rating");
// }else if(rating>0.0 && rating<=2.0){
//     console.log(`${movieName} is a Flop`);
// }else if(rating>2.0 && rating<=3.4){
//     console.log(`${movieName} is a Semi-hit`);
// }else if(rating>3.4 && rating<=4.5){
//     console.log(`${movieName} is a Hit`);
// }else if(rating>4.5 && rating<=5.0){
//     console.log(`${movieName} is a Super Hit`);
// }

// salary calculation

// let gender = prompt("Enter your gender: ");
// let qualification = prompt("Enter your qualification: ");
// let service = Number(prompt("Enter your years of service: "));

// if(gender === 'male'){
//     if(qualification === 'pg' && service>=10){
//         console.log("Salary is 15000");
//     }else if(qualification === 'g' && service>=10){
//         console.log("Salary is 10000");
//     }else if(qualification === 'pg' && service<10){
//         console.log("Salary is 10000");
//     }else if(qualification === 'g' && service<10){
//         console.log("Salary is 7000");
//     }
// }
// else{
//     if(gender === 'female'){
//     if(qualification === 'pg' && service>=10){
//         console.log("Salary is 12000");
//     }else if(qualification === 'g' && service>=10){
//         console.log("Salary is 9000");
//     }else if(qualification === 'pg' && service<10){
//         console.log("Salary is 10000");
//     }else if(qualification === 'g' && service<10){
//         console.log("Salary is 6000");
//     }
// }
// }