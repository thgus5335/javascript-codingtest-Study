//없는 숫자 더하기
function solution(numbers) {
  let sum = 45;
  numbers.map((num) => sum -= num);
  return sum;
}