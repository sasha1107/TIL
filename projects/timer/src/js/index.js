const $timer = document.querySelector(".timer");
const $hours = $timer.querySelector(".dp-hrs");
const $minutes = $timer.querySelector(".dp-min");
const $seconds = $timer.querySelector(".dp-sec");
const $btnStart = $timer.querySelector(".btn-start");
const $btnReset = $timer.querySelector(".btn-reset");

$hours.addEventListener("click", addInput)
$minutes.addEventListener("click", addInput)
$seconds.addEventListener("click", addInput)
$btnStart.addEventListener("click", start)
$btnReset.addEventListener("click", reset)

function addInput(){
    console.log(this);
    let result = ""
    document.addEventListener("keydown", (event) => {
        if (event.key == "Enter"){
            if (result.length == 1){
                result = result.padStart(2,0)
            }
            this.textContent = result;
            result = "";
            console.log(this)
            $btnStart.style.background = "#5180FF";
            $btnStart.style.color = "#FFFFFF";
            $btnStart.textContent = "START";
            $btnReset.style.background = "#FB7099";
            $btnReset.style.color = "#FFFFFF";
        }
        else if (event.key.match(/[0-9]/)){
            result += String(event.key)
        }
    })
}

function start(){
    $btnStart.style.background = "#15C2B8";
    $btnStart.style.color = "#FFFFFF";
    $btnStart.textContent = "PAUSE";
}

function reset(){
    $btnReset.style.background = "#FB7099";
    $btnReset.style.color = "#FFFFFF";
    $btnReset.textContent = "PAUSE";
}