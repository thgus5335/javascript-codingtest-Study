/**
 * 최솟값 만들기
 */
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, el, idx) => acc + el * B[idx], 0);
}
