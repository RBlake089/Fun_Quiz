// DOM Elements
var score = document.getElementById("score_keeper"); // <p id = "score_keeper">View High Scores</p>
var timer = document.getElementById("timer"); // <p id = "timer">Time:0</p>
var h2_question = document.getElementById("question"); // <h2 class = "question" id = "question"></h2>
var div_anwser_text = document.getElementById("anwser_text"); // <div id = "anwser_text"></div>
var openingScreen = document.querySelector(".opening_screen");
var quizContainer = document.querySelector(".question_container");

// DOM buttons
var startButton = document.querySelector("#start");
var answerButtons = document.querySelector(".answer_buttons");// <div class="answer_buttons">
var questionIndex = 0;
var buttonOptions = ["#anwser1", "#anwser2", "#anwser3"]
var quizQuestion = [
  {
    question: "What Makes a Website Have Function?",
    answerOptions: [
      "1. JavaScript","2. HTML","3. CSS"
    ],
    correctAnswer: "1. JavaScript",
  },
  {
    question: "Which is “Cascading Style Sheets ?",
    answerOptions: [
      "1. RSB","2. SCS","3. CSS"
    ],
    correctAnswer: "1. CSS",
  },
  {
    question: "What does JS stand for?",
    answerOptions: [
      "1. HTML","2. JavaScript","3. React.js"
    ],
    correctAnswer: "2. JavaScript",
  }
  
]
// DOM TIME / SCORE
let time = 50;
let scorePoints = 0;
// let timeInterval;



//Start Quiz
function startQuiz(){
  openingScreen.classList.add("hide");
  quizContainer.classList.remove("hide");
  displayQuestion();
  startTimer();
}

// Timer
function startTimer(){
  let timeInterval = setInterval(function(){
    time--;
    timer.textContent = "Time: " + time;
    if(time === 0){
      clearInterval(timeInterval);
    }
  }, 1000)
}

function displayQuestion(){
  var currentQuestion = quizQuestion[questionIndex]
  h2_question.textContent = currentQuestion.question 
  var choices = currentQuestion.answerOptions
  for(let i = 0; i < choices.length; i++){
    var userOptions = document.querySelectorAll(buttonOptions[i])
    for(let j = 0; j < userOptions.length; j++){
      userOptions[j].textContent = choices[i]
    }

  }
}
answerButtons.addEventListener("click", function(event){
  var htmlElement = event.target
  if(htmlElement.matches("button")){
    check(htmlElement.textContent)
  }
})
function check(htmlElement){
  var correct = quizQuestion[questionIndex].correctAnswer
  if(htmlElement === correct){
    alert("Correct");
    scorePoints++
  } else {
    time-=5;
    alert("wrong")

  }
  questionIndex++

  if(quizQuestion.length > questionIndex){
    displayQuestion()
  } else {
    endQuiz();
  }
}


startButton.addEventListener("click", function(){
  startQuiz();
});