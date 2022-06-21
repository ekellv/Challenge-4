// this array stores all the questions to be called during the quiz
// each set of questions holds a title with a question, their choices, and an answer which matches one of the choices
// the quiz.js file can access each of these elements to form the quiz display and ascertain whether or not the user has chosen a correct or incorrect answer

var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["For", "While", "Do-While Loops", "All of the Above"],
      answer: "All of the Above"
    },
    {
      title: "Which do you use to enclose an array in Javascript?",
      choices: [
        "Brackets",
        "Quotation Marks",
        "Parentheses",
        "Two Forward Slashes"
      ],
      answer: "Brackets"
    },
    {
      title: "True or False: Variables declared inside {} have global scope.",
      choices: ["True", "False"],
      answer: "False"
    },
    {
      title: "Boolean operators used in JavaScript include:",
      choices: [
        "The 'And' Operator &&",
        "The 'Or' Operator ||",
        "The 'Not' Operator !",
        "All of the Above"
      ],
      answer: "All of the Above"
    },
    {
      title:
        "When using Javascript with arithmetic, the % will do what?",
      choices: [
        "Return a percentage of a specific statistic",
        "Cancel the function",
        "Return the division remainder of a set of numbers",
        "Present the user with a pop-up of the result of their query"
      ],
      answer: "Return the division remainder of a set of numbers"
    },
    {
      title: "Onchange, onclick, onmouseover, and keydown are examples of what?",
      choices: [
        "A For Loop",
        "Function Data Types",
        "Event Listeners",
        "Elements to be used with Math.random"
      ],
      answer: "Event Listeners"
    },
    {
      title: "In an if / else statement the condition must be enclosed within what?",
      choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
      answer: "Parentheses"
    },
    {
      title: "What can JavaScript arrays be used to store?",
      choices: [
        "Numbers and Strings",
        "Other Arrays",
        "Booleans",
        "All of the Above"
      ],
      answer: "All of the Above"
    },
    {
      title:
        "DOM stands for:",
      choices: ["Direct Output Material", "Dominic Toretto", "Done Over Principal", "Document Object Model"],
      answer: "Document Object Model"
    },
    {
      title:
        "What is a useful tool to help you develop and debug code as you write?",
      choices: ["JavaScript", "Terminal/Git Bash", "For Loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "True or False: You cannot use document.getElementbyId() to locate an HTML element",
      choices: ["Alert", "Confirm", "Prompt", "All of the Above"],
      answer: "All of the Above"
    },
    {
      title: "True or False: You can change the a webpage's style through JavaScript.",
      choices: ["True", "False"],
      answer: "True"
    }
  ];