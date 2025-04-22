var img = document.querySelector("#main-img");
var love = document.querySelector(".ri-heart-3-fill");
var like = document.querySelector("#likebtn");

count = 0;
img.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(5)";
  console.log("double click");
  love.style.transition = "transform 0.3s ease";

  like.setAttribute("src", "heart-3-fill.png");

  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 900);
});

like.addEventListener("click", function () {
  like.setAttribute("src", "heart-line.png");
});
