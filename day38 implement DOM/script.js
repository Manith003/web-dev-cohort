// learn about DOM manipulation with simple project 
// learn about math.random() function
// learn about color manipulation with rgb color
// learn template literals


// simple project to change the background color of a box when a button is clicked
// var btn = document.querySelector("button");
// var box = document.querySelector(".box");

// btn.addEventListener("click",function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);
//     console.log(c1,c2,c3);
    
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    
// })


// advanced project to change the background color of a box when a button is clicked and also change the text color to white when the button is clicked.this the simple ipl predictor project

var teams = [
    {
        name: "CSK",
        primaryColor: "yellow",
        secondaryColor: "blue",
    },
    {
        name: "DC",
        primaryColor: "blue",
        secondaryColor: "red",
    },
    {
        name: "PBKS",
        primaryColor: "lightgray",
        secondaryColor: "red",
    },
    {
        name: "KKR",
        primaryColor: "purple",
        secondaryColor: "gold",
    },
    {
        name: "MI",
        primaryColor: "blue",
        secondaryColor: "gold",
    },
    {
        name: "RR",
        primaryColor: "gold",
        secondaryColor: "blue",
    },
    {
        name: "RCB",
        primaryColor: "red",
        secondaryColor: "black",
    },
    {
        name: "SRH",
        primaryColor: "orange",
        secondaryColor: "black",
    },
    {
        name: "GT",
        primaryColor: "gold",
        secondaryColor: "navyblue",
    },
    {
        name: "LSG",
        primaryColor: "red",
        secondaryColor: "yellow",
    },

]
var btn = document.querySelector("button");
var h1 = document.querySelector(".box h1");
var box = document.querySelector(".box");


btn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*teams.length);
    var winner = teams[num];
    h1.innerHTML = winner.name;
    h1.style.color = winner.secondaryColor;
    box.style.backgroundColor = winner.primaryColor;
    console.log(winner.name);
    
})

