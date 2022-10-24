//assigning some variables
let countdownEl = document.getElementById("countdown");
let startQuizEl = document.getElementById("startQuiz");
let questionsEl = document.getElementById("questions");
let answerCheckEl = document.getElementById("answerCheck");
let scoreEl = document.getElementById("score");
let highscoreEl = document.getElementById("highscore");
let initialsEl = document.getElementById("initials");
let submitEl = document.getElementById("submit");


//These are going to be the questions asked
let questionList = [
{   question: "Commonly used data types do NOT include:",
    options: {
        1: "alerts",
        2: "booleans",
        3: "numbers",
        4: "strings",
      },
    correctAnswer: "alerts"
},
{   question: "The condition in an if/else statement is enclosed within?",
    options: {
        1: "curly brackets",
        2: "square brackets",
        3: "parentheses",
        4: "quotes",
      },
    correctAnswer: "parentheses"
},
{   question: "Arrays in JavaScript can be used to store which of the following?",
    options: {
        1: "booleans",
        2: "square brackets",
        3: "numbers",
        4: "all of the above",
      },
    correctAnswer: "all of the above"
},
{   question: "String values must be enclosed within what before being assigned to variables?",
    options: {
        1: "curly brackets",
        2: "square brackets",
        3: "parentheses",
        4: "quotes",
      }, 
    correctAnswer: "quotes"
},
{   question: "When defining a variable, which should be used so it could be overwritten?",
    options: {
        1: "let",
        2: "var",
        3: "const",
        4: "all of the above",
      },
    correctAnswer: "let"
} 
];
