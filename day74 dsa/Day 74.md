Notes of the day
---

## ✅ Q90. 75. Sort Colors (Dutch National Flag Algorithm)

```js
var swap = function(nums , i , j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```

* A simple helper function to swap two elements in the array `nums`.

```js
var sortColors = function(nums) {
    let i = 0, j = 0, k = nums.length - 1;
```

* `i`: current index we're inspecting.
* `j`: boundary for `0`s (start of the array).
* `k`: boundary for `2`s (end of the array).

```js
    while (i <= k) {
```

* Loop continues as long as `i` hasn’t crossed the `2` region (`k`).

```js
        if (nums[i] == 0) swap(nums, i++, j++);
```

* If the number is `0`, swap it to the front (`j`) and move both `i` and `j` forward.

```js
        else if (nums[i] == 2) swap(nums, i, k--);
```

* If the number is `2`, move it to the back (`k`), but don’t move `i` forward since we need to re-check the swapped value.

```js
        else i++;
    }
};
```

* If the number is `1`, just move `i` forward.

---

## ✅ Q91. 42. Trapping Rain Water

```js
var trap = function(height) {
    let left = new Array(height.length)
    let right = new Array(height.length)
```

* Arrays to store max height to the **left** and **right** of each bar.

```js
    let maxLeft = height[0], maxRight = height[height.length-1];
    left[0] = maxLeft , right[right.length-1] = maxRight
```

* Initialize edge values for left and right max arrays.

```js
    for (let i = 1; i < height.length; i++) {
        maxLeft = Math.max(height[i], maxLeft)
        left[i] = maxLeft;
    }
```

* Build the `left[]` array: at each index, store the **maximum height from the left** up to that point.

```js
    for (let i = height.length - 2; i >= 0; i--) {
        maxRight = Math.max(height[i], maxRight)
        right[i] = maxRight;
    }
```

* Build the `right[]` array: at each index, store the **maximum height from the right** up to that point.

```js
    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(left[i], right[i]) - height[i]
    }
```

* At each index, the trapped water = `min(leftMax, rightMax) - currentHeight`

```js
    return ans;
};
```

* Return total trapped water.

---

## ✅ Q92. 11. Container With Most Water

### 📌 Brute Force (O(n²)) – Method 1:

```js
var maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let minHeight = Math.min(height[i], height[j]);
            maxArea = Math.max(maxArea, width * minHeight);
        }
    }
    return maxArea;
};
```

### 🔍 Line-by-Line:

* Try **every pair (i, j)**.
* For each pair, calculate:

  * Width = `j - i`
  * Height = `min(height[i], height[j])`
  * Area = width × height
* Update `maxArea` if this area is greater.

---

### ✅ Two-Pointer (O(n)) – Method 2:

```js
var maxArea = function(arr) {
    let maxArea = 0;
    let i = 0, j = arr.length - 1;
```

* Two pointers: `i` starts at left, `j` at right.

```js
    while (i != j) {
        maxArea = Math.max(maxArea, Math.min(arr[i], arr[j]) * (j - i));
```

* Compute area between lines at `i` and `j`:

  * Height = min(arr\[i], arr\[j])
  * Width = j - i

```js
        if (arr[i] < arr[j]) i++;
        else j--;
    }
    return maxArea;
};
```

* Move the pointer that has the **smaller height**, in hopes of finding a **taller wall** and increasing area.

---
