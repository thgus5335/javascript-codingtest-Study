/**
 * 행렬의 덧셈
 */
function solution(arr1, arr2) {
  let sum = [[]];

  for (let i = 0; i < arr1.length; i++) {
    sum[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return sum;
}
