// // let a = [1,2,3,4,5];
// // a.forEach(function(elem,ind){
// //     console.log(elem,ind);
// // })
// // console.log(a);

let arr = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Mike",
    age: 35,
    city: "Chicago",
  },
  {
    name: "Sara",
    age: 28,
    city: "Miami",
  },
];

let sum =0
arr.forEach(function(elem){
  sum += elem.age;
})

console.log(sum);

