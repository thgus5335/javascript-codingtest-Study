//피보나치 수
function solution(n) {
  const f = [0, 1];
  for (let i = 2; i <= n; i++) {
    f[i] = (f[i - 2] + f[i - 1]) % 1234567;
  }
  return f[n];
}

//재귀함수로 풀어보려고 했으나 실패
function solution(n) {
  if (n <= 1) return n;
  return (solution(n - 1) % 1234567 + solution(n - 2) % 1234567) % 1234567;
}