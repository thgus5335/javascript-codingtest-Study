/**
 * 예산
 */
function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b).forEach((i) => {
    if (budget - i >= 0) {
      budget -= i;
      count++;
    }
  });

  return count;
}
