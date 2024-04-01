/* 2번 문제 답안을 작성해주세요. */
function solution(n){
    let result=1;
    
    for(let i=1;i<11;i++){
      result=result*i
      
  if(n<result){
      return i-1;
  }
  else if(n===result) {
       return i;
  }
    }
}