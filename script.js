//Variables
var timerElement = document.querySelector(".timer-counter");
var startButtonEl = $('#start')
var timer;
var chosenAnswer ="";
var score;
var choices = document.querySelector("#choices");
var checkAnswer = document.querySelector("check-Answer");


  start.addEventListener("click", startQuiz)

  // The startGame function is called when the start button is clicked
  function startQuiz() {  
    timerCount = 60;    
    renderQuestion()
    startTimer()
  }
    
  // The GameOver function is called when timer reaches 0
  var timerCount = 60
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
  
  );
}
// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('');


  function checkAnswer(chosenChoice) {
    var 
  }
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
refreshButtonEl.on('click', function () {
  location.reload();
});


function resetGame() {
  // Resets win and loss counts
  TIMER = 0;
  l
  // Renders win and loss counts and sets them into client storage
  
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
