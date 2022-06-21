// global variables for the DOM elements that will be accessed in multiple functions 
// some are visible before quiz is begun, some are hidden until certain quiz functions run
var questionsDisplay = document.querySelector("#questions"); // invisible to user until quiz start
var timerDisplay = document.querySelector("#time"); // visible, not running until quiz start, set to 0
var answerOptions = document.querySelector("#answer-options"); // invisible to user until quiz start
var submitButton = document.querySelector("#submit"); // invisible to user until quiz is finished, submits scores to local storage
var backButton = document.getElementById("go-back-button"); // button that will appear when quiz is loaded and will go back to the homepage
var startButton = document.querySelector("#btn-start"); // visible to user upong page first loading, launches quiz
var userInitialsInput = document.querySelector("#user-initials"); // invisible to user until quiz is finished, where user inputs their initials to be stored
var rightWrong = document.querySelector("#right-wrong"); // invisible to user until quiz starts, only displays when user clicks on an answer to display right or wrong

// starting quiz variables (before quiz is run, or at quiz start)
var currentQuestionIndex = 0; // index of questions will start at the first element in the questions.js array
var time = questions.length * 10; // time will be the number of questions multiplied by ten to give the user a fair amount of time to answer
var timerId; // timer element that will engage the countdown at quiz start 

// function that will begin the quiz for the user, it switches the visibility of the elements from the starter paragraph to the actual quiz for the user 
// 
function startQuiz() {
  // gets rid of the starter paragraph
  var quizIntroInfo = document.querySelector("#quiz-info-paragraph");
  quizIntroInfo.setAttribute("class", "hide");

  // removes the .hide class and displays the questions and their multiple choices
  questionsDisplay.removeAttribute("class");

  // removes the .hide class and displays the homepage button so the user can go back manually instead of hitting the back button and redirecting to the score page
  backButton.removeAttribute("class");

  // starts the timer, counts down one second at a time
  timerId = setInterval(countdown, 1000);

  // shows the starting time, which can change depending on how many questions are entered into the questions array
  timerDisplay.textContent = time;

  // calls the function which will display the questions and answers 
  quizQuestions();
}

// function to decrement the timer
function countdown() {
  // time will decrement 
  time--;
  // the timer in the corner will display this decremented time
  timerDisplay.textContent = time;

  // if time reaches zero, then the quizEnd function will be called 
  if (time <= 0) {
    quizEnd();
  }
}

// function that will run the quiz after it is started by the user by taking elements from the questions.js file and filling and appending tags from the index.html document 
function quizQuestions() {
  // identifies the questions from the question array, populates the quiz one by one to be the current question the user will answer 
  var currentQuestion = questions[currentQuestionIndex];

  // takes the question title h2 tag in the index.html and fills it using the title portion of the question array
  var questionTitle = document.querySelector("#question-title");
  questionTitle.textContent = currentQuestion.title;

  // this makes sure the quiz is refreshed every time the user runs it, otherwise the quiz will display the answer buttons over and over 
  answerOptions.innerHTML = "";

  // each question's multiple choice answer will be displayed on the page, using (choice, i) means this will repeat for however many choices a question might have, whether it is two, four or many more
  currentQuestion.choices.forEach(function(choice, i) {
    // every choice gets its own button, which are created with this script
    var answerButton = document.createElement("button");
    // styles the new buttons using properties stored in the CSS file so page looks cohesive
    answerButton.setAttribute("class", "answer-options button");
    // the value of each question choice will be populated by the "choices" in the question.js array
    answerButton.setAttribute("value", choice);

    // every answer button will have 1 through however many choices are displayed on the page, with its text content reflecting that of the questions.js array
    answerButton.textContent = i + 1 + ". " + choice;

    // every button is assigned its own event listener, which is a click to be defined in next function
    answerButton.onclick = questionClick;

    // take the answer buttons and append them to the answer options tag in the HTML
    answerOptions.appendChild(answerButton);
  });
}

// to be called when user clicks on a question, which will verify whether or not user's answer is correct or false
function questionClick() {
  // if the user doesn't click on answer that matches the result from the questions.js array, then their quiz time and score will be penalized
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;

  // so the timer stops at zero and doesn't display negative numbers, could also have time display nothing when user runs out of time by using time = " " instead of time = 0, but the time going away completely seems more confusing than just leaving the zero up there
  if (time < 0) {
      time = 0;
    }
    // updates the timer if user guesses incorrecly and will alert the user they've chosen incorrect
    timerDisplay.textContent = time;
    rightWrong.textContent = "Sorry! That's incorrect!";
    // styling of wrong quess response
    rightWrong.style.color = "#7d052f";
    rightWrong.style.fontSize = "42px";
  } else { 
    // time & score increases when user selects a correct answer
    time += 10;
    // timer updates with increased time 
    timerDisplay.textContent = time;
    // styling of right guess response
    rightWrong.textContent = "Correct! Great Job!";
    rightWrong.style.color = "#136b65";
    rightWrong.style.fontSize = "42px";
  }

  // displays whether user is right or wrong using the tags in the HTML to create new elements
  rightWrong.setAttribute("class", "right-wrong");
  // runs the display for a second (might play with timing) before once again hiding the display so it does not become a distraction to the user
  setTimeout(function() {
    rightWrong.setAttribute("class", "right-wrong hide");
  }, 1000);

  // go to the next question in the questions.js array
  currentQuestionIndex++;

  // if user runs out of questions in the questions.js array before the timer runs out, then the quiz will end
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    // if there are still questions, this runs the function again until time is up or the array is done
    quizQuestions();
  }
}

// function to run when quiz is finished 
function quizEnd() {
  // stops the timer if the user still has time left 
  clearInterval(timerId);

  // displays the end of quiz statements that were until now hidden in the HTML
  var quizFinished = document.querySelector("#quiz-finished");
  quizFinished.removeAttribute("class");

  // displays the user's score at the end of the game
  var finalScoreDisplay = document.querySelector("#final-score");
  // their final score is actually the amount of time they had left on the clock
  finalScoreDisplay.textContent = time;

  // resets the questions back to their original "hide" class
  questionsDisplay.setAttribute("class", "hide");

  // back button does not have to be hidden, user may still use it on the enter initials phase of the quiz in case they're frustrated and want to restart the quiz to get a better score 
}

// function to save high scores in the local storage to be accessed on the scores.html page
function saveHighscore() {
  // stores the initials the user enters into the text input box when the quiz finishes
  var initials = userInitialsInput.value.trim();

  // if the initials are not an empty field
  if (initials !== "") {
    // the variable highscore will reflect either the array of scores stored in the local storage or an empty array if there currently are none
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // creates a new score for the user, using the time they finished the quiz as their score and their initials as the identifier of their score
    var newScore = {
      score: time,
      initials: initials
    };

    // takes the highscores array from the local storage and adds the newScore variable to it
    highscores.push(newScore);
    // need to stringify the array so it can interpret the values that are being added into it
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // once user has entered their initials and saved their score, this redirects them to the scores.html where they can view all of their saved scores
    window.location.href = "scores.html";
  }
}

// function that will allow the user to press the enter key if they'd like, instead of just clicking the submit button
function pressEnter(event) {
  // if the key they press is the enter key, the saveHighScore function will be called
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// when user keys up on the initials text box, if they pressed enter, the pressEnter function will be called
userInitialsInput.onkeyup = pressEnter;

// if user clicks the submit button, their score will be saved
submitButton.onclick = saveHighscore;

// when user is ready to start the quiz, they can click the start button and the startQuiz function will be called, which runs through all of this code
startButton.onclick = startQuiz;

