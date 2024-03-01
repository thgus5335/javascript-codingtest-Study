/**
 * 가장 가까운 같은 글자
 */
function solution(s) {
  let stack = []; // 문자열 담을 배열
  let arr = []; // 결과물을 담을 배열

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      // 스택에 해당 문자가 있을 경우
      arr.push(stack.length - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
      continue;
    } else {
      // 스택에 해당 문자가 없을 경우
      arr.push(-1);
      stack.push(s[i]);
    }
  }

  return arr;
}
