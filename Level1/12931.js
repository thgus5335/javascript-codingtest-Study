// 자릿수 더하기

function solution(n) {
  let answer = 0;
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    answer += +str[i];
  }

  return answer;
}
