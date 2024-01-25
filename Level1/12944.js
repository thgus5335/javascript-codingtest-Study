// 평균 구하기

function solution(arr) {
  return arr.reduce((acc, el) => acc + el, 0) / arr.length;
}
