/**
 * 두 정수 사이의 합
 */
function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}
