function printHighscores() {
  // grab the high scores from what was stored in local storage post-quiz, or just create an empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // displays the scores in descending order, by sorting the array and then listing the array from largest to smallest
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  // function to create and append new user scores to the high scores array stored in the local storage array
  highscores.forEach(function(score) {
    // creates a list element to append onto the ol tag in the game.html, its position is determined in the previous function
    var userScores = document.createElement("li");
    // text content will be the initials value in the score array and then the score value in the score array
    userScores.textContent = score.initials + " - " + score.score + " 🏅";

    // this displays it on the page by actually appending the new element to the ol tag
    var highscoresList = document.getElementById("highscores-list");
    highscoresList.appendChild(userScores);
  });
}

// this function will clear the highscores information stored in the local storage, emptying the array
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
// when the clear button is clicked, the clearHighScores() function will call and the high scores will be purged from local storage
// this occasionally flags as null in the console, but the scores are cleared from local storage when it's clicked anyway (double checked)
document.getElementById("clear").onclick = clearHighscores;

// this displays either the stored array or the empty array, depending on conditions when the page is
printHighscores();