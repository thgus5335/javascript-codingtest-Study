function solution(n) {
  let sqrtN = Math.sqrt(n);
  if (Math.round(sqrtN) ** 2 === n) return (sqrtN + 1) ** 2;
  else return -1;
}
