// 1. mini task - 1

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let chance = Math.random() < .5;
//             if(chance) res();
//             else rej();
//         },2000)
//     })
// }

// orderFood().then(()=>{
//     console.log("Pizza Delivered");
// }).catch(()=>{
//     console.log("Pizza Not Delivered, Order Again");
// })

//2. mini task - 2

// function getUser() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ id: 1, name: "Manith" });
//     }, 2000);
//   });
// }

// function getPost(userId) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["title1", "title2"]);
//     }, 2000);
//   });
// }

// function getComments(postId) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["comment1", "comment2", "comment3"]);
//     }, 1000);
//   });
// }

// getUser()
//   .then((data) => {
//     console.log(data);
//     return getPost(data.id);
//   })
//   .then((titles) => {
//     console.log(titles);
//     return getComments("manith");
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .finally(() => {
//     console.log("All operations completed");
//   });

// task 3

function fakeApiCall(endpoint) {
  const data = {
    user: ["harsh", "manith", "sai"],
    posts: ["post1", "post2", "post3"],
  };

  let delay = Math.random() * 2000 + 1000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data[endpoint]);
    }, delay);
  });
}

fakeApiCall("user").then((data) => {
  console.log("User Data:", data);
  return fakeApiCall("posts");
})
.then((data)=>{
    console.log("Posts Data:", data);
})
