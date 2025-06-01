Notes of Day53

Q63.Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    let set = new Set()
    for(let i=0;i<jewels.length;i++){
        set.add(jewels.charAt(i))
    }

    let count =0;
    for(let i=0;i<stones.length;i++){
       if(set.has(stones.charAt(i))) count++;
    }

return count
};

Q65. Happy Number

var isHappy = function(n) {
    let set = new Set()
    while(true){
      let sum =0;
       while(n>0){
        let dig =  n%10;
        sum = sum + (dig*dig);
        n = Math.floor(n/10)
       }
       if(sum == 1)return true;
       if(set.has(sum)) return false
       else set.add(sum)

       n = sum
       
    }
    return false
};

Map in JavaScript:
Map is a built-in object that holds key-value pairs.
Unlike regular objects, a Map can have keys of any type (not just strings or symbols).

Map remembers the original insertion order of the keys.

It has better performance for frequently adding/removing key-value pairs compared to plain objects.

let map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
map.clear();

Example:
let myMap = new Map();

// Adding values
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'booleanKey');

// Accessing values
console.log(myMap.get('name'));  // Output: Alice
console.log(myMap.get(true));    // Output: booleanKey

// Checking existence
console.log(myMap.has('age'));   // Output: true

// Iterating over Map
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Size of Map
console.log(myMap.size);  // Output: 3




