function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  return x % sum ? false : true;
}
