function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    return acc + (signs[idx] ? 1 : -1) * cur;
  }, 0);
}
