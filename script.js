//Variables
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");




//Questions with answers
let question =
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

  const lastQuestion = questions.length - 1;
  let runningQuestion = 0;
  let count = 0;
  const timer = 60;
  const gaugeWidth = 150;
  const gaugeUnit = gaugeWidth / timer;
  let TIMER;
  let score = 0;

  
  function renderQuestion(){
    let q = question[runningQuestion];

    questions.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

  }

  start.addEventListener("click", start);

   // The startQuiz function is called when the start button is clicked
   function start() {  
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
  }


  function renderCounter(){
    if(count <= timer){
      counter.innerHTMl = count;
      timeGauge.style.width = count * gaugeUnit + "px";
      count++
    }else{
      clearInterval(TIMER);
      scoreRender();
    }
  }

  function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
      score++;    
  }else{
    score--;
  }
  count = 0;
  if(runningQuestion < lastQuestion){
    runningQuestion++;
    renderQuestion();
  }else{
    clearInterval(TIMER);
    scoreRender();
  }
}

function scoreRender(){
  scoreDiv.style.display = "block";


}


  

    