function solution(s) {
  const stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (stack.at(-1) === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  if (stack.length === 0) return 1;
  return 0;
}
