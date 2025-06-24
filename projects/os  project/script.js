let main = document.querySelector("main");
let contextMenu = document.querySelector("#contextMenu");
let newFolder = document.querySelector(".newFolder");
let reload = document.querySelector(".reload");
let noteicon = document.querySelector(".notepad");
let notepad = document.querySelector("#notepaad");
let notepaad_max_btn = document.querySelector(".notepaad-max-btn");
let notepadCloseBtn = document.querySelector(".closeBtn");
let notepadHeader = document.querySelector(".notepadHeader");
let ChangeBackground = document.querySelector(".Change_Background");
let contextMenu2 = document.querySelector("#contextMenu2");
let rename = document.querySelector(".rename");
let Delete = document.querySelector(".delete");
let braveLogo = document.querySelector(".braveLogo");
let title_bar = document.querySelector(".title-bar");
let googleWindow = document.querySelector("#googleWindow");
let window_closeBtn = document.querySelector(".window-closeBtn");
let window_max_btn = document.querySelector(".window-max-btn");
let folderNew1 = document.querySelector("#folderNew1");
let folderHeader = document.querySelector(".folderHeader");
let folderNew1_max_btn = document.querySelector(".folderNew1-max-btn");
let folderNew1_closeBtn = document.querySelector(".folderNew1-closeBtn");
let folderImg = document.querySelector(".folderImg");
let copilot = document.querySelector("#copilot");
let copilotHeader = document.querySelector(".copilotHeader");
let copilot_max_btn = document.querySelector(".copilot-max-btn");
let copilot_closeBtn = document.querySelector(".copilot-closeBtn");
let copilotImg = document.querySelector(".copilot");
let microsoftStore = document.querySelector("#microsoftStore");
let microsoftStoreHeader = document.querySelector(".microsoftStoreHeader");
let microsoftStore_max_btn = document.querySelector(".microsoftStore-max-btn");
let microsoftStore_closeBtn = document.querySelector(".microsoftStore-closeBtn");
let microsoftStoreImg = document.querySelector(".store");
let windowslogo1 = document.querySelector('.windowslogo1');
let windows_button = document.querySelector('#windows-button');

let time = document.querySelector(".time");
const calendarPopup = document.getElementById("calendarPopup");
let brightnessSlider = document.querySelector("#brightnessSlider");

main.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.classList.remove("hidden");
});

document.addEventListener("click", () => {
  contextMenu.classList.add("hidden");
  contextMenu2.classList.add("hidden");
});

let folderCount = 1;
let nextX = 5;
let nextY = 5;
const folderSpacingY = 90;
const folderSpacingX = 100;
const maxY = window.innerHeight;

let targetFolder = null;
let folderName = '';
function createFolder() {
  let folder = document.createElement("div");
  folder.className = "folder";
  folderName = `New Folder ${folderCount++}`;

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

    //adding rename and delete feature;
    folder.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    e.stopPropagation();
    targetFolder = folder;
    contextMenu2.style.left = `${e.pageX}px`;
    contextMenu2.style.top = `${e.pageY}px`;
    contextMenu2.classList.remove("hidden");
  });
  
  let input = folder.querySelector("input");
  rename.addEventListener("click", function () {
    let updatedName = "";
    input.value = "";
    input.removeAttribute("readonly");
    input.focus();
    input.addEventListener("input", function (e) {
      updatedName += e.data;
      folderName = updatedName;
    });
  });

  Delete.addEventListener("click", function () {
    if (targetFolder) {
      targetFolder.remove();
      targetFolder = null;
    }
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

notepaad_max_btn.addEventListener("click", function () {
  notepad.classList.toggle("maximized");
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
  const isTodayMonth =
    today.getFullYear() === year && today.getMonth() === month;

  title.textContent = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

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
  document.getElementById("clockArea").textContent = now.toLocaleTimeString(
    "en-IN",
    { hour12: false }
  );
}
setInterval(updateClock, 1000);
updateClock();

ChangeBackground.addEventListener("click", function () {
  let backgroundChangeImg = prompt("Paste the Wallpaper link to Change");

  if (backgroundChangeImg) {
    main.style.backgroundImage = `url(${backgroundChangeImg})`;
  } else {
    main.style.backgroundImage = `url(./assets/11-0-Big-Sur-Color-Night.avif)`;
  }
});

brightnessSlider.addEventListener("input", function (e) {
  main.style.filter = `brightness(${e.target.value}%)`;
});

const API_KEY = "AIzaSyB78my01_mzGF15wYQiPmF0Mb0HEJsJq5I";
const SEARCH_ENGINE_ID = "333629dafb95148c8";

async function searchGoogle() {
  const query = document.getElementById("searchBox").value;
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
    query
  )}`;

  const res = await fetch(url);
  const data = await res.json();

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (data.items) {
    data.items.forEach((item) => {
      resultsDiv.innerHTML += `
          <div>
            <a href="${item.link}" target="">${item.title}</a>
            <p>${item.snippet}</p>
          </div>
        `;
    });
  } else {
    resultsDiv.innerHTML = "No results found.";
  }
}

braveLogo.addEventListener("click", function () {
  googleWindow.classList.remove("hidden");
  makeFolderDraggable4(title_bar);
});

window_closeBtn.addEventListener("click", function () {
  googleWindow.classList.add("hidden");
});

window_max_btn.addEventListener("click", function () {
  googleWindow.classList.toggle("maximized");
});

function makeFolderDraggable4(title_bar) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  title_bar.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - googleWindow.offsetLeft;
    offsetY = e.clientY - googleWindow.offsetTop;
    googleWindow.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      googleWindow.style.left = `${e.clientX - offsetX}px`;
      googleWindow.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

folderImg.addEventListener("click", function () {
  folderNew1.classList.remove("hidden");
  makeFolderDraggable5(folderHeader);
});

folderNew1_closeBtn.addEventListener("click", function () {
  folderNew1.classList.add("hidden");
});

folderNew1_max_btn.addEventListener("click", function () {
  folderNew1.classList.toggle("maximized");
});

function makeFolderDraggable5(folderHeader) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  folderHeader.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - folderNew1.offsetLeft;
    offsetY = e.clientY - folderNew1.offsetTop;
    folderNew1.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      folderNew1.style.left = `${e.clientX - offsetX}px`;
      folderNew1.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

copilotImg.addEventListener("click", function () {
  copilot.classList.remove("hidden");
  makeFolderDraggable6(copilotHeader);
});

copilot_closeBtn.addEventListener("click", function () {
  copilot.classList.add("hidden");
});

copilot_max_btn.addEventListener("click", function () {
  copilot.classList.toggle("maximized");
});

function makeFolderDraggable6(copilotHeader) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  copilotHeader.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - copilot.offsetLeft;
    offsetY = e.clientY - copilot.offsetTop;
    copilot.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      copilot.style.left = `${e.clientX - offsetX}px`;
      copilot.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

microsoftStoreImg.addEventListener("click", function () {
  microsoftStore.classList.remove("hidden");
  makeFolderDraggable7(microsoftStoreHeader);
});

microsoftStore_closeBtn.addEventListener("click", function () {
  microsoftStore.classList.add("hidden");
});

microsoftStore_max_btn.addEventListener("click", function () {
  microsoftStore.classList.toggle("maximized");
});

function makeFolderDraggable7(microsoftStoreHeader) {
  let isDragging = false;
  let offsetX = 0,
    offsetY = 0;

  microsoftStoreHeader.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    offsetX = e.clientX - microsoftStore.offsetLeft;
    offsetY = e.clientY - microsoftStore.offsetTop;
    microsoftStore.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      microsoftStore.style.left = `${e.clientX - offsetX}px`;
      microsoftStore.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

windowslogo1.addEventListener('click',function(){
  windows_button.classList.toggle('hidden');
})