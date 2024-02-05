//서울에서 김서방 찾기
function solution(seoul) {
  let index = 0;
  for (let name of seoul) {
      if(name === 'Kim'){
           break;
      }
      index++;
  }
  return `김서방은 ${index}에 있다`;
}