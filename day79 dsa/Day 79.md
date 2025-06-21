
## ✅ **Part 1: Leetcode 15 – 3Sum**

### 🧩 **Problem Statement**

Given an array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that:

* `i != j`, `i != k`, and `j != k`
* `nums[i] + nums[j] + nums[k] == 0`

### 🎯 **Goal**: Find all unique triplets in O(n²) time and O(1) extra space (besides output list).

---

### 🔍 **Brute Force Approach (O(n³))**

```javascript
function threeSumBruteForce(nums) {
    let result = new Set();
    let n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }

    // Convert set back to array of arrays
    return result;
}
```

#### 🔍 Explanation:

* We check **all combinations** of `i, j, k`.
* We use a **Set** to avoid duplicates by sorting and storing as string.
* Time: **O(n³)** due to 3 nested loops.
* Space: **O(n)** due to Set for duplicate checking.

---

### 🚀 **Optimized 2-Pointer Approach (O(n²)) and O(1) extra space**

```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort first
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
```

#### 🔍 Explanation:

* Sort the array → O(n log n)
* For each number, use 2-pointer to find the pair that sums to `-nums[i]`.
* Skip duplicates smartly.
* Time: **O(n²)**
* Space: **O(1)** (excluding output array)

---

## ✅ **Part 2: Merge Sort – Line by Line Explanation**

### Given:

```js
let arr = [10,7,8,2,19,69,45,8]
divide(arr , 0 , arr.length-1)
console.log(arr);
```

### 🔧 1. `divide(arr, f, l)`

```js
function divide(arr , f , l){
    if(f >= l) return; // base case, 1 element
    let mid = Math.floor((f + l) / 2); // find mid
    divide(arr , f , mid); // sort left half
    divide(arr , mid+1 , l); // sort right half
    conquer(arr , f , mid , l); // merge two halves
}
```

* **Splits** the array recursively.
* Works like **binary tree** division until base case (1 element).
* Then calls `conquer` to merge sorted parts.

---

### 🧠 2. `conquer(arr, f, m, l)`

```js
function conquer(arr , f , m , l){
    let temp = new Array(l - f + 1).fill(0);
    let i = f, j = m+1, k = 0;

    // Compare and fill the temp array
    while(i <= m && j <= l){
        if(arr[i] < arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }

    // Copy remaining elements from left half
    while(i <= m){
        temp[k++] = arr[i++];
    }

    // Copy remaining elements from right half
    while(j <= l){
        temp[k++] = arr[j++];
    }

    // Copy sorted temp back to original array
    i = f;
    k = 0;
    while(k < temp.length){
        arr[i++] = temp[k++];
    }
}
```

#### 🔍 Summary:

* Merges two sorted halves \[f...m] and \[m+1...l].
* Uses extra `temp[]` to hold merged values.
* Time: **O(n log n)** overall
* Space: **O(n)** due to temp array (not in-place)

---

## 🔚 Conclusion

| Problem          | Time Complexity | Space Complexity | Notes                         |
| ---------------- | --------------- | ---------------- | ----------------------------- |
| 3Sum (Brute)     | O(n³)           | O(n)             | Uses Set                      |
| 3Sum (Optimized) | O(n²)           | O(1)             | Uses sort + 2-pointer         |
| Merge Sort       | O(n log n)      | O(n)             | Recursive, divide-and-conquer |

