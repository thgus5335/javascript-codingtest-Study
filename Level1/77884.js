/**
 * 약수의 개수와 덧셈
 */
function divisor(num) {
  let divisorArr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisorArr.push(i);
  }

  return divisorArr;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += divisor(i).length % 2 ? -i : i;
  }

  return result;
}
