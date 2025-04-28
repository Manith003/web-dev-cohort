// alert("day 45 working in the leetcode website");



let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0;i<matrix.length;i++){
    for(let j=i;j<matrix[i].length;j++){
       [[matrix[i][j]]=[matrix[j][i]]]

    }
}

console.log(matrix);