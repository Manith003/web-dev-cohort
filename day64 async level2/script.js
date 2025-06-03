// // // // sync -> call stack -> main thread execution
// // // console.log('Start');
// // // // async -> web APIs -> callback  queue -> (if call stack is empty) -> call stack -> main thread execution
// // // setTimeout(() => {
// // //     console.log('Timeout 1');
// // //     }
// // // , 1000);

// // function getDetails(username, cb){
// //     setTimeout(function(){
// //         console.log("Sending request to instagram...");
// //     },1000);
// //     setTimeout(function(){
// //         console.log("Fetching data ...");
// //     },3000);
// //     setTimeout(function(){
// //         cb(username);
// //     },6000);
// // }

// // getDetails("john_doe", function(username){
// //     console.log("Data received for " + username);
// // });

// function stepOne(cb){
//     console.log("Step 1");
//     cb();
// }

// function stepTwo(cb){
//     console.log("Step 2");
//     cb();
// }

// function stepThree(cb){
//     console.log("Step 3");
//     cb();
// }

// stepOne(function(){
//     stepTwo(function(){
//         stepThree(function(){
//             console.log("All steps completed");
//         })
//     })
// })

// // This is an example of callback hell, where each step is nested inside the previous one.
// // To avoid callback hell, we can use Promises or async/await syntax.

// learn promise

// let pr = new Promise(function (res, rej) {
//   console.log("instagram jaao data laao");
//   console.log("instagram se data collect ho raha hai");
//   console.log("instagram se data nahi mila");
// //   console.log("instagram data...");

//   rej();
// });

// pr.then(function () {
//   console.log("resolved");
// }).catch(function () {
//   console.log("rejected");
// });

// function stepOne(){
//     return new Promise((res,rej)=>{
//         console.log("Step 1");
//         res();
//     })
// }

// function stepTwo(){
//     return new Promise((res,rej)=>{
//         console.log("Step 2");
//         res();
//     });
// }

// function stepThree(){
//     return new Promise((res,rej)=>{
//         console.log("Step 3");
//         res();
//     });
// }
// stepOne().then(stepTwo).then(stepThree).then(()=>{
//     console.log("All steps completed");
// })

let btn = document.querySelector("button");

let output = document.querySelector(".output");
let ul = document.createElement("ul");
ul.classList.add("weather-details");
output.appendChild(ul);

ul = document.querySelector(".weather-details");


btn.addEventListener("click", function () {
  let cityName = document.querySelector(".city-input").value;
  let temperature;
  ul.innerHTML = "";

  function contactServer() {
    return new Promise((res, rej) => {
      if (!cityName) return rej("City name not provided");
      let li = document.createElement("li");
      li.textContent = "Please wait, contacting weather server...";
      ul.appendChild(li);
      setTimeout(() => {
        li.textContent = "Weather server contacted successfully";
        res();
      }, 2000);
    });
  }

  function fetchTemperature() {
    return new Promise((res, rej) => {
      if (Math.random() < 0.5) {
        return rej(
          "Failed to fetch temperature because of server down Right now please try again later"
        );
      } else {
        let li = document.createElement("li");
        li.textContent = "Fetching temperature for " + cityName + "...";
        ul.appendChild(li);
        setTimeout(() => {
          temperature = Math.floor(Math.random() * 15 + 25);
          res();
        }, 2000);
      }
    });
  }

  function showTemperature() {
    return new Promise((res) => {
      let li = document.createElement("li");
      li.textContent = `The temperature in ${cityName} is ${temperature}°C`;
      ul.appendChild(li);
      res();
    });
  }

  contactServer()
    .then(fetchTemperature)
    .then(showTemperature)
    .catch((err) => {
        let li = document.createElement("li");
      li.textContent = "Error: " + err;
      ul.appendChild(li);
    });
});
