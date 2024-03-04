/**
 * 다음 큰 숫자
 */
function solution(n) {
  let answer = n;

  while (true) {
    answer++;
    if (nextNumLength(n) === nextNumLength(answer)) return answer;
  }
}

function nextNumLength(bin) {
  return bin
    .toString(2)
    .split('')
    .filter((x) => x == 1).length;
}
