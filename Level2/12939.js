//최댓값과 최솟값
function solution(s) {
  let num = s.split(' ');
  return `${Math.min(...num)} ${Math.max(...num)}`;
}