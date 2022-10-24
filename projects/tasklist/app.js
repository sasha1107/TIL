const main = document.querySelector(".artcl_main");
const userTask = main.querySelector("header input");
const addBtn = main.querySelector("header button");
const listTodo = main.querySelector(".list_todo");

// 할일 추가 이벤트
addBtn.addEventListener('click', createListItem);

// 경고 메시지 생성
const message = document.createElement("strong");
message.style.display = "none";
message.classList.add("txt_invalid");
main.appendChild(message);
userTask.addEventListener("input", ()=>{
    message.style.display = "none";
})

// 다운로드 버튼 생성
const downloadBtn = document.createElement("button");
downloadBtn.classList.add("btn");
downloadBtn.textContent = "리스트 다운로드"
main.appendChild(downloadBtn);
downloadBtn.addEventListener("click", downloadFile);

// 투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

// 초기 화면에서 저장되어 있는 데이터를 가지고 목록을 생성합니다.
if (tasks.length > 0) {
    tasks.forEach(task => {
        getItem(task.val, task.checked);
    });
    showDownload();
}

function createListItem() {
    const inpVal = userTask.value;
    if (inpVal) {
        // 할일을 저장하는 객체를 생성합니다. 
        const tempTask = {
            val: inpVal,
            checked: false,
        }

        // 할일 목록에 새로운 할일을 저장합니다.
        tasks.push(tempTask);

        // 목록 요소를 생성합니다.
        getItem(inpVal, false);

        // 할일 데이터를 로컬 스토리지 안에 저장
        saveTasks();

        // 다운로드 버튼 노출 함수
        showDownload();
    }
    else {
        errorMsg("내용을 작성해주세요!");
    }
}

// 목록 요소를 생성
function getItem(val, complete) {
    const li = document.createElement("li");
    li.textContent = val;
    listTodo.appendChild(li);

    // 인풋 입력값 초기화
    userTask.value = "";

    // 완료한 일이라면 취소선 처리
    if (complete) {
        li.classList.add("done");
    }
    // 누르면 완료표시, 다시 누르면 복귀
    li.addEventListener("click", ()=> {
        li.classList.toggle("done");

        // 할일 데이터의 업데이트 함수
        buildTasks();
    })

    const btn = document.createElement("button");
    btn.innerHTML = "<i class='fa-solid fa-trash'></i>";
    li.appendChild(btn);
    
    btn.addEventListener("click", () => {
        li.remove();

        // 할일 데이터의 업데이트 함수
        buildTasks();

        // 다운로드 버튼 노출 함수
        showDownload();
    })
}

// 로컬 스토리지에 할일 목록을 저장하는 함수
function saveTasks(){
    localStorage.setItem("tasklist", JSON.stringify(tasks))
}

// 할일 데이터를 업데이트하는 함수: 할일을 클릭했을 때, 혹은 할일을 제거했을 때
function buildTasks() {
    tasks.length = 0; // 업데이트 하기 전에 기존 데이터를 초기화
    const curList = listTodo.querySelectorAll("li");

    // 할일 정보 목록을 재생성(가장 최신으로 갱신)
    curList.forEach((el) => {
        const tempTask = {
            val: el.textContent,
            checked: false
        };
        if (el.classList.contains("done")) {
            tempTask.checked = true;
        };
        tasks.push(tempTask);
    })
    saveTasks();
}

// 다운로드 버튼 노출 함수
function showDownload() {
    const curList = listTodo.querySelectorAll("li");

    if (curList.length > 0){
        downloadBtn.style.display = "block"
    }
    else {
        downloadBtn.style.display = "none"
    }
}

// 경고 메시지 활성화 함수
function errorMsg(msg){
    message.style.display = "block";
    message.textContent = msg;
    userTask.focus();
}

// 리스트 다운로드
function downloadFile() {
    let temp = "<나의 할일 목록>\n\n";

    const curList = listTodo.querySelectorAll("li");
    curList.forEach((el)=> {
        if (el.classList.contains("done")) {
            temp += "(완료)-"
        }
        temp += `${el.textContent}\n`
    })
    let element = document.createElement("a");
    element.setAttribute("href", `data:text/plain; charset=utf-8, ${temp}`);
    // https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
    element.setAttribute("download", "todoList.txt");
    
    // 클릭 가능한 요소라면 클릭을 시뮬레이션
    element.click();

    // 메모리 상에서 제거
    element = null;
}