//아스키코드
// let l = [];

// for(let i=65; i<91; i++){
//     l.push(String.fromCharCode(i));
// }


//l에서 랜덤으로 8개 뽑은 후 리턴
function randomItem(){
    let l = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

    let medicine = [];
    while (medicine.length !== 8) { // string[]에 하나씩 push되는데 8개가 다 차면 while 문을 벗어남 
        let char = l[Math.floor(Math.random()*l.length)];
        if(!medicine.includes(char)){ // 중복된 알파벳이 들어갈 수 없으므로
            medicine.push(char);
        }
    }

    return medicine.join(''); // 한개(8글자알파벳)의 약이 리턴
}

//100개의 다른 의약성분 배열에 저장
let total_medicine = [];

// for(let i=0; i<100; i++){
//     let m = randomItem();
//     if(!total_medicine.includes(m)){ // 동일한 약은 저장될 수 없음
//         total_medicine.push(m);
//     }
// }

while (total_medicine.length < 100){
    let m = randomItem();
    if(!total_medicine.includes(m)){ // 동일한 약은 저장될 수 없음
        total_medicine.push(m);
    }
}
// const input = prompt("").split(' ')

// console.log(total_medicine);
// console.log(total_medicine.length);


//user_input과 같은 성분이 있는 데이터 result에 저장
// const user_input = prompt('입력하세요').split(' ');
const user_input = "ABCDEFGH 4".split(' ');
let result = [];

for (let i of total_medicine) {
    //Set을 이용하여 교집합 구하기
    let setUser = new Set(user_input[0]);
    let setTotal = new Set(i);
    let interSection = new Set([...setUser].filter(x => setTotal.has(x)));
  //Set에서는 includes 또는 indexOf 대신 has()를 사용 - 값이 있는지 확인
    if(interSection.size === parseInt(user_input[1], 10)){
        result.push(i);
    }
}

console.log('result',result);
console.log(result.length);