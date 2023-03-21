
var question = ["a","b","c"]



// Timer
var startBtn = document.getElementById("start-btn")
let time = 60;

function startQuiz(){
setInterval(countDownTimer, 1000);
startBtn.classList.add("hide")
}
// Make a Count timer
// Link count down timer to the ID timer
function countDownTimer(){
var countEl = document.getElementById("time")
countEl.innerHTML = time;
time = time - 1;
}


// Find out how to hold data in the boswer when playing game

// make a function that shows the user the right answer 
function rightAnswer(){

}
// make a function that shows the user is wrong when they selected the wrong answer and subtract their time by 5s

startBtn.addEventListener("click", startQuiz)

// <!DOCTYPE html>
// <html>
// <body>

// <h1>The Window Object</h1>
// <h2>The setInterval() Method</h2>

// <p id="demo"></p>

// <script>
// setInterval(displayHello, 1000);
// var count = 0;
// function displayHello() {
// var countEl = document.getElementById("demo")
// countEl.innerHTML = count;
// count = count - 1;
// }
// </script>

// </body>
// </html>
