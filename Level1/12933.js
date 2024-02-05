//정수 내림차순으로 배치하기
function solution(n) {
  let arr = String(n).split('');
  arr.sort((a, b) => b - a);
  
  let str = '';
  arr.forEach((num) => str += num);
  
  return +str;
}