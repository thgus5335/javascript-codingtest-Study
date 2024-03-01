/**
 * 시저 암호
 */
function solution(s, n) {
  let answer = s.split('');

  answer = answer
    .map((x) => {
      let codeNum = x.charCodeAt();
      if (x === ' ') return ' ';
      if (codeNum >= 65 && codeNum <= 90)
        return codeNum + n > 90
          ? String.fromCharCode(codeNum + n - 26)
          : String.fromCharCode(codeNum + n);
      if (codeNum >= 97 && codeNum <= 122)
        return codeNum + n > 122
          ? String.fromCharCode(codeNum + n - 26)
          : String.fromCharCode(codeNum + n);
    })
    .join('');

  return answer;
}
