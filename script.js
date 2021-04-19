//Variables
var win = document.querySelector(".win");
var  = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var CorrectCounter = 0;
var WrongCounter = 0;
var isWin = false;
var timer;
var timerCount;
var question = document.getElementById("question");
var answer

// The init function is called when the page loads 
function init() {
    getCorrect();
    getWrong();
  }
  
  // The startGame function is called when the start button is clicked
  function startQuiz() {    
    titleScreen.setAttribute("class", "hide");    
    quizScreen.setAttribute("class", "show");  
    timerId = setInterval(tick, 1000);  
    timeEl.textContent = time;  
    getQuestion();
  }
    
  // The GameOver function is called when timer reaches 0
  function GameOver() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  
  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//Rendering a question
startButton.addEventListener("click", startQuiz);

// start quiz
const quiz = document.getElementById("quiz");
function startQuiz(){
    h2.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();

//Check Answer
var incorrect = [];

function checkAnswer(answer){
    if(answer === questions[runningQuestion].correct){
        //if correct answer
        alert('Correct!');        
    } else {
        //if wrong answer      
    incorrect.push(index);
    alert('Sorry, this is incorrect');
    }
}   if(runningQuestion < lastQuestion){
    runningQuestion++;    
}else{
    clearInterval(TIMER);
    scoreRender();
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);