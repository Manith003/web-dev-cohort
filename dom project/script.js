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

function dailyPlanner() {
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

  setTimeout(() => {
    localStorage.removeItem("dayPlanData");
    location.reload();
    alert("Daily planner data cleared after 24 hours");
  }, 86400000);
}
dailyPlanner();

/* adding motiavation functionality */

function motivationquote() {
  let motivationQuote = document.querySelector(".motivation-2 h1");
  let motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    motivationQuote.innerHTML = `"${data.quote}"`;
    motivationAuthor.innerHTML = `~${data.author}`;
  }
  fetchQuote();
}
motivationquote();

/* adding pomodoro timer functionality */
function pomodoro() {
  let timer = document.querySelector(".pomo-timer h1");
  let btn1 = document.querySelector(".start-timer");
  let btn2 = document.querySelector(".pause-timer");
  let btn3 = document.querySelector(".reset-timer");
  let session = document.querySelector(".session");
  let isWorkSession = true;

  let totalSecond = 25 * 60;

  function upDateTimer() {
    let minuts = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;
    timer.innerHTML = `${String(minuts).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  upDateTimer();

  let interval;
  btn1.addEventListener("click", () => {
    if (isWorkSession) {
      interval = setInterval(() => {
        if (totalSecond > 0) {
          totalSecond--;
          upDateTimer();
        } else {
          isWorkSession = false;
          clearInterval(interval);
          session.innerHTML = "Take a Break";
          totalSecond = 5 * 60;
          upDateTimer();
          btn1.disabled = false;
        }
      }, 1000);
    } else {
      interval = setInterval(() => {
        if (totalSecond > 0) {
          totalSecond--;
          upDateTimer();
        } else {
          isWorkSession = true;
          clearInterval(interval);
          session.innerHTML = "Work Session";
          totalSecond = 25 * 60;
          upDateTimer();
          btn1.disabled = false;
        }
      }, 1000);
    }
    btn1.disabled = true;
  });

  btn2.addEventListener("click", () => {
    clearInterval(interval);
    btn1.disabled = false;
  });

  btn3.addEventListener("click", () => {
    clearInterval(interval);
    totalSecond = 25 * 60;
    upDateTimer();
    btn1.disabled = false;
  });
}
pomodoro();

/* weather functionality */
function weather() {
  let header1h1 = document.querySelector(".header1 h1");
  let header1h2 = document.querySelector(".header1 h2");
  let header2h2 = document.querySelector(".header2 h2");
  let header2h4 = document.querySelector(".header2 h4");
  let precipitation = document.querySelector(".header2 .precipitation");
  let humidity = document.querySelector(".header2 .humidity");
  let wind = document.querySelector(".header2 .wind");

  let api = "d2194afce4414c448ee114147250806";
  var city = "Chennai";

  let data = null;

  async function weatherApiCall() {
    var response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`
    );
    data = await response.json();
    header2h2.innerHTML = `${data.current.temp_c}°C`;
    header2h4.innerHTML = `${data.current.condition.text}`;
    precipitation.innerHTML = `Precipitation: ${data.current.precip_mm} mm`;
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
  }
  weatherApiCall();

  function timeDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let month = monthsOfYear[date.getMonth()];

    header1h2.innerHTML = `${date.getDate()} ${month}, ${date.getFullYear()}`;

    if (hours > 12) {
      header1h1.innerHTML = `${daysOfWeek[date.getDay()]}, ${
        hours - 12
      }:${minutes} PM`;
    } else {
      header1h1.innerHTML = `${
        daysOfWeek[date.getDay()]
      }, ${hours}:${minutes} AM`;
    }
  }

  setInterval(() => {
    timeDate();
  }, 1000);
}
weather();

function themeChanger() {
  const premiumThemes = {
    // 1. Blue Steel
    "premium-blue": {
      "--primary": "#27374d",
      "--secondary": "#526d82",
      "--accent": "#9db2bf",
      "--background": "#dde6ed",
    },

    // 2. Emerald Luxe
    "premium-emerald": {
      "--primary": "#184d47",
      "--secondary": "#2c786c",
      "--accent": "#b5c99a",
      "--background": "#e7f6e7",
    },

    // 3. Royal Purple
    "premium-purple": {
      "--primary": "#46344e",
      "--secondary": "#635985",
      "--accent": "#a084ca",
      "--background": "#e0aed0",
    },

    // 4. Gold Elegance
    "premium-gold": {
      "--primary": "#6e5849",
      "--secondary": "#b29962",
      "--accent": "#ffd700",
      "--background": "#fffbe7",
    },

    // 5. Deep Teal
    "premium-teal": {
      "--primary": "#22313f",
      "--secondary": "#34495e",
      "--accent": "#16a085",
      "--background": "#eaf6f6",
    },

    // 6. Ruby Velvet
    "premium-ruby": {
      "--primary": "#8b2635",
      "--secondary": "#b4464a",
      "--accent": "#e76f51",
      "--background": "#fff3e6",
    },

    // 7. Sapphire Night
    "premium-sapphire": {
      "--primary": "#23395d",
      "--secondary": "#406e8e",
      "--accent": "#70a9a1",
      "--background": "#e2ece9",
    },

    // 8. Charcoal Silver
    "premium-charcoal": {
      "--primary": "#232526",
      "--secondary": "#6e7b8b",
      "--accent": "#bfc6d1",
      "--background": "#f4f5f6",
    },

    // 9. Rose Quartz
    "premium-rose": {
      "--primary": "#b76e79",
      "--secondary": "#e2a9be",
      "--accent": "#f6e0e9",
      "--background": "#fff6fb",
    },

    // 10. Obsidian Mint
    "premium-obsidian": {
      "--primary": "#2d2d2d",
      "--secondary": "#3e5641",
      "--accent": "#cee397",
      "--background": "#f1f6e7",
    },

    // 11. Mocha Creme
    "premium-mocha": {
      "--primary": "#6f4e37",
      "--secondary": "#b89d82",
      "--accent": "#ffe3b3",
      "--background": "#f7f3ec",
    },

    // 12. Navy Blush
    "premium-navy": {
      "--primary": "#22356f",
      "--secondary": "#f76c6c",
      "--accent": "#f9f7f7",
      "--background": "#e2eafc",
    },

    // 13. Forest Gold
    "premium-forest": {
      "--primary": "#355834",
      "--secondary": "#a6a15a",
      "--accent": "#c6c84b",
      "--background": "#f3f6e3",
    },

    // 14. Sandstone
    "premium-sandstone": {
      "--primary": "#c2b280",
      "--secondary": "#bdb76b",
      "--accent": "#e1c699",
      "--background": "#f6f1e7",
    },

    // 15. Arctic Ice
    "premium-arctic": {
      "--primary": "#4b7bec",
      "--secondary": "#45aaf2",
      "--accent": "#a5b8d0",
      "--background": "#eff6fc",
    },
  };

  function applyTheme(themeName) {
    const theme = premiumThemes[themeName];
    if (!theme) return;

    Object.entries(theme).forEach(([varName, value]) => {
      document.documentElement.style.setProperty(varName, value);
    });
  }

  const themeNames = Object.keys(premiumThemes);
  let currentTheme = 0;

  document.querySelector(".change-theme").addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themeNames.length;
    applyTheme(themeNames[currentTheme]);
  });
  applyTheme(themeNames[0]);
}
themeChanger();
