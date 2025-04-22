let main = document.querySelector("main");
let cursor = document.querySelector(".cursor");
let h1 = document.querySelector(".text");

console.log(cursor);
main.addEventListener("mousemove", function(dets){
console.log(dets);
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

})

h1.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor.style.width = "100px";
    cursor.style.height = "100px";
   
})

h1.addEventListener("mouseleave", function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
   
})