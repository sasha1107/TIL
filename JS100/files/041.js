let result = "YES";

function isPrime(num){
    for(let i = 2; i < num; i++){
        if (num % i === 0) {
            result = "NO";
            break;
        }
    }
}

const input = parseInt(prompt('숫자를 입력하세요'));
isPrime(input);
console.log(result);