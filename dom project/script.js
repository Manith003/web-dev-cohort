function cardOpenFeature() {
  let allElems = document.querySelectorAll(".elems");
  let fullElems = document.querySelectorAll(".fullElems");
  let back = document.querySelectorAll(".back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElems[elem.id].style.display = "block";
    });
  });

  back.forEach((back) => {
    back.addEventListener("click", () => {
      fullElems[back.id].style.display = "none";
    });
  });
}

cardOpenFeature();

function todoList() {
  let form = document.querySelector(".addTask form");
  let allTasks = document.querySelector(".allTasks");
  let taskInput = document.querySelector(".addTask input");
  let important = document.querySelector(".addTask #importantCheckbox");
  let taskDescription = document.querySelector(".addTask textarea");
  let removeAllTasksButton = document.querySelector("#removeAllTasksButton");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    var inputValue = taskInput.value.trim();
    var descriptionValue = taskDescription.value.trim();

    if (inputValue === "") {
      alert("Please enter a task.");
      return;
    }

    let data = `<div class="task">
                        <div class="taskDetails">
                            <h2>${inputValue} <span>${
      important.checked ? "ImportantTask" : ""
    }</span></h2>
                            <p>${descriptionValue}</p>
                        </div>
                        <button class="removeTaskButton">Mark As Completed</button>
                    </div>`;
    allTasks.innerHTML += data;

    localStorage.setItem("tasks", allTasks.innerHTML);

    taskInput.value = "";
    taskDescription.value = "";
  });

  let storedTask = localStorage.getItem("tasks");
  if (storedTask) {
    allTasks.innerHTML = storedTask;
  }

  removeAllTasksButton.addEventListener("click", () => {
    let ans = prompt("do you want to remove all tasks? (yes/no)");
    if (ans === null) {
      alert("Action cancelled");
      return;
    }
    if (ans.toLowerCase() === "yes") {
      allTasks.innerHTML = "";
      localStorage.removeItem("tasks");
      alert("All tasks removed successfully");
    } else {
      alert("Tasks not removed");
    }
  });

  allTasks.addEventListener("click", (e) => {
    console.log(e);

    if (e.target.classList.contains("removeTaskButton")) {
      e.target.parentElement.remove();
      localStorage.setItem("tasks", allTasks.innerHTML);
    }
  });
}

todoList();

/* adding daily planner functionality */

function dailyPlanner(){
  let dailyPlanner = document.querySelector(".day-planner");
let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

var hours = Array.from({ length: 18 }, function (_, index) {
  return `${index + 6}:00 - ${index + 7}:00`;
});

let dailyPlannerData = "";
hours.forEach((hour, idx) => {
  var saveData = dayPlanData[idx] || "";
  dailyPlannerData += `<div class="day-planner-time">
                    <p>${hour}</p>
                    <input type="text" id="${idx}" placeholder="..." value=${saveData}>
                </div>`;
});
dailyPlanner.innerHTML = dailyPlannerData;

let dailyPlannerInput = document.querySelectorAll(".day-planner input");
dailyPlannerInput.forEach((elem) => {
  elem.addEventListener("input", () => {
    dayPlanData[elem.id] = elem.value;
    localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
  });
});

setTimeout(()=>{
  localStorage.removeItem("dayPlanData");
  location.reload();
  alert("Daily planner data cleared after 24 hours");
},86400000);

}

dailyPlanner();