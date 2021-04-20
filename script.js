//Variables
var timerElement = document.querySelector(".timer-counter");
var startButton = document.querySelector("#start");
var timer;
var timerCount;
var chosenAnswer ="";
var score;
var choices = document.querySelector("#choices");
var checkAnswer = document.querySelector("check-Answer");

var questions = [];


  function init() {
    getScore();
  }

  // The startGame function is called when the start button is clicked
  function startQuiz() {  
    timerCount = 60;
    startButton.disabled = true;
    renderQuestion()
    startTimer()
  }
    
  // The GameOver function is called when timer reaches 0
  function QuizOver() {
    wordBlank.textContent = "QUIZ RESULTS";    
    startButton.disabled = false;
    setScore()
  }
  
  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        
          clearInterval(timer);
          setScore();
        }
      
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        setScore();
      }
    }, 1000);
  }

  function renderQuestions (){
  var output = [];
  var choices;    
    for (var i=0; i <questions.length; i++) {
      choices =[];
    for(letter in questions[i].choices){
      choices.push(
        '<label>'
        +'<input type="radio" name="questions'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].choices[letter]
      + '</label>'
    );
  }
  output.push(
    '<div class="choices">' + questions[i].question + '</div>'
    + '<div id=("A", "B", "C", "D", "E", "F", "G")> + .join('') + '</div>'
  );
}
// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('');
}
  function setScore() {
    score.textContent = scoreCounter;
    localStorage.setItem("setScore", setScore)
  }

  function getScore() {
    var storedScores = localStorage.getItem("scoreCounter");
    if (storedScore === null) {
      scoreCounter = 0;
    } else {
      scoreCounter = storedScore;
    }

    score.textContent = storedScore;
  }

  function checkAnswer(chosenChoice) {
    var 
  }
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  TIMER = 0;
  l
  // Renders win and loss counts and sets them into client storage
  
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
