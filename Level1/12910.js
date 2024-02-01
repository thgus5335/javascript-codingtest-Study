// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = arr.filter((i) => i % divisor === 0).sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}
