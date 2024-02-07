/**
 * 내적
 */
function solution(a, b) {
  return a.reduce((acc, el, idx) => acc + el * b[idx], 0);
}
