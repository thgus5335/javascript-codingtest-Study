//핸드폰 번호 가리기
function solution(phone_number) {
  let arr = phone_number.split('');
  for(let i = 0; i < phone_number.length - 4; i++){
      arr[i] = '*';
  }
  return arr.join('');
}