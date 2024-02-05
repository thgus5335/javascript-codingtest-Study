//하샤드 수
function solution(x) {
  let arr = String(x).split('');
  let sum = 0;
  
  arr.forEach((num) => sum += (+num));

  return (x % sum === 0);
}