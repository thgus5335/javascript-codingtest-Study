/**
 * 콜라츠 추측
 */
function solution(num) {
  let cnt = 0;

  if (num === 1) return 0;

  while (num !== 1 && cnt <= 500) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    cnt++;
  }

  return num === 1 ? cnt : -1;
}
