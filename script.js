//Variables
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const timer = document.getElementById("timer");
const scoreDiv = document.getElementById("scoreContainer");
const score = document.getElementById("score");
const highscores = document.getElementById("highscores");
const bestScore = document.getElementById("bestScore");
const highscoreInitials = document.getElementById("highscoreInitials");
const submitScore = document.getElementById("submitScore");
const highscorePage = document.getElementById("highscorePage");
const text = document.getElementById("text");
const quizBody = document.getElementById("quizBody");


//Questions with answers
let question =
  [{
      question : "How many bones are in the human body?",
      choiceA : "166",
      choiceB : "300",
      choiceC : "206",
      correct: "C"
    },      
  {    
      question: "What is the most abundant gas in the Earth's atmosphere?",
      choiceA : "Nitrogen",
      choiceB : "Hydrogen",
      choiceC : "Oxygen",
      correct: "A"
    },  
  {
      question : "What is the biggest planet in our solar system?",
      choiceA : "Saturn",
      choiceB : "Mars",
      choiceC : "Jupiter",
      correct: "C"
    },
  {
      question : "What is a material that will not carry an electrical charge called?",    
      choiceA : "Conductor",    
      choiceB : "Insulator",    
      choiceC : "Unit",
      correct: "B"
    },
  {        
      question : "What scientist proposed the three laws of motion?",    
      choiceA : "Newton",    
      choiceB : "Aristotle",    
      choiceC : "Rutherford",
      correct: "A"
    },  
  {        
      question : "If you were to be lowered into a well, your weight would:",    
      choiceA : "increase slightly",    
      choiceB : "decrease slightly", 
      choiceC: "remain exactly the same",
      correct: "B"
    },
  {        
      question : "The study of how people use tools to perform work and how people physically relate to their working environment is called?",    
      choiceA : "engineering",    
      choiceB : "ergonomics",    
      choiceC : "agronomy", 
      correct: "B"
    }
];

start.addEventListener("click", startQuiz);
highscores.addEventListener("click", ViewHighscores);

 // The startQuiz function is called when the start button is clicked
 function startQuiz() {  
  start.style.display = "none"
  highscores.style.display = "none"
  bestScore.style.display = "none"
  showQuestions;
  quiz.style.display = "block"
  countdown()
}

var counter = 60
var interval  
function countdown(){
  interval = setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("timer");
      span.innerHTML = "Time: " + " " + counter;
    }
    if (counter === 0) {
      alert( 'Quiz Over!');
      clearInterval(counter);
    }

  }, 1000);
};

  var lastQuestionIndex = questions.length = 1
  var runningQuestionIndex = 0

  function showQuestions(){    

    if(runningQuestionIndex > lastQuestionIndex){
      quiz.style.display = "none"
      timer.style.display = "none"
      highscores.style.display = "block"
      clearInterval(interval)
      score.innerHTML = "Your score is " + "" + counter
      submitScore.addEventListener("click", save)
      function save(){
        var users = JSON.parse(localStorage.getItem("userScores")) || []
        users.push(counter)
        localStorage.setItem("userScores", JSON.stringify(users))

        var initials = document.getElementById("initials").value
        var initials  = JSON.parse(localStorage.getItem("userInitials")) || []

        initials.push(initials)
        localStorage.setItem("userInitials", JSON.stringify(initials))

        location.reload()
      }
    }else{
    let q = questions[runningQuestionIndex];
    questions.innerHTML = "<p>"+ q.questions +"</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
  }
}
   
  
  function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
      runningQuestionIndex++
      showQuestions()   
  }else{
    counter = counter - 10
    runningQuestionIndex++
    showQuestions()
  }
}


  

    