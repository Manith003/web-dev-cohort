// 1.

// function abcd(fn,time){
//     l(fn,time)
// }

// abcd(function(){
//     console.log('Hello');
// },2000);

// 2.

// function greetingSetup(greet) {
//   return function (name) {
//     console.log(`${greet}, ${name}`);
//   };
// }

// var greeter = greetingSetup("Namaste!");
// greeter("manith");

// 3.
// function abcd(fn) {
//   var executed = false;
//   return function () {
//     if (executed == false) {
//       executed = true;
//       fn();
//     } else {
//       console.warn("Already executed");
//     }
//   };
// }

// var ans = abcd(function () {
//   console.log("Hello");
// });

// ans();ans();

// 4.

// function throt(fn,delay){
//   let lastCall = 0;
//   return function(){
//     let current = Date.now();
//     if(current - lastCall >= delay){
//       lastCall = current;
//       fn();
//     }
//     else{
//       console.warn('wait 10 sec before calling again');
//     }
//   }

// }

// var ans = throt(function(){
//     console.log('manith va');
// },10000)


