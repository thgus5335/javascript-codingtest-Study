/**
 * 숫자의 표현
 */
function solution(n) {
  let count = 1;
  for (let i = 3; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) count++;
  }
  return count;
}
