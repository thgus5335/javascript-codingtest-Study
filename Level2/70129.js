function solution(s) {
  let string = s;
  let countZero = 0;
  let countToBinary = 0;
  while (string !== '1') {
    const stringLength = string.length;
    string = string.replaceAll('0', '');
    countZero += stringLength - string.length;
    string = string.length.toString(2);
    countToBinary += 1;
  }

  return [countToBinary, countZero];
}
