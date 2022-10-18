const num = prompt("몇 단을 출력할까요?");
let result = "";
for (let i = 1; i < 10; i++){
    result += (parseInt(num) * i + " ");
}

console.log(result);