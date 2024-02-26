/**
 * 카펫
 */
function solution(brown, yellow) {
  let yellowList = [];
  let result = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i == 0) yellowList.push(i);
  }

  for (let i = 0; i < yellowList.length / 2; i++) {
    let width = yellowList[yellowList.length - 1 - i];
    let height = yellowList[i];
    if ((width + 2) * 2 + height * 2 == brown) result.push(width + 2, height + 2);
  }

  return result;
}
