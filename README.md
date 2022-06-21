GitHub Pages Link: (https://ekellv.github.io/Challenge-4/index.html)

This application is a quiz made to challenge users on their Javascript knowledge. The user can click the button to start the quiz, or navigate to the high scores page to check if they have any scores already stored. 

When the quiz starts, the timer will also begin to countdown. In total, the user has ten seconds per question to finish the quiz. Arranging it this way means questions can be deleted, added, or change in order and the quiz time will reflect the changes. 

As the quiz progresses, it will be populated with questions and potential answers from a large array contained in the questions.js file. Separate code will alert the user if they answer correctly or incorrectly, before disappearing so the user is not distracted from the next question. For every question the user answers correctly, ten seconds will be added onto their timer, and for every incorrect answer they will lose ten seconds of time. 

The buttons containing the potential quiz answers are dynamically created with every question, which means every question could have a different number of answer choices and still function completely correctly. 

At the end of the quiz, the time remaining now represents the score the user has earned. The user can input their initials and save their quiz score in the browser's local storage to try the quiz again. They can also clear their score from the local storage. From there, they can go back and retake the quiz, or simply admire the results of their hard work. 

