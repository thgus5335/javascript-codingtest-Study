/**
 * 최소직사각형
 */
function solution(sizes) {
  let w = [];
  let h = [];
  let array = sizes.map((size) => (size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]));

  for (let i = 0; i < array.length; i++) {
    w.push(array[i][0]);
    h.push(array[i][1]);
  }

  return Math.max(...w) * Math.max(...h);
}
