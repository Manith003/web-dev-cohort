//4 piller of dom (document object model);

// 1. selection of an Element;
// 2. changing the HTML
// 3. changing the CSS
// 4. eventListener

// var h1 = document.querySelector("h1")

// h1.addEventListener("click",function(){
//     h1.innerHTML = "Hello World!"
//     h1.style.color = "red";
// })

//small project using 4 piller of dom

var btn = document.querySelector(".right button");
var p = document.querySelector(".content .logo p");

var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    btn.style.color = "white";
    btn.innerHTML = "Unfollow";
    btn.style.backgroundColor = "#F45156";
    p.innerHTML = "Connected!";
    flag = 1;
  }else{
    btn.style.color = "black";
    btn.innerHTML = "Follow";
    btn.style.backgroundColor = "lightgreen";
    p.innerHTML = "Connecting...";
    flag = 0;
  }
});
