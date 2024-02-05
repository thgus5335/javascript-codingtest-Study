// /나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = arr.filter(num => num % divisor === 0);
  return answer.length ? answer.sort((a,b) => a-b) : [-1];
}

// function solution(arr, divisor) {
//     let answer = [];
//     for(let num of arr){
//         if(num % divisor === 0) {
//             answer.push(num);
//         }
//     }
//     if(answer.length === 0) answer.push(-1);
//     return answer.sort((a, b) => a-b);
// }
