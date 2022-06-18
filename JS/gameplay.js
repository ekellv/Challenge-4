var landingPage = document.querySelector(".landing-page");
var quizIntro = document.querySelector("#quiz-intro");
var timer = document.querySelector(".timer");
var playButton = document.querySelector("#btn-play");
var quizElement = document.querySelector("#quiz");
var quizQuestion = document.querySelector("#quiz-question");
var multipleChoices = document.querySelector(".multiple-choices");
var rightOrWrong = document.querySelector("#right-or-wrong");
var quizFinished = document.querySelector("#quiz-finished");
var finalScore = document.querySelector("#final-score");
var playerInitials = document.querySelector("#player-initials");
var submitScore = document.querySelector("#submit");

var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      title: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "Boolean operators that can be used in JavaScript include:",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      title:
        "Which one of these is not among the three different types of errors in JavaScript?",
      choices: [
        "Animation time errors",
        "Load time errors",
        "Run time errors",
        "Logical Errors"
      ],
      answer: "Animation time errors"
    },
    {
      title: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "What is the type of Pop up boxes available in JavaScript?:",
      choices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: "All the above"
    }
  ];

// declaring variables to be globally accessible for several of the quiz functions
// starting the questions array from its first element 
var questionsIndex = 0; 
// setting the amount of time the user will have to complete the quiz, which is the questions array times 10 seconds per question
var quizTime = (questions.length) * 10;
// timer variable 
var timerStart;

//begins quiz by hiding the landing page explanations, starting the timer in the upper right corner, and calling the getNextQuestions function, which will display the quiz
function startQuiz() {
    // hide the quiz intro paragraph and heading  
    quizIntro.setAttribute("class", "hide");

    // display the hidden quiz questions
    quizElement.removeAttribute("class");
    
    // starting the timer to call the countdown function and decrement one second at a time
    var timerStart = setInterval(timerStart, 1000);
    
    // displays the countdown 
    timer.textContent = quizTime;
    
    // calls the function that runs through the questions 
    getNextQuestion();
}

// function to display quiz questions 
function getNextQuestion() {
    // get questions from the array created in the questions.js file
    var viewQuestions = questions[questionsIndex];

    // use newly non-hidden quiz question element from HTML to display quiz questions
    var quizQuestion = document.querySelector("#quiz-question");
    quizQuestion.textContent = viewQuestions.title;
    // clear out any remaining choices from previous quiz attempts
    multipleChoices.innerHTML = "";
    // starting loop for choice options from the questions.js array
    viewQuestions.choices.forEach(function(choice, i) {
        // creates a button for each of the multiple choice answers from the array
        var answerButton = document.createElement("button");
        // styling the buttons as they've been displayed thusfar 
        answerButton.setAttribute("class", ".btn");
        // inserting the choices from array into the buttons
        answerButton.setAttribute("value", choice);
        // first button will start at "1. choice" and then will increment for each subsequent button 
        answerButton.textContent = i + 1 + ". " + choice;
        // each button gets a click event listener, the results of which will be defined in the chooseAnAnswer function
        answerButton.onClick = answerQuestion;
        // actually display these elements on the page by appending them to the quiz question
        quizQuestion.appendChild(answerButton);
    });
}

// function to define what happens when a user clicks on answer, whether it is right or wrong
function answerQuestion() {

    // if the user clicks an answer that does not match the answer in the question array, time will decrease and the user will be informed of their wrong answer 
    if (this.value !== questions[questionsIndex].answer) {
        time -= 10;
        // won't allow the clock to go into negative numbers if -10 is less than zero
        if (time < 0) {
            time = 0
        }
        timer.textContent = time;
        // user is alerted of their wrong answer
        rightOrWrong.textContent = "Sorry! That's incorrect!";
        // styling for the alert
        rightOrWrong.style.color = "burgundy";
        rightOrWrong.style.fontSize = "50px";
    } else {
        rightOrWrong.textContent = "Correct! Great job!";
        rightOrWrong.style.color = "green";
        rightOrWrong.style.fontSize = "50px";
    }

    // styles the element from the CSS sheet
    rightOrWrong.setAttribute("class", "right-or-wrong"); // need to define this class in CSS!
    
    // after two seconds the right/wrong alert will disappear 
    setTimeout(function() {
        rightOrWrong.setAttribute("class", "hide");
    }, 2000);

    // switch from current piece of question array into the next 
    questionsIndex++;

    // if there are no more questions left in the array, then the quiz is done
    if (questionsIndex === questions.length) {
        endQuiz();
    
    // if not, the next question will appear
    } else {
        getNextQuestion();
    }
}

// function called when quiz is finished- either by going through all the questions or running out of time 
function endQuiz() {

    // stop the clock from counting down
    clearInterval(timerStart);
    // display hidden element with the end of quiz information
    var quizFinished = document.querySelector("#quiz-finished");
    quizFinished.removeAttribute("class");

    // once again hiding the quiz display
    quizElement.setAttribute("class", "hide");
}

// function to control timer display & to signal the quiz is finished
function timerStart() {
    // timer will display the quiz time
    timer.textContent = quizTime;

    // once the clock reaches zero, it will call the already defined endQuiz function and the quiz is done 
    if (quizTime <= 0) {
        endQuiz();
    }
}

function saveHighScores() {
    var initials = playerInitials.value.trim();
    // get saved scores from user's local storage, or if there is none found, display an empty array
    if (initials !== "") {
        var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // creates new high score element for the user 
    var newScore = {
        score: time, 
        initials: initials
    };

    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "scores.html";
    }
}

function pressEnter(event) {
    if (event.key === "Enter") {
        saveHighScores();
    }
}


submitScore.onClick = saveHighScores();

playButton.onClick = startQuiz();

playerInitials.onkeyup = pressEnter();