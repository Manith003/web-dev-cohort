
# 📘 LeetCode Matrix Problems (Q31–Q34)

---

## Q31. 1572. Matrix Diagonal Sum
🔗 [LeetCode Link](https://leetcode.com/problems/matrix-diagonal-sum/)

### 🧠 Algorithm:
- Loop through each element of the matrix.
- Add the elements where indices are either:
  - On the **primary diagonal** (`i == j`)
  - On the **secondary diagonal** (`i + j == n - 1`)

### ✅ JavaScript Code:
```js
let sum = 0;
for(let i = 0; i < mat.length; i++){
   for(let j = 0; j < mat[i].length; j++){
     if(i == j || i + j == mat.length - 1)
        sum += mat[i][j];
   }
}
return sum;
```

---

## Q32. 867. Transpose Matrix
🔗 [LeetCode Link](https://leetcode.com/problems/transpose-matrix/)

### 🧠 Algorithm:
- Transpose of a matrix means converting rows into columns and columns into rows.
- For a matrix of dimension m x n, the result will be n x m.

### ✅ Java Code:
```java
int m = matrix.length, n = matrix[0].length;
int ans[][] = new int[n][m];

for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
        ans[i][j] = matrix[j][i];
    }
}
return ans;
```

---

## Q33. 48. Rotate Image
🔗 [LeetCode Link](https://leetcode.com/problems/rotate-image/)

### 🧠 Algorithm:
- First, **transpose** the matrix by swapping `matrix[i][j]` with `matrix[j][i]`.
- Then, **reverse** each row.

### ✅ JavaScript Code:
```js
for(let i = 0; i < matrix.length; i++){
    for(let j = i; j < matrix[i].length; j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

for(let i = 0; i < matrix.length; i++){
    let j = 0, k = matrix[i].length - 1;
    while(j < k){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][k];
        matrix[i][k] = temp;
        j++;
        k--;
    }
}
```

---

## Q34. 54. Spiral Matrix
🔗 [LeetCode Link](https://leetcode.com/problems/spiral-matrix/)

### 🧠 Algorithm:
- Traverse the matrix in a spiral order: 
  1. Left to Right (top row)
  2. Top to Bottom (right column)
  3. Right to Left (bottom row)
  4. Bottom to Top (left column)
- Keep track of visited boundaries to avoid revisiting.

### ✅ JavaScript Code:
```js
let ans = [];
let minr = 0, minc = 0, maxc = matrix[0].length - 1;
let maxr = matrix.length - 1;
let len = matrix.length * matrix[0].length;

while(ans.length < len){
    // Top wall
    for(let i = minc; i <= maxc && ans.length < len; i++){
        ans.push(matrix[minr][i]);
    }
    minr++;

    // Right wall
    for(let i = minr; i <= maxr && ans.length < len; i++){
        ans.push(matrix[i][maxc]);
    }
    maxc--;

    // Bottom wall
    for(let i = maxc; i >= minc && ans.length < len; i--){
        ans.push(matrix[maxr][i]);
    }
    maxr--;

    // Left wall
    for(let i = maxr; i >= minr && ans.length < len; i--){
        ans.push(matrix[i][minc]);
    }
    minc++;
}

return ans;
```
