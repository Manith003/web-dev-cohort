Notes of the day:

## ✅ Q87. **53. Maximum Subarray**

**Goal:** Find the contiguous subarray (at least one number) with the **largest sum**.
**Classic Solution:** **Kadane's Algorithm**

---

### 🔹 Method 1: **Kadane’s Algorithm (Efficient)**

```javascript
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum =0;
    for(let i=0;i<nums.length;i++){
      sum += nums[i]
      max = Math.max(max , sum)
      if(sum<0) sum =0;
    }
    return max;
};
```

**🧠 Explanation (Kadane’s Algo):**

Step-by-Step:

Initialize:
max = -Infinity → to store the largest subarray sum found so far.
sum = 0 → current running sum of the subarray.

Traverse the array:
Add the current element to sum.
If sum is greater than max, update max.
If sum becomes negative, reset it to 0 (because continuing with a negative sum will hurt future subarrays).

Return max, the highest subarray sum encountered.

---

### 🔹 Method 2: **Brute Force (O(n²))**

```javascript
function maxSubArrayBrute(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}
```

**🧠 Explanation:**

* Check all subarrays starting at index `i` and ending at `j`.
* Track the sum and update the max found so far.
* Less efficient: **O(n²)** time complexity.

---

## ✅ Q88. **169. Majority Element**

**Goal:** Find the element that appears **more than ⌊n / 2⌋ times**.

---

### 🔹 Method 1: **Boyer-Moore Voting Algorithm (O(n), O(1))**
### 🔍 Your Code:

```javascript
var majorityElement = function(nums) {
  let ans = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return ans;
};
```

---

### ✅ **Step-by-Step Explanation (Boyer-Moore Voting Algorithm):**

1. **Initialize:**

   * `ans`: current **candidate** for majority element.
   * `count`: how confident we are that `ans` is the majority (starts at 1).

2. **Loop through array:**

   * If `count == 0`, reset `ans` to the current number and `count = 1`.
   * If the current number is **equal to `ans`**, increment `count`.
   * If it's **not equal**, decrement `count`.

3. **Logic Behind It:**

   * Every time a different element "cancels out" the current candidate by reducing `count`.
   * Since the majority element appears more than all others combined, it will **survive the cancellation process**.

---

### 🔁 Example Walkthrough:

```js
nums = [2, 2, 1, 1, 1, 2, 2]
```

| i | nums\[i] | ans | count | Action                   |
| - | -------- | --- | ----- | ------------------------ |
| 0 | 2        | 2   | 1     | Init                     |
| 1 | 2        | 2   | 2     | Same as ans → count++    |
| 2 | 1        | 2   | 1     | Different → count--      |
| 3 | 1        | 2   | 0     | Different → count-- → 0  |
| 4 | 1        | 1   | 1     | count == 0 → new ans = 1 |
| 5 | 2        | 1   | 0     | Different → count-- → 0  |
| 6 | 2        | 2   | 1     | count == 0 → new ans = 2 |

Final answer: `2`

---

### 🧠 Time and Space Complexity:

* **Time:** O(n)
* **Space:** O(1) (no extra memory used)

---

### 🔹 Method 2: **Hash Map Counting (O(n), O(n))**

```javascript
function majorityElementMap(nums) {
  let map = new Map();
  const majority = Math.floor(nums.length / 2);

  for (let num of nums) {
    // If the map already has this number, increment its count
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }

    // Check if this number is now the majority
    if (map.get(num) > majority) {
      return num;
    }
  }
}

```

**🧠 Explanation:**

Map is used to track how many times each number appears.
As soon as a number appears more than n / 2 times, return it.
The loop ensures that the solution is found in O(n) time.


---

## ✅ Q89. **121. Best Time to Buy and Sell Stock**

**Goal:** Find the **maximum profit** by buying and selling one stock.

---

### 🔹 Efficient Method: **Track Min Price + Max Profit**

```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
```

**🧠 Explanation:**

* Traverse the array.
* Keep track of the **lowest price so far** (`minPrice`).
* At each step, calculate profit as `price - minPrice`.
* Update `maxProfit` if this profit is higher.

---


