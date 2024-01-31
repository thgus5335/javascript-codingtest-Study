// 최댓값과 최솟값

function solution(s) {
  let numArray = s
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  return numArray.at(0) + ' ' + numArray.at(-1);
}
