//Variables
var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var buttonA = document.getElementById('A');
var buttonB = document.getElementById('B');
var buttonC = document.getElementById('C');
var timer = document.getElementById("timer");
var results = document.getElementById("result");
var ViewHighscores = document.getElementById("ViewHighscores")
var finalScore = document.getElementById("finalScore");
var QuizoverDiv = document.getElementById("Quizover");
var scoreContainer = document.getElementById("scoreContainer");
var highscorePage = document.getElementById("highscore-Page");
var NameInput = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitScore");
var highscore = document.getElementById("highscore");
var text = document.getElementById("text");



//Questions with answers
var questions =
  [{
      question : "How many bones are in the human body?",
      choiceA : "166",
      choiceB : "300",
      choiceC : "206",
      correctAnswer= "C"
    },      
  {    
      question: "What is the most abundant gas in the Earth's atmosphere?",
      choiceA : "Nitrogen",
      choiceB : "Hydrogen",
      choiceC : "Oxygen",
      correctAnswer="A"
    },  
  {
      question : "What is the biggest planet in our solar system?",
      choiceA : "Saturn",
      choiceB : "Mars",
      choiceC : "Jupiter",
      correctAnswer= "C"
    },
  {
      question : "What is a material that will not carry an electrical charge called?",    
      choiceA : "Conductor",    
      choiceB : "Insulator",    
      choiceC : "Unit",
      correctAnswer= "B"
    },
  {        
      question : "What scientist proposed the three laws of motion?",    
      choiceA : "Newton",    
      choiceB : "Aristotle",    
      choiceC : "Rutherford",
      correctAnswer="A"
    },  
  {        
      question : "If you were to be lowered into a well, your weight would:",    
      choiceA : "increase slightly",    
      choiceB : "decrease slightly", 
      choiceC: "remain exactly the same",
      correctAnswer="B"
    },
  {        
      question : "The study of how people use tools to perform work and how people physically relate to their working environment is called?",    
      choiceA : "engineering",    
      choiceB : "ergonomics",    
      choiceC : "agronomy", 
      correctAnswer="B"
    }
];

  var currentQuestionIndex = 0;

   // The startQuiz function is called when the start button is clicked
   function startButton() {  
    ViewHighscores.style.display = "none"
    finalScore.style.display = "none"
    NameInput.style.display = "none"
    showQuestions()
    quiz.style.display = "block"
    countdown()
  }


  function ViewHighscores(){
    highscorePage.style.display = "block"
    startButton.style.display = "none"
    QuizoverDiv.style.display = "none";
    scoreContainer.style.display = "flex";
    highscorePage.style.display = "block";
}
  

  function showQuestion(){
      Container.textContent = "";
      results.textContent = "";
      var currentQuestion = questions[currentQuestionIndex];
      header.textContent = currentQuestion.title;
      score.textContent = currentHighscore;
      timer.textContent = timeLeft;
    
      for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;   
  };

  

    //Timer function
    function setTimer(){
    timerInterval = setInterval(function() {
      timeLeft--;
      quizTimer.textContent = "Time left: " + timeLeft;
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
    }, 1000);
    startButton.addEventListener('click', setTimer);
  

    var

  // Screen at the end of the quiz that displays the score
  function showScore() {
  quizBody.style.display ="none";
  QuizoverDiv.style.display = "flex";
  clearInterval(timerInterval);
  highscoreNameInput.value = "";
  finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
  }

  submitScoreBtn.addEventListener("click", function highscore(){

    if(highscoreNameInput.value === "") {
      alert("Text box cannot be blank");
      return false;
    }else{
      var savedHighscore = JSON.parse(localStorage.getItem("savedHighscore")) || [];
      var currentUser = highscoreNameInput.value.trim();
      var currentHighscore = {
        name : currentUser,
        score : score
      };

      quizoverDiv.style.display = "none";
      scoreContainer.style.display = "flex";
      highscoreDiv.style.display = "block";
      QuizOverBtns.style.display ="flex";
      savedHighscore.push(currentHighscore);
      localStorage.setItem("savedHighscore", JSON.stringify(savedHighscore));
      generateHighscore();

    }
  });


  startButton.addEventListener("click", function(){
    Container.textContent = "";
    showQuestion();
    startTimer();
  });

