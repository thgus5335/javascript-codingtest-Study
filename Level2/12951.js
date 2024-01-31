//JadenCase 문자열 만들기
function solution(s) {
  let arr = s.split(' ').map(arr => arr.toLowerCase());
  return arr.map(arr => arr.charAt(0).toUpperCase() + arr.slice(1)).join(' ');
}