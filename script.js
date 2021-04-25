//Variables
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choice1 = document.getElementById('1');
const choice2 = document.getElementById('2');
const choice3 = document.getElementById('3');
const scoreDiv = document.getElementById("scoreContainer");
const score = document.getElementById("score");
const highscorePage = document.getElementById("highscorePage");
const bestScore = document.getElementById("bestScore");
const highscoreInitials = document.getElementById("highscoreInitials");
const submitScore = document.getElementById("submitScore");
const text = document.getElementById("text");
const quizBody = document.getElementById("quizBody");


//Questions with answers
var questions =
  [{
      question : "How many bones are in the human body?",
      choice1 : "166",
      choice2 : "300",
      choice3 : "206",
      correct: "3"
    },      
  {    
      question: "What is the most abundant gas in the Earth's atmosphere?",
      choice1 : "Nitrogen",
      choice2 : "Hydrogen",
      choice3 : "Oxygen",
      correct: "1"
    },  
  {
      question : "What is the biggest planet in our solar system?",
      choice1 : "Saturn",
      choice2 : "Mars",
      choice3 : "Jupiter",
      correct: "3"
    },
  {
      question : "What is a material that will not carry an electrical charge called?",    
      choice1 : "Conductor",    
      choice2 : "Insulator",    
      choice3 : "Unit",
      correct: "2"
    },
  {        
      question : "What scientist proposed the three laws of motion?",    
      choice1 : "Newton",    
      choice2 : "Aristotle",    
      choice3 : "Rutherford",
      correct: "1"
    },  
  {        
      question : "If you were to be lowered into a well, your weight would:",    
      choice1 : "increase slightly",    
      choice2 : "decrease slightly", 
      choice3: "remain exactly the same",
      correct: "2"
    },
  {        
      question : "The study of how people use tools to perform work and how people physically relate to their working environment is called?",    
      choice1 : "engineering",    
      choice2 : "ergonomics",    
      choice3 : "agronomy", 
      correct: "2"
    }
];

start.addEventListener("click", startQuiz);
HS.addEventListener("click", HS);

var counter = 60;
var timer = document.getElementById("timer");
var startScore = 0;

timer.textContent = "Time: " + startScore;

 // The startQuiz function is called when the start button is clicked
 function startQuiz() {  
  start.style.display = "none"
  HS.style.display = "none"
  quizBody.style.display = "none"
  quiz.style.display = "block"
  question.style.display = "block"
  
  
 var timeInterval = setInterval(function() {
  timer.textContent = "Time: " + counter;
      counter-=1;
    if (counter === 0 || questions.length === runningQuestionIndex+1) {
      //not sure
      scoreRender();
     clearInterval(timeInterval);
     timer.textContent = "Time:" + counter;
    }
  }, 1000);

  showQuestions();
};

  var lastQuestionIndex = questions.length -1;
  var runningQuestionIndex = 0

  function showQuestions(){      
    let q = questions[runningQuestionIndex];
    question.innerHTML =  q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
  };

   
  
  function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
      answerOutput.textContent = "Correct!"
         
  }
  else{
    answerOutput.textContent = "Wrong!"
    counter -=10;
  }
  if (questions.length === runningQuestionIndex+1) {
    scoreRender();
    return;
  }
  runningQuestionIndex++;
  showQuestions();
};

function scoreRender() {
  score.style.display = "block";
  quizBody.style.display = "none";
  quiz.style.display = "none";

  if (counter === 0 || questions.length -1) {
    score.textContent = "Your score is " + counter + ".";
  }
};

  
var endScore = {
  userInfo: 'summer',
  counter: '30'
}

var endScore = [];

var loadScores = function() {
  var endScore = localStorage.getItem("userInfo, counter");

  if (!endScore) {
    return false;
  }

  for (var i = 0; i < endScore.length; i++) {
    var endScore = endScore[i];
    var listItemel = document.createElement('li');
    listItemel.textContent = endScore;
  }
  endScore.push(endScore)
};