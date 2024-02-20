//내적
function solution(a, b) {
  return a.reduce((dotProduct, a, i) => dotProduct + a * b[i], 0);
}