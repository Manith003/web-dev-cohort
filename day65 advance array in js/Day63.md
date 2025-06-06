Here’s a clean and structured format of the 4 problems (Q83–Q86) with JavaScript solutions** and algorithm explanations:

---

### ✅ Q83. Merge Sorted Array
**Problem**: Merge two sorted arrays (`nums1`, `nums2`) into one, modifying `nums1` in-place.  
**Assumption**: `nums1` has extra space at the end to hold elements of `nums2`.

function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = nums1.length - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
        else nums1[k--] = nums2[j--];
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}


🔹 **Algorithm**:
- Use three pointers from the **end**.
- Compare elements from `nums1` and `nums2`, placing larger values at the end of `nums1`.
- Fill remaining `nums2` elements if any are left.

🕒 **Time Complexity**: `O(m + n)`  
📦 **Space Complexity**: `O(1)`

---

### ✅ **Q84. Remove Duplicates from Sorted Array**
**Problem**: Remove duplicates in-place from a **sorted** array and return the length of the unique portion.

function removeDuplicates(nums) {
    let j = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j] = nums[i + 1];
            j++;
        }
    }
    return j;
}

🔹 **Algorithm**:
- Use two pointers.
- If current value is different from next, store it at the new position (`j`) and increment `j`.

🕒 **Time Complexity**: `O(n)`  
📦 **Space Complexity**: `O(1)`

---

### ✅ **Q85. Duplicate Zeros**
**Problem**: Modify the array in-place by duplicating every zero, shifting the remaining elements to the right.

function duplicateZeros(arr) {
    let zeroes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeroes++;
    }

    let i = arr.length - 1;
    let j = arr.length - 1 + zeroes;

    while (i < j) {
        if (j < arr.length) arr[j] = arr[i];
        j--;

        if (arr[i] === 0) {
            if (j < arr.length) arr[j] = 0;
            j--;
        }
        i--;
    }
}

🔹 **Algorithm**:
- Count zeros.
- Use two pointers (`i` original, `j` after expansion).
- Shift and duplicate from end to avoid overwriting.

🕒 **Time Complexity**: `O(n)`  
📦 **Space Complexity**: `O(1)`


### ✅ **Q86. Move Zeroes**
**Problem**: Move all `0`s to the end while maintaining the relative order of non-zero elements.


function moveZeroes(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
}

🔹 **Algorithm**:
- Two pointers: `i` for iteration, `j` for the next non-zero.
- Swap when a non-zero is found.

🕒 **Time Complexity**: `O(n)`  
📦 **Space Complexity**: `O(1)`

