//수박수박수박수박수박수?
function solution(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str = (i % 2 === 0) ? str + '수' : str + '박';
  }
  return str;
}