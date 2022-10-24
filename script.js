//assigning some variables
let timeLeft = 80;
let quizScore = 200;
let index = 1;
let games = [];
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

//when the start button is clicked, the countdown will begin and the questions will be asked
startQuizEl.addEventListener("click", function () {
  countdown();
  renderQuestions(questionList[0]);
});

//This is so the game continues to ask questions as you complete each question until you get to the last one
questionsEl.addEventListener("click", function(event) {
  if (index == 5) {
      alert("Thank you for Testing your JavaScript Knowledge, the game is over. Please submit your score a refresh the browse to try again");
  } else if (event.target.textContent != questionList[index - 1].correctAnswer) {
    timeLeft -= 10;
  } else {
    index++; 
    console.log(timeLeft);
    renderQuestions(questionList[index - 1]);
  }
});
//The User starts with 200 points and for each question he gets wrong, 20 is deducted
questionsEl.addEventListener("click", function(event) {
  if (event.target.textContent === questionList[index - 1].correctAnswer) {
      quizScore += 20;
      scoreEl.textContent = "Your score = " + quizScore
  }else {
      quizScore -= 20;
      scoreEl.textContent = "Your score = " + quizScore
      setTimeout(questionList[index - 1]);
  }
});
 // Timer that counts down from 80 seconds
 function countdown() {
  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      countdownEl.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}
// This functions is used to start the quiz and so the viewer could see the questions on display
function renderQuestions(validQuestion) {
  questionsEl.innerHTML = "";

  // creates the questions and options and then appends them to the screen. Saw a youtube video on how to do this
  let questionAsked = document.createElement("p");
  let optionsList = document.createElement("ol");
  let option1 = document.createElement("li");
  let option2 = document.createElement("li");
  let option3 = document.createElement("li");
  let option4 = document.createElement("li");

  questionAsked.textContent = validQuestion.question;
  option1.textContent = validQuestion.options[1];
  option2.textContent = validQuestion.options[2];
  option3.textContent = validQuestion.options[3];
  option4.textContent = validQuestion.options[4];

  questionsEl.append(questionAsked);
  questionsEl.append(optionsList);
  optionsList.append(option1);
  optionsList.append(option2);
  optionsList.append(option3);
  optionsList.append(option4);
}
