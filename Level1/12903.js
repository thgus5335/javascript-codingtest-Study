/**
 * 가운데 글자 가져오기
 */
function solution(s) {
  let middle = Math.floor(s.length / 2);

  return s.length % 2 ? s.at(middle) : s.slice(middle - 1, middle + 1);
}
