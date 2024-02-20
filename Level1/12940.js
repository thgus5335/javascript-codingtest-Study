//최대공약수와 최소공배수
function solution(n, m) {
  let arr = [];
  for (let i = 1; i <= Math.max(n, m); i++) {
    if ((n % i === 0) && (m % i === 0)) arr.push(i);
  }
  let gcd = arr.at(-1);
  return [gcd, gcd * (n / gcd) * (m / gcd)];
}

//유클리드 호제법
function solution(n, m) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}