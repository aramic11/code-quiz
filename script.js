//Questions to ask the user
const quizData = [
  {
    question: "Commonly used data types do NOT include:",
    options: ["alerts", "booleans", "numbers", "strings"],
    answer: "alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed within?",
    options: ["curly brackets", "square brackets", "parentheses", "quotes"],
    answer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store which of the following?",
    options: ["booleans", "square brackets", "numbers", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within what before being assigned to variables?",
    options: ["curly brackets", "square brackets", "parentheses", "quotes"],
    answer: "quotes"
  },
  {
    question: "When defining a variable, which should be used so it could be overwritten?",
    options: ["let", "var", "const", "all of the above"],
    answer: "let"
  }
];

const quizTime = document.getElementById("quiz-time");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizSubmit = document.getElementById("quiz-submit");
const quizResults = document.getElementById("quiz-results");
const quizRestart = document.getElementById("quiz-restart");
const quizInitials = document.getElementById("quiz-initials");
const highScores = document.getElementById("high-scores");
const startButton = document.getElementById("start-button");
const welcomeMessage = document.querySelector("#quiz-container p");


let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerId;

startButton.addEventListener("click", function() {
  welcomeMessage.style.display = "none";
  startQuiz();
});

//Function to start the quiz
function startQuiz() {
  startButton.classList.add("hidden");
  quizTime.textContent = `Time left: ${timeLeft}s`;
  showQuestion();
  quizSubmit.addEventListener("click", submitAnswer);
  quizRestart.addEventListener("click", restartQuiz);
  timerId = setInterval(countdown, 1000);
  loadScores();
};

function showQuestion() {
  const question = quizData[currentQuestion];
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = "";
  for (const option of question.options) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    label.append(radio, option);
    quizOptions.appendChild(label);
  }
};

//function to submit an answer
function submitAnswer() {
  const selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) {
    return; // do not allow empty submissions
  }
  const answer = selectedOption.value;
  if (answer === quizData[currentQuestion].answer) {
    score++;
  } else {
    timeLeft -= 10; // subtract 10 seconds for incorrect answers
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
};

function endQuiz() {
  clearInterval(timerId);
  quizResults.textContent = `You scored ${score} out of ${quizData.length}.`;
  quizSubmit.removeEventListener("click", submitAnswer);
  quizRestart.classList.remove("hidden");

  // Allow user to save initials and score
  const initials = prompt("Enter your initials to save your score:");
  if (initials) {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${initials}: ${score}`;
    highScores.appendChild(scoreItem);
    saveScore(initials, score);
  }
};

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  timeLeft = 60;
  quizResults.textContent = "";
  quizRestart.classList.add("hidden");
  startQuiz();
};

function countdown() {
  timeLeft--;
  quizTime.textContent = `Time left: ${timeLeft}s`;
  if (timeLeft <= 0) {
    endQuiz();
  }
};

//Saves score to local storage
function saveScore(initials, score) {
  const highScoresString = localStorage.getItem("highScores");
  let highScoresArray = highScoresString ? JSON.parse(highScoresString) : [];
  highScoresArray.push({ initials, score });
  highScoresArray.sort((a, b) => b.score - a.score);
  if (highScoresArray.length > 5) {
    highScoresArray = highScoresArray.slice(0, 5);
  }
  localStorage.setItem("highScores", JSON.stringify(highScoresArray));
};

function loadScores() {
  const highScoresString = localStorage.getItem("highScores");
  let highScoresArray = highScoresString ? JSON.parse(highScoresString) : [];
  highScores.innerHTML = "";
  for (const { initials, score } of highScoresArray) {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${initials}: ${score}`;
    highScores.appendChild(scoreItem);
  }
};
