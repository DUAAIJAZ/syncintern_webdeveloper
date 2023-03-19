// Questions array
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the difference between an opening tag and a closing tag?",
    options: ["Opening tag has a / in front", "Closing tag has a / in front", "There is no difference"],
    answer: "Closing tag has a / in front"
  },
  {
    question: "< body > Is this an opening tag or a closing tag?",
    options: ["Opening", "Closing"],
    answer: "Opening"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

// Function to load question and options
function loadQuestion() {
  const question = questions[currentQuestion];
  
  questionElem.textContent = question.question;
  
  optionsElem.innerHTML = "";
  for (const option of question.options) {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", checkAnswer);
    optionsElem.appendChild(button);
  }
}

// Function to check answer and load next question
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const question = questions[currentQuestion];
  
  if (selectedOption === question.answer) {
    score++;
  }
  
  currentQuestion++;
  
  if (currentQuestion >= questions.length) {
    // End of quiz
    alert(`Your score is ${score} out of ${questions.length}`);
  } else {
    loadQuestion();
  }
}

// Load first question
loadQuestion();

nextBtn.addEventListener("click", loadQuestion);
