// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?\

var i = [36, 40, 42, 50];

for (const j of i) {
    if (parseInt(j) % 6 == 0) {
        console.log(j + "는 6의 배수이다.");
    }
    else {
        console.log(j + "는 6의 배수가 아니다.");
    }
    
}

