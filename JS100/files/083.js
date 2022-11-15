function math(e){
    const 괄호 = {
        ')':'(',
        '}':'{',
    };
    let stack = [];
    
    for (let i=0; i<e.length; i++){
        if (e[i].includes('(') || e[i].includes('{')){ 
            stack.push(e[i]); // 스택에는 여는 괄호만
        } else if (괄호[e[i]]){ // 여는 괄호 (연산자나 숫자는 들어가지 않음)
            if (stack.length === 0){ // 닫는 괄호부터 시작
                return false;
            } else{
                let t = 괄호[e[i]]; // 여는 괄호
                if (t != stack.pop()){ // 매치가 안됨
                    return false;
                }
            }   
        }
        console.log(stack)
    }
    return stack.length === 0; // 0이라면 트루 아니면 false
}

// while (1){
    // const order = prompt('데이터 입력(1), 프로그램 종료(2)');
    const order = '1'
    if (order === '1'){
        // const ex = prompt('데이터를 입력하세요').replaceAll(' ', '').split('')
        const ex = "5 + 7 * {3 * 5)}".replaceAll(' ', '').split('')
        console.log(math(ex));
    } else{
        // break;
    }
// }