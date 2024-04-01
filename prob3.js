/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let n=arr.length
    
    if (n<=1){
        return [-1];
    }
    let comp = 2147483647;
    let idex= 0;
      for(let i=0;i<n;i++){
          if(arr[i]<comp){
              comp=arr[i];
              idex=i;
          }
      }
    
    arr.splice(idex,1);
    return arr;
}