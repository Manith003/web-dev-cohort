Notes of the day:

Q67. Two Sum:
Given an array of integers nums and a target, return the indices of the two numbers such that they add up to target.

Approach 1: Brute Force (O(n²))
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
⚡️ Approach 2: Hash Map (O(n))
javascript
Copy
Edit
function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

Q68. First Letter Appears Twice
Given a string, find the first character that appears twice.

Approach 1: Set Lookup (O(n))

function repeatedCharacter(s) {
    let seen = new Set();

    for(let char of s) {
        if(seen.has(char)) return char;
        seen.add(char);
    }
    return null;
}

Approach 2: Map for Frequency Counting
function repeatedCharacter(s) {
    let freq = new Map();

    for(let char of s) {
        if(freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
            if(freq.get(char) === 2) return char;
        } else {
            freq.set(char, 1);
        }
    }

    return null;
}
Explanation:
A Map stores the frequency of each character.
When any character’s count reaches 2, that’s your answer.
If none reaches 2, return null.


Q69. Sort the People
Given names and corresponding heights, sort the people in descending order by height.

let names = ["Alice", "Bob", "Charlie"];
let heights = [165, 180, 175];

Expected output:
["Bob", "Charlie", "Alice"]

Approach:
var sortPeople = function(names, heights) {
    let map = new Map()
    for(let i=0;i<names.length;i++){
       map.set(heights[i] , names[i]);
    }
    heights.sort((a,b)=> b-a)
    // height = [180,170,165]

    let ans = new Array(names.length)
    for(let i=0;i<ans.length;i++){
         ans[i] = map.get(heights[i])
    }
    return ans;
};


Number Conversion & Bitwise Operators

✅ 1️⃣ Decimal to Binary Process
Divide the number by 2.
Record the remainder (0 or 1).
Keep dividing the quotient by 2 until it becomes 0.
Reverse the remainders → this is your binary.

Example:
Decimal: 10  
10 ÷ 2 = 5, remainder 0  
5 ÷ 2 = 2, remainder 1  
2 ÷ 2 = 1, remainder 0  
1 ÷ 2 = 0, remainder 1  

Reverse: 1010 → Binary.

2️⃣ Binary to Decimal Process

Start from the rightmost bit.
Multiply each bit by 2^position.
Sum all the results.

Example:
Binary: 1010  
= (1×2³) + (0×2²) + (1×2¹) + (0×2⁰)  
= 8 + 0 + 2 + 0 = 10 (Decimal)


Bitwise Operators in JavaScript:

1️⃣ & (AND Operator)
Compares each bit of two numbers.

Returns 1 if both bits are 1, otherwise 0.

Example:

let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a & b);  // Output: 1 (Binary: 001)

2️⃣ | (OR Operator)
Compares each bit of two numbers.
Returns 1 if at least one bit is 1, otherwise 0.

Example:
let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a | b);  // Output: 7 (Binary: 111)

3️⃣ ^ (XOR Operator)
Compares each bit of two numbers.
Returns 1 if the bits are different, 0 if they are the same.

Example:

let a = 5;    // Binary: 101
let b = 3;    // Binary: 011
console.log(a ^ b);  // Output: 6 (Binary: 110)

Summary:
& → Both must be 1 to return 1.
| → At least one 1 to return 1.
^ → Returns 1 when bits are different.

