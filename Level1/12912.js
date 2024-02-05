//두 정수 사이의 합
function solution(a, b) {
  let sum = 0;
  if(a === b) return a;
  
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for(let i = min; i <= max; i++){
      sum += i;
  }
  
  return sum;
}