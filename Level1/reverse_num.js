function solution(n) {
  let answer = [];
  let number = n.toString();
  for (let letter of number) {
    let text = Number(letter);
    answer.unshift(text);
  }
  return answer;
}
