//제일 작은 수 제거하기
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if(arr.length === 0) arr.push(-1);
  return arr;
}