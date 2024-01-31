// 하샤드 수

function solution(x) {
  let sum = 0;

  String(x)
    .split('')
    .map((x) => (sum += +x));

  return x % sum ? false : true;
}
