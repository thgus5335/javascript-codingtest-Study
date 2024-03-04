/**
 * 숫자 문자열과 영단어
 */
function solution(s) {
  const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  for (let i = 0; i < number.length; i++) {
    let arr = answer.split(number[i]);
    answer = arr.join(i);
  }

  return +answer;
}
