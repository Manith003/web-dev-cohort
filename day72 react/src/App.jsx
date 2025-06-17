import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("manith");

  const changeHandler = () => {
    setUsername("dhanesh"); // this is async
  }
  console.log(username); // this is sync

  return (
    <div>
      <h1>username : {username}</h1>
      <button onClick={changeHandler}>change name</button>
    </div>
  );
};

export default App;


// const App = () => {
//   let n = 10; 
//   let s = "hi manith";
//   let b = false;
//   let nu = null;
//   let un = undefined;
//   let arr = [<h1>hello</h1>,"hi",12,true,null,undefined,"manith"];
//   let obj = {name: "manith",age: 20};
//   return (
//     <div>
//       <h1>DataTypes</h1>
//       <h2>number : {n}</h2>
//       <h2>string : {s}</h2>
//       <h2>boolean : {b}</h2>
//       <h2>null : {nu}</h2>
//       <h2>undefined : {un}</h2>
//       <h2>array : {arr}</h2>
//       <h2>object : {obj.name},{obj.age}</h2>
//     </div>
//   )
// }

// export default App,


// const App = () => {
//   const profiles = [
//     { name: "manith", age: 20 },
//     { name: "sarthak", age: 27 },
//     { name: "jhon", age: 25 },
//   ];

  
//   const updatedProfiles = profiles.map((profile, index) => {
//     return (
//       <li key={index}>
//         <h3>
//           {profile.name}, {profile.age}          
//         </h3>
//       </li>
//     );
//   });
  

//   return (
//     <div>
//       <h1>json rendering</h1>
//       <ol>{updatedProfiles}</ol>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("manith");

//   const changeHandler = () => {
//     setUsername("dhanesh"); // this is async
//   }
//   console.log(username); // this is sync

//   return (
//     <div>
//       <h1>username : {username}</h1>
//       <button onClick={changeHandler}>change name</button>
//     </div>
//   );
// };

// export default App;
