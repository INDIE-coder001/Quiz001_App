const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
    {
    question: "How fast is the speed of light?",
    options: ["20N", "5000000km/hr", "2m/s", "300,000km/hr"],
    correctAnswer: "300,000km/hr"
  },
    {
    question: "Who is the richest man in the world?",
    options: ["Donlad Trump", "Elon Musk", "Bill Gates", "Jeff Bezos"],
    correctAnswer: "Elon Musk"
  },
    {
    question: "How many primary colors are there?",
    options: ["105", "2", "3", "15"],
    correctAnswer: "3"
  },
  {
    question: "What is the standard unit for speed?",
    options: ["N", "Km/hr", "m/s", "hr"],
    correctAnswer: "m/s"
  },
  {
    question: "How tall is Wanbanyama the NBA player?",
    options: ["7'6", "7'4", "7'2", "7'5"],
    correctAnswer: "7'4"
  },
    {
    question: "Whp is the best fottball player in the world?",
    options: ["Lamine Yamal", "Neymar jr", "Kylian Mpappe", "Cristiano Ronaldo"],
    correctAnswer: "Cristiano Ronaldo"
  },
    {
    question: "Why does food get cold and drink gets hot?",
    options: ["I don't know", "Who knows the answer", "Change in temprature", "Difference in size"],
    correctAnswer: "Change in temprature"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const scoreContainer = document.getElementById("score-container");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
  currentQuestion.options.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = option;
    optionDiv.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
      optionDiv.classList.add("selected");
      selectedOption = option;
    });
    questionContainer.appendChild(optionDiv);
  });
}

function checkAnswer() {
  if (!selectedOption) return;
  const correct = quizData[currentQuestionIndex].correctAnswer;
  if (selectedOption === correct) score++;
  currentQuestionIndex++;
  selectedOption = null;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  questionContainer.classList.add("hidden");
  submitBtn.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
  scoreContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  questionContainer.classList.remove("hidden");
  submitBtn.classList.remove("hidden");
  scoreContainer.classList.add("hidden");
  restartBtn.classList.add("hidden");
  loadQuestion();
}

submitBtn.addEventListener("click", checkAnswer);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();