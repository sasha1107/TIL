// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.

// let input = prompt("키를 입력하세요.");
// let result = "";
// result = input.split(" ").sort((a,b) => a-b).join(" ");
// input === result ? console.log("YES") : console.log("NO");



// sort 안쓰고하기
let input = prompt("키를 입력하세요.").split(" ");
function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
      let temp;
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      console.log(`${i}회전: ${array}`);
      if (!temp) {
        break;
      }
    }
    return array;
  }
  console.log(bubbleSort(input));