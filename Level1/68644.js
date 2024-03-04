/**
 * 두 개 뽑아서 더하기
 */
function solution(numbers) {
  let answer = [];

  numbers.forEach((el1, idx1) => {
    numbers.forEach((el2, idx2) => {
      if (idx1 !== idx2) answer.push(el1 + el2);
    });
  });

  let result = [...new Set(answer)];

  return result.sort((a, b) => a - b);
}
