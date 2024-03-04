/**
 * 올바른 괄호
 */
function solution(s) {
  let cnt = 0;

  for (let c of s) {
    c === '(' ? cnt++ : cnt--;
    if (cnt < 0) return false;
  }

  if (cnt === 0) return true;
  return false;
}
