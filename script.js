const StartQuiz = document.getElementById("Start-Quiz");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceC = document.getElementById("D");

const choiceC = document.getElementById("E");

const choiceC = document.getElementById("F");

const choiceC = document.getElementById("G");

let TIMER;

let SCORE;


let questions = [

    {

        question : "How many bones are in the human body?",

        imgSrc : "",

        choiceA : "166",

        choiceB : "300",

        choiceC : "206",

        correct : "206"

    },{

        question : "What is the most abundant gas in the Earth's atmosphere?",

        imgSrc : "",

        choiceA : "Nitrogen",

        choiceB : "Hydrogen",

        choiceC : "Oxygen",

        correct : "Nitrogen"

    },{

        question : "What is the biggest planet in our solar system?",

        imgSrc : "img/js.png",

        choiceA : "Saturn",

        choiceB : "Mars",

        choiceC : "Jupiter",

        correct : "Jupiter"

    },{

        question : "What is a material that will not carry an electrical charge called?",
    
        imgSrc : "",
    
        choiceA : "Conductor",
    
        choiceB : "Insulator",
    
        choiceC : "Unit",
    
        correct : "Insulator"
    
    },{
        
        question : "What scientist proposed the three laws of motion?",
    
        imgSrc : "",
    
        choiceA : "Newton",
    
        choiceB : "Aristotle",
    
        choiceC : "Rutherford",
    
        correct : "Newton"
    
    },{

        
        question : "If you were to be lowered into a well, your weight would:",
    
        imgSrc : "",
    
        choiceA : "increase slightly",
    
        choiceB : "decrease slightly",
    
        choiceC : "remain exactly the same",
    
        correct : "decrease slightly"
    
    },{

        
        question : "The study of how people use tools to perform work and how people physically relate to their working environment is called?",
    
        imgSrc : "",
    
        choiceA : "engineering",
    
        choiceB : "ergonomics",
    
        choiceC : "agronomy",
    
        correct : "ergonomics"
    
    }

];

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

//Rendering a question

function renderQuestion(){

    let q = questions[runningQuestion];
   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;

    choiceE.innerHTML = q.choiceE;

    choiceF.innerHTML = q.choiceF;

    choiceG.innerHTML = q.choiceG;

}

StartQuiz.addEventListener("click", StartQuiz);
//Start quiz
function StartQuiz() {
    StartQuiz.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    TIMER = setInterval(renderCounter,)
}

StartQuiz.style.display = "none"
renderQuestion();
quiz.style.display ="block";

//Check Answer
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        //if correct answer
        score++
    }else{
        //if wrong answer
    }
}

//Added EventListener
StartQuiz.addEventListener("click", StartQuiz);