// 최댓값과 최솟값

function solution(s) {
  let numArray = s
    .split(' ')
    .map((n) => +n)
    .sort((a, b) => a - b);

  return numArray[0] + ' ' + numArray[numArray.length - 1];
}
