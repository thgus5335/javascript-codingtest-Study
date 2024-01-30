function solution(s) {
  let s_lower = s.toLowerCase();
  let arr = [];
  for (let letter of s) arr.push(letter);
  while (i < arr.length) {
    if (arr[i] === ' ') {
      arr[i + 1].toUpperCase();
    }
  }
  return answer;
}

// 배열 말고 splice?
