let main = document.querySelector("main");
let contextMenu = document.querySelector("#contextMenu");
let newFolder = document.querySelector(".newFolder");
let reload = document.querySelector(".reload");
let noteicon = document.querySelector(".notepad");
let notepad = document.querySelector("#notepaad");
let notepadCloseBtn = document.querySelector(".closeBtn");
let notepadHeader = document.querySelector(".notepadHeader");
let ChangeBackground = document.querySelector('.Change_Background')

let time = document.querySelector(".time");
const calendarPopup = document.getElementById("calendarPopup");

main.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.classList.remove("hidden");
});

document.addEventListener("click", () => {
  contextMenu.classList.add("hidden");
});

let folderCount = 1;
let nextX = 5;
let nextY = 5;
const folderSpacingY = 90;
const folderSpacingX = 100;
const maxY = window.innerHeight;

function createFolder() {
  let folder = document.createElement("div");
  folder.className = "folder";
  let folderName = `New Folder ${folderCount++}`;

  folder.innerHTML = `<img src="./assets/folder.png"  />
  <input type='text' value="${folderName}" readonly />
  `;

  folder.style.left = `${nextX}px`;
  folder.style.top = `${nextY}px`;

  // Update next position
  nextY += folderSpacingY;
  if (nextY + folderSpacingY > maxY) {
    nextY = 5;
    nextX += folderSpacingX;
  }

  main.appendChild(folder);
  contextMenu.classList.add("hidden");

  //adding rename feature
  let input = folder.querySelector("input");
  input.addEventListener("click", function () {
    let updatedName = "";
    input.value = "";
    input.removeAttribute("readonly");
    input.focus();
    input.addEventListener("input", function (e) {
      updatedName += e.data;
      folderName = updatedName;
    });
  });

  makeFolderDraggable(folder);

  folder.addEventListener("dblclick", function () {
    openFolder(folderName);
  });
}
newFolder.addEventListener("click", createFolder);

function reloadFun() {
  window.location.reload();
}
reload.addEventListener("click", reloadFun);

function makeFolderDraggable(folder) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  folder.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - folder.offsetLeft;
    offsetY = e.clientY - folder.offsetTop;
    folder.style.zIndex = 999;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      folder.style.left = `${e.clientX - offsetX}px`;
      folder.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

function openFolder(title) {
  let createdFolder = document.createElement("div");
  createdFolder.className = "opened-folder";
  createdFolder.innerHTML = `
     <div class="window-header">
      <span class="title">${title}</span>
      <div class="window-controls">
        <button class="min-btn">_</button>
        <button class="max-btn">□</button>
        <button class="close-btn">✖</button>
      </div>
    </div>
    <div class="window-body">
      <p>This is the content of <b>${title}</b>.</p>
    </div>

 `;

  main.appendChild(createdFolder);

  createdFolder.style.left = "200px";
  createdFolder.style.top = "100px";

  makeFolderDraggable2(createdFolder);

  const body = createdFolder.querySelector(".window-body");
  const minBtn = createdFolder.querySelector(".min-btn");
  const maxBtn = createdFolder.querySelector(".max-btn");
  const closeBtn = createdFolder.querySelector(".close-btn");

  minBtn.onclick = () => createdFolder.remove();
  maxBtn.onclick = () => createdFolder.classList.toggle("maximized");
  closeBtn.onclick = () => createdFolder.remove();
}

function makeFolderDraggable2(el) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  const dragTarget = el.querySelector(".window-header") || el;

  dragTarget.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

noteicon.addEventListener("click", function () {
  notepad.classList.remove("hidden");
  makeFolderDraggable3(notepadHeader);
});

notepadCloseBtn.addEventListener("click", function () {
  notepad.classList.add("hidden");
});

function makeFolderDraggable3(notepadHeader) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  notepadHeader.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - notepad.offsetLeft;
    offsetY = e.clientY - notepad.offsetTop;
    notepad.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      notepad.style.left = `${e.clientX - offsetX}px`;
      notepad.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

function updateTime() {
  let date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  time.innerHTML = `
<h3 class="timeText">${hour}:${minute}</h3>
<h3 class="date">${day}-${month}-${year}</h3>
`;
}

updateTime();
setInterval(updateTime, 1000);


const title = document.getElementById("calendarTitle");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let selectedDate = new Date();

time.addEventListener("click", () => {
  calendarPopup.classList.toggle("hidden");
  renderCalendar(selectedDate);
});

prevMonthBtn.onclick = () => {
  selectedDate.setMonth(selectedDate.getMonth() - 1);
  renderCalendar(selectedDate);
};

nextMonthBtn.onclick = () => {
  selectedDate.setMonth(selectedDate.getMonth() + 1);
  renderCalendar(selectedDate);
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  const isTodayMonth = today.getFullYear() === year && today.getMonth() === month;

  title.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

  calendarGrid.innerHTML = "";

  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  for (const label of dayLabels) {
    const cell = document.createElement("div");
    cell.textContent = label;
    cell.style.fontWeight = "bold";
    calendarGrid.appendChild(cell);
  }

  for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.textContent = day;
    cell.classList.add("day");

    if (isTodayMonth && day === today.getDate()) {
      cell.classList.add("today");
    }

    calendarGrid.appendChild(cell);
  }
}

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clockArea").textContent =
    now.toLocaleTimeString('en-IN', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();


ChangeBackground.addEventListener('click',function(){
let backgroundChangeImg = prompt('Paste the Wallpaper link to Change');

if(backgroundChangeImg){
  main.style.backgroundImage = `url(${backgroundChangeImg})`
}else{
  main.style.backgroundImage = `url(./assets/11-0-Big-Sur-Color-Night.avif)`
}

})