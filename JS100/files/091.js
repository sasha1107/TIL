// # 문제 91 : 반평균 등수

// 한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
// 2. 반 평균을 구하세요.
// 3. 반 1등 점수를 구하세요.
// 4. 전교 평균을 구하세요.

// (출력 형식은 상관없습니다.)


// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
let student_score = [];
let class_score = [];
let total_score = [];
for (let k = 0; k < 7; k++){
    for (let j = 0; j < 30; j++){
        for (let i=0; i<5; i++){
            student_score.push(Math.floor(Math.random()*100)+1);
        }
        class_score.push(student_score);
        student_score = [];
    }
    total_score.push(class_score);
    class_score = [];
}
// console.log(total_score);


// 2. 반 평균을 구하세요.
function 반평균(num){
    let 국어=0, 영어=0, 수학=0, 사회=0, 과학=0;
    for (let i = 0; i < 30; i++){
        국어 += total_score[num][i][0]
        영어 += total_score[num][i][1]
        수학 += total_score[num][i][2]
        사회 += total_score[num][i][3]
        과학 += total_score[num][i][4]
    }
    console.log(`
    ${num}반 평균 >
        국어 : ${Math.floor(국어/30)}점
        영어 : ${Math.floor(영어/30)}점
        수학 : ${Math.floor(수학/30)}점
        사회 : ${Math.floor(사회/30)}점
        과학 : ${Math.floor(과학/30)}점`);
}
// 반평균(0);
// 반평균(1);
// 반평균(2);
// 반평균(3);
// 반평균(4);
// 반평균(5);
// 반평균(6);


// 3. 반 1등 점수를 구하세요.
function 반1등(num){
    let 국어=10, 영어=10, 수학=10, 사회=10, 과학=10;
    for (let i = 0; i < 30; i++){
        국어 = Math.min(국어,total_score[num][i][0])
        영어 = Math.min(영어,total_score[num][i][1])
        수학 = Math.min(수학,total_score[num][i][2])
        사회 = Math.min(사회,total_score[num][i][3])
        과학 = Math.min(과학,total_score[num][i][4])
    }
    console.log(`${num} 반 과목별 일등 >
    국어 : ${국어}점
    영어 : ${영어}점
    수학 : ${수학}점
    사회 : ${사회}점
    과학 : ${과학}점`);
}
// 반1등(0)
// 반1등(1)
// 반1등(2)
// 반1등(3)
// 반1등(4)
// 반1등(5)
// 반1등(6)


// 4. 전교 평균을 구하세요.
function 전교평균(){
    let 국어=0, 영어=0, 수학=0, 사회=0, 과학=0;
    for (let c = 0; c < 7; c++){
        for (let i = 0; i < 30; i++){
            국어 += total_score[c][i][0]
            영어 += total_score[c][i][1]
            수학 += total_score[c][i][2]
            사회 += total_score[c][i][3]
            과학 += total_score[c][i][4]
        }
    }
    console.log(`전교 국어 평균 >  ${Math.floor(국어 / 210)}점`);
    console.log(`전교 영어 평균 >  ${Math.floor(영어 / 210)}점`);
    console.log(`전교 수학 평균 >  ${Math.floor(수학 / 210)}점`);
    console.log(`전교 사회 평균 >  ${Math.floor(사회 / 210)}점`);
    console.log(`전교 과학 평균 >  ${Math.floor(과학 / 210)}점`);
}
전교평균();