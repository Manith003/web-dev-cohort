
// // doing revision on promises
// function getUser(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res({id:1 , name: "manith003"})
//     },2000)
//   })
// }

// function getProfile(userId){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       res(["pic1", "pic2", "pic3"]);
//     },1000);
//   })
// }

// getUser().then((data)=>{
//   console.log(data);
//   return getProfile(data.id);
// })
// .then((data)=>{
//   console.log(data);
// })

// // learn about fetch

function getUser(username){
 return fetch(`https://api.github.com/users/${username}`)
  .then(raw => raw.json())
}


let btn = document.querySelector("#searchButton");


btn.addEventListener("click", () => {
  let username = document.querySelector("input").value;
  getUser(username).then((data) => {
    console.log(data);
  })
})

