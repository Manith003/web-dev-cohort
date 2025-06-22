let main = document.querySelector("main");
let contextMenu = document.querySelector("#contextMenu");
let newFolder = document.querySelector(".newFolder");
let reload = document.querySelector(".reload");
let noteicon = document.querySelector(".notepad");
let notepad = document.querySelector("#notepaad");
let notepadCloseBtn = document.querySelector(".closeBtn");
let notepadHeader = document.querySelector(".notepadHeader");

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
    folder.style.zIndex = 1000;
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
    folder.style.zIndex = 1000;
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
