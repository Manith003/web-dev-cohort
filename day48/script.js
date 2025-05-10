let input = document.querySelector("#todo-input");
let btn = document.querySelector("#add-todo");
let todoList = document.querySelector(".todo-list");

btn.addEventListener("click", function () {
    if(input.value.trim() === ''){
        alert("Please enter a todo item.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
});

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
   localStorage.setItem("todo", todoList.innerHTML);
// localStorage.clear();
}   

function showdata(){
    todoList.innerHTML = localStorage.getItem("todo");
}

showdata();