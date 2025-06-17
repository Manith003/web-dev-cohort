function heights(height) {
  console.log(height);

  let Left = new Array(height.length);
  let Right = new Array(height.length);
  let ans = 0

  Left[0] = height[0];
  Right[Right.length-1] = height[height.length - 1];
  for (let i = 1; i < Left.length; i++) {
    let maxLeft = Math.max(Left[i - 1], height[i]);
    Left[i] = maxLeft;
  }
  console.log(Left);
  for (let i = Right.length-2; i >= 0; i--) {
    let maxRight = Math.max(Right[i + 1], height[i]);
    Right[i] = maxRight;
  }
  console.log(Right);
  for(let i=0;i<height.length;i++){
    ans += Math.min(Left[i],Right[i]) - height[i]
  }
  console.log(ans);
  
}

let arr = [4, 2, 0, 3, 2, 5];

heights(arr);
