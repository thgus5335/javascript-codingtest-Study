//문자열 다루기 기본
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (!Number.isInteger(+s[i])) return false;
  }

  return true;
}