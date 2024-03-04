/**
 * [1차] 비밀지도
 */
function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let num = (arr1[i] | arr2[i]).toString(2);

    num = num.replace(/0/g, ' ').replace(/1/g, '#');
    answer.push(num.padStart(n, ' '));
  }

  return answer;
}
