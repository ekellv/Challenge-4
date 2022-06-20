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
      title: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and Attribute",
        "Primitive and Reference Types",
        "Reference Types and Attribute",
        "None of the Above"
      ],
      answer: "Primitive and Reference Types"
    },
    {
      title: "Commonly used data types DON'T include:",
      choices: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer: "Alerts"
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
        "Which one of these is not among the three types of errors in JavaScript?",
      choices: [
        "Animation Time Errors",
        "Load Time Errors",
        "Run Time Errors",
        "Logical Errors"
      ],
      answer: "Animation Time Errors"
    },
    {
      title: "In JavaScript, which of these is amongst the data type of variables?",
      choices: [
        "Object Data Types",
        "Function Data Types",
        "Neither of These",
        "Both of These"
      ],
      answer: "Object Data Types"
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
        "What must you enclose string values within to assign them to variables?",
      choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
      answer: "Quotes"
    },
    {
      title:
        "What is a useful tool to help you develop and debug code as you write?",
      choices: ["JavaScript", "Terminal/Git Bash", "For Loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "What type of pop-ups are available in JavaScript?",
      choices: ["Alert", "Confirm", "Prompt", "All of the Above"],
      answer: "All of the Above"
    }
  ];