/**
 * 피보나치 수
 */
function solution(n) {
  F = [0, 1];

  for (let i = 0; i < n; ) {
    F.push((F[i++] + F[i]) % 1234567);
  }

  return F[n];
}
