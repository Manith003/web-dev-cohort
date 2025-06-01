
# 📚 Recursion / Math Problems


## **Q80. Count of Primes (Sieve of Eratosthenes)**

### ➡️ Code (Optimized):

function countPrimes(n) {
    let isPrime = new Array(n+1).fill(true);
    
    for (let i = 2; i<= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <=n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for(let i=2;i<isPrime.length;i++){
        if(isPrime[i])process.stdout.write(i+" ")
    }
}


### 🛠 Algorithm:
- Mark all numbers as prime initially.
- Start from 2. For each prime number, mark its multiples as non-prime.
- Count the numbers still marked as prime.
- Time Complexity**: `O(n log(log n))`

## **Q81. Sqrt(x)**

### ➡️ a) Brute Force Solution:


function sqrtBrute(x) {
    let i = 0;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}
Time Complexity of sqrtBrute(x):
The loop runs while i * i <= x.
So, i can go up to about √x (square root of x).
Thus, the number of iterations is roughly √x.
🔵 Final Time Complexity: O(√x)
✅ Works but slow for big numbers.


### ➡️ b) Optimized Solution (Binary Search):

function sqrtBinarySearch(x) {
    if (x < 2) return x;
    
    let left = 1, right = Math.floor(x / 2);
    let ans = 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
}



### 🛠 Algorithm:
- Think of square root as finding a number whose square is ≤ `x`.
- Use **binary search** between `1` and `x/2`.
- Keep narrowing down based on `mid * mid`.

**Time Complexity**: `O(log n)`

## **Q82. Pow(x, n)**
### ➡️ a) Brute Force Method (Multiply x n-times):

function powBrute(x, n) {
    let ans = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        ans *= x;
    }
    return n >= 0 ? ans : 1 / ans;
}

✅ Works but slow if n is large.

---

### ➡️ b) Optimized Recursive Method (Exponentiation by Squaring):

 public double myPow(double x, int n) {
        if(n==0) return 1.0;
        if(n<0) return 1/fun(x,n);
        return fun(x,n);
    }
    public double fun(double x , int n){
       if(n==0) return 1;
       double ans = fun(x , n/2);
       if(n%2==0) return ans*ans;
       return ans*ans*x;
    }

### 🛠 Algorithm:
- Divide the power into halves:
  - `x^n = (x^(n/2)) * (x^(n/2))`
- If **n** is odd, multiply an extra **x**.
- If **n** is negative, invert the result `1/x^n`.

**Time Complexity**: `O(log n)`


