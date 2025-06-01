Q74. Print natural numbers 1 to n and n to 1 using recursion

// Print 1 to n
function print1ToN(n) {
    if (n === 0) return;
    print1ToN(n - 1);
    console.log(n);
}

// Print n to 1
function printNTo1(n) {
    if (n === 0) return;
    console.log(n);
    printNTo1(n - 1);
}

🛠 Algorithm:
Base Case: Stop when n === 0.
Recursive Step:

For 1 → n : first move down (n-1), then print n.
For n → 1 : print n, then move down (n-1).

Q75. Sum / Factorial using recursion

// Sum of numbers 1 to n
function sumN(n) {
    if (n === 0) return 0;
    return n + sumN(n - 1);
}

// Factorial of n
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

🛠 Algorithm:
Sum: Add current number n + sum of previous numbers.
Factorial: Multiply current number n × factorial of previous numbers.

Q76. Fibonacci series
➡️ a) Print first n terms of Fibonacci Series

function fibonacciSeries(n, a = 0, b = 1) {
    if (n === 0) return;
    console.log(a);
    fibonacciSeries(n - 1, b, a + b);
}

➡️ b) Find nth term in Fibonacci Series (Sum of nth term)
function fibonacciNth(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}

🛠 Algorithm:
Printing Series:
Keep two variables a and b.
Print a, then recursively call with next numbers (b, a+b).

Finding nth Term:
Base cases: 0th term is 0, 1st term is 1.
Otherwise, sum of (n-1)th and (n-2)th term.

