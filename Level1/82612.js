//부족한 금액 계산하기
function solution(price, money, count) {
  let total = 0;
  for (let n = 1; n <= count; n++) {
    total += price * n;
  }
  if (money > total) return 0;
  return Math.abs(money - total);
}