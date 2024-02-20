//행렬의 덧셈
function solution(arr1, arr2) {
  answer = [];
  for (let i = 0; i < arr1.length; i++) {
    sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer;
}

//map 두 번 사용하기
function solution(arr1, arr2) {
  return arr1.map((sum1, i) => sum1.map((sum2, j) => sum2 + arr2[i][j]));
}