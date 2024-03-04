/**
 * 짝지어 제거하기
 */
function solution(s) {
  const arr = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) {
      arr.pop();
      continue;
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length ? 0 : 1;
}
