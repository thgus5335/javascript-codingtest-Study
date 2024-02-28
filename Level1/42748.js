function solution(array, commands) {
  var answer = [];
  commands.forEach(command => {
    answer.push(
      array
        .slice(command[0] - 1, command[1])
        .sort((a, b) => a - b)
        .at(command[2] - 1)
    );
  });
  return answer;
}
