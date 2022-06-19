var questionsDisplay = document.querySelector("#questions");
var timerDisplay = document.querySelector("#time");
var answerOptions = document.querySelector("#answer-options");
var submitButton = document.querySelector("#submit");
var startButton = document.querySelector("#btn-start");
var userInitialsInput = document.querySelector("#user-initials");
var rightWrong = document.querySelector("#right-wrong");

// quiz state variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsDisplay.removeAttribute("class");

  // start timer
  timerId = setInterval(countdown, 1000);

  // show starting time
  timerDisplay.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  answerOptions.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer-options button");
    answerButton.setAttribute("value", choice);

    answerButton.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    answerButton.onclick = questionClick;

    // display on the page
    answerOptions.appendChild(answerButton);
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timerDisplay.textContent = time;
    rightWrong.textContent = "Sorry! That's incorrect!";
    rightWrong.style.color = "#7d052f";
    rightWrong.style.fontSize = "42px";
  } else {
    rightWrong.textContent = "Correct! Great Job!";
    rightWrong.style.color = "#136b65";
    rightWrong.style.fontSize = "42px";
  }

  // flash right/wrong feedback
  rightWrong.setAttribute("class", "right-wrong");
  setTimeout(function() {
    rightWrong.setAttribute("class", "right-wrong hide");
  }, 2000);

  // next question
  currentQuestionIndex++;

  // time checker
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var quizFinished = document.querySelector("#quiz-finished");
  quizFinished.removeAttribute("class");

  // show final score
  var finalScoreDisplay = document.querySelector("#final-score");
  finalScoreDisplay.textContent = time;

  // hide questions section
  questionsDisplay.setAttribute("class", "hide");
}

function countdown() {
  // update time
  time--;
  timerDisplay.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = userInitialsInput.value.trim();

  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "scores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// submit initials
submitButton.onclick = saveHighscore;

// start quiz
startButton.onclick = startQuiz;

userInitialsInput.onkeyup = checkForEnter;