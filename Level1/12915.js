/**
 * 문자열 내 마음대로 정렬하기
 */
function solution(strings, n) {
  return strings.sort().sort((a, b) => {
    if (a[n] !== b[n]) return a[n] > b[n] ? 1 : -1;
    else a > b ? 1 : -1;
  });
}
