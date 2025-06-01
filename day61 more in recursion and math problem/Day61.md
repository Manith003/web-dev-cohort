# 📚 Recursion Problems in JavaScript

## **Q77. Sum of digits (e.g., 891 → 18)**

function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

### 🛠 Algorithm:
- **Base case**: If number is 0, return 0.
- **Recursive case**: 
  - Take the last digit `n % 10`.
  - Add it to the sum of the rest `sumOfDigits(n/10)`.

## **Q78. Reverse of digits (e.g., 891 → 198)**

function reverseNumber(n, rev = 0) {
    if (n === 0) return rev;
    return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}

### 🛠 Algorithm:
- **Base case**: If number becomes 0, return the reversed number.
- **Recursive case**:
  - Multiply `rev` by 10 and add `n%10`.
  - Call the function for `Math.floor(n/10)`.


# 🧮 Maths Problem
## **Q77 (Maths). Find GCD using Recursion**

### ➡️ a) **O(min(a,b))** — Brute Force GCD:

function gcdBruteForce(a, b, i = Math.min(a, b)) {
    if (a % i === 0 && b % i === 0) return i;
    return gcdBruteForce(a, b, i - 1);
}

### ➡️ b) **O(max(a,b))** — Subtraction Method:

function gcdSubtraction(a, b) {
    if (a === b) return a;
    if (a > b) return gcdSubtraction(a - b, b);
    return gcdSubtraction(a, b - a);
}


### ➡️ c) **O(log(max(a,b)))** — Euclidean Algorithm (Optimal):

function gcdEuclidean(a, b) {
    if (b === 0) return a;
    return gcdEuclidean(b, a % b);
}


