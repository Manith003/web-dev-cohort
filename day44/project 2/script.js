let btn = document.querySelector("button");
let main = document.querySelector("main");
let img;
let imgArr = [
  {
    src: "https://imgs.search.brave.com/kKy52WLfNv2L6vu58JMuwD1NlTKkzN-LJWbY8iAjYgQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9ub2JpdGEtbm9i/aS0yNS0zMDB4MzAw/LnBuZw",
  },
  {
    src: "https://imgs.search.brave.com/qXSxsdo_6x2oVFJSfKQUly3Xz1xWjcaQ0jH0tFmJ2v4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9ub2JpdGEtbm9i/aS00Ny0yMjR4MzAw/LnBuZw",
  },
  {
    src: "https://imgs.search.brave.com/DcaAX_k_07zIQNPiGTdQyGSFSyg_lX6UUOUVwYMyCAo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEwL0Rv/cmFlbW9uLVBORy1D/bGlwYXJ0LUJhY2tn/cm91bmQucG5n",
  },
  {
    src: "./suneo.png",
  },
  {
    src: "./pngwing.com.png",
  },
  {
    src: "https://imgs.search.brave.com/1RXAuB88pAGlv0PXOKP79K9P4JYwfhU_GuZMwsmdmgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvOC9GbHlp/bmctRG9yYWVtb24t/UE5HLVRyYW5zcGFy/ZW50LUltYWdlLnBu/Zw",
  },
];

btn.addEventListener("click", function () {
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let num = Math.floor(Math.random() * imgArr.length);
  console.log(num);
  img = document.createElement("img");
  img.setAttribute("src", imgArr[num].src);
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.position = "absolute";
  img.style.top = x + "%";
  img.style.left = y + "%";
  main.appendChild(img);
});

let del = document.querySelector(".icon");

del.addEventListener("click", function () {
  let images = main.querySelectorAll("img");
  console.log(images);
  images.forEach(function (image) {
    image.remove();
  });
});
