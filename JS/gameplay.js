var landingPage = document.querySelector(".landing-page");
var quizIntro = document.querySelector("#quizIntro");
var timer = document.querySelector(".timer");
var playButton = document.querySelector("#play-btn");
var quizElement = document.querySelector(".quiz");
var quizQuestion = document.querySelector("#quiz-question");
var multipleChoices = document.querySelector(".multiple-choices");
var rightOrWrong = document.querySelector("#right-or-wrong");
var quizFinished = document.querySelector("#quiz-finished");
var finalScore = document.querySelector("#final-score");
var playerInitials = document.querySelector("#player-initials");
var submitScore = document.querySelector("#submit");

// declaring variables to be globally accessible for several of the quiz functions 
var questionsIndex = 0; 
var quizTime = questions.length * 10;
var timerStart;

//begins quiz by hiding the landing page explanations, starting the timer in the upper right corner, and calling the getNextQuestions function, which will display the quiz
function startQuiz() {
    // hide the quiz intro paragraph and heading  
    quizIntro.setAttribute("class", "hide");

    // display the hidden quiz questions
    quizElement.removeAttribute("class");
    
    // starting the timer to call the countdown function and decrement one second at a time
    var timerStart = setInterval(countdown, 1000);
    
    // displays the countdown 
    timer.textContent = quizTime;
    
    // calls the function that runs through the questions 
    getNextQuestion();
}

// function to display quiz questions 
function getNextQuestion() {
    // get questions from the array created in the questions.js file
    var answerTheQuestion = questions[questionsIndex];
    // use newly non-hidden quiz question element from HTML to display quiz questions
    var quizQuestion = document.querySelector("#quiz-question");
    quizQuestion.textContent = answerTheQuestion.title;
    // clear out any remaining choices from previous quiz attempts
    multipleChoices.innerHTML = "";
    // starting loop for choice options from the questions.js array
    answerTheQuestion.choices.forEach(function(choice, i) {
        // creates a button for each of the multiple choice answers from the array
        var answerButton = document.createElement("button");
        // styling the buttons as they've been displayed thusfar 
        answerButton.setAttribute("class", ".btn");
        // inserting the choices from array into the buttons
        answerButton.setAttribute("value", choice);
        // first button will start at "1. choice" and then will increment for each subsequent button 
        answerButton.textContent = i + 1 + ". " + choice;
        // each button gets a click event listener, the results of which will be defined in the chooseAnAnswer function
        answerTheQuestion.onClick = chooseAnAnswer;
        // actually display these elements on the page
        multipleChoices.appendChild(answerTheQuestion);
    });
}









function timerStart() {
    timer.textContent = quizTime;

    if (quizTime <= 0) {
        endQuiz(); // need to define this 
    }
}