/**
 * 부족한 금액 계산하기
 */
function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return total > money ? total - money : 0;
}
