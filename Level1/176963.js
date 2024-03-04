/**
 * 추억 점수
 */
function solution(name, yearning, photo) {
  let answer = [];
  for (let i = 0; i < photo.length; i++) answer.push(0);

  photo.map((el1, idx1) => {
    el1.map((el2, idx2) => {
      if (name.includes(el2)) answer[idx1] += yearning[name.indexOf(el2)];
    });
  });

  return answer;
}
