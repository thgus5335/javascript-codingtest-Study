//약수의 개수와 덧셈
function countYaksoo(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum = (countYaksoo(i) % 2 === 0) ? sum + i : sum - i;
  }
  return sum;
}

//제곱근이 정수면 약수의 개수는 홀수다,,,