// 문자열 내 p와 y의 개수

function solution(s) {
  let p = s.replace(/p/gi, '').length;
  let y = s.replace(/y/gi, '').length;

  return p === y;
}
