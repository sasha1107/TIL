function solution(n){
    let answer = '1';
  
    if(n === 1){
      return 1;
    }
  
    for (let i = 1; i < n; i++){
      answer = rule(answer);
    }
  
    return answer;
  }
  
  function rule(answer){
    let result = '';
  
    for (let i = 1; i < 9; i++){
      let count = answer.split('').filter(item => item == i).length
      if(count >= 1){
        result += String(i) + String(count);
      } 
    }
    return result;
  }
  
  const user_input = 6;
  console.log(solution(user_input));