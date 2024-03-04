/**
 * 이상한 문자 만들기
 */
function solution(s) {
  return s
    .split(' ')
    .map((x) =>
      x
        .split('')
        .map((el, idx) => (idx % 2 ? el.toLowerCase() : el.toUpperCase()))
        .join(''),
    )
    .join(' ');
}
