//day39 learn webapi
// setTimeout

// console.log("hello 1");
// setTimeout(() => {
//     console.log("hello 3");
    
// }, 2000);
// setTimeout(() => {
//     console.log("hello 2");
    
// }, 4000);

// console.log("hello 4");


// var btn = document.querySelector("button");
// var h5 = document.querySelector("h5");
// var flag = 1;

// btn.addEventListener("click", function(){
// if(flag == 1){
//     h5.innerText = "Requesting...";
//     h5.style.color = "blue";
//     btn.innerText = "Adding..."
// setTimeout(function(){
//     h5.innerText = "Friends";
//     h5.style.color = "green";
//     btn.innerText = "Remove"
//     btn.style.backgroundColor = "red";
//     btn.style.color = "white";
//     flag = 0;
// },3000);
// }else{
//     h5.innerText = "Stranger";
//     h5.style.color = "red";
//     btn.innerText = "Add Friend";
//     btn.style.backgroundColor = "#53A2FF";
//     btn.style.color = "black";
//     flag = 1;
// }
   
// })


//setInterval

// var a=0;
// setInterval(function(){
//     a++;
//     console.log(a);
// },1000)

var btn = document.querySelector("button")
var percent = document.querySelector(".percentage");
var progress = document.querySelector(".progress-bar");
var count = 0;
btn.addEventListener("click", function(){
    btn.innerHTML = "Downloading...";
   var time =  setInterval(function(){
        count++;
        percent.innerHTML = count + "%";
        progress.style.width = count + "%";
    },40);

    setTimeout(function(){
        clearInterval(time);
        btn.innerHTML = "Download Complete";
        btn.style.opacity = "0.5";
    },4000);

})