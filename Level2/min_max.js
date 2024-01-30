function solution(s) {
  let arr = [];
  for (let num of s) {
    if (num !== ' ') arr.push(num);
  }
  return arr; // '-'와 "1"이 분리됨...
}

// array? string? slice? minmax?
