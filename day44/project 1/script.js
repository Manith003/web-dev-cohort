//today topic is Advance DOM concept
// 1. getAtribute and setAtribute
// 2. createElement and appendChild
// 3. mouse ,keyboard scroll dblclick wheel events


let btn = document.querySelector("button");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
btn.addEventListener("click", function () {
    let img1Src = img1.getAttribute("src");
    let img2Src = img2.getAttribute("src");

    img1.setAttribute("src", img2Src);
    img2.setAttribute("src", img1Src);
})

