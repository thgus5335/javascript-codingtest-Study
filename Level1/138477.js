/**
 * 명예의 전당 (1)
 */
function solution(k, score) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < score.length; i++) {
    temp.push(score[i]);
    temp.sort((a, b) => b - a);

    if (temp.length > k) {
      temp.pop();
    }
    answer.push(temp.at(-1));
  }

  return answer;
}
