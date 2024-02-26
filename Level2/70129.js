/**
 * 이진 변환 반복하기
 */
function solution(s) {
  let cntRepeat = 0;
  let cntZero = 0;

  while (s != 1) {
    s = s
      .split('')
      .filter((x) => {
        if (x != 0) {
          return x;
        } else {
          cntZero++;
        }
      })
      .join('')
      .length.toString(2);

    cntRepeat++;
  }

  return [cntRepeat, cntZero];
}
