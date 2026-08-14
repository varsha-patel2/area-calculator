// Your JavaScript code here

const quesJSON = [
  {
    category: "Food and Drink",
    id: "qa-1",
    correctAnswer: "Three",
    options: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a McDonald's Big Mac?"
  },
  {
    category: "Science",
    id: "qa-2",
    correctAnswer: "Mars",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    question: "Which planet is known as the Red Planet?"
  },
  {
    category: "Geography",
    id: "qa-3",
    correctAnswer: "Mount Everest",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    question: "What is the highest mountain in the world?"
  },
  {
    category: "History",
    id: "qa-4",
    correctAnswer: "1947",
    options: ["1945", "1946", "1947", "1950"],
    question: "In which year did India gain independence?"
  },
  {
    category: "Technology",
    id: "qa-5",
    correctAnswer: "JavaScript",
    options: ["Python", "Java", "JavaScript", "C++"],
    question: "Which programming language is primarily used to add interactivity to web pages?"
  },
  {
    category: "Sports",
    id: "qa-6",
    correctAnswer: "11",
    options: ["9", "10", "11", "12"],
    question: "How many players are there on a football (soccer) team on the field?"
  },
  {
    category: "Mathematics",
    id: "qa-7",
    correctAnswer: "100",
    options: ["10", "50", "100", "1000"],
    question: "What is the square of 10?"
  },
  {
    category: "Animals",
    id: "qa-8",
    correctAnswer: "Blue Whale",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    question: "What is the largest animal on Earth?"
  },
  {
    category: "Entertainment",
    id: "qa-9",
    correctAnswer: "J.K. Rowling",
    options: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "J.K. Rowling",
      "C.S. Lewis"
    ],
    question: "Who wrote the Harry Potter series?"
  },
  {
    category: "General Knowledge",
    id: "qa-10",
    correctAnswer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    question: "Which is the largest ocean on Earth?"
  }
];


let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;


const questionEle = document.getElementById("question");
const optionsELe = document.getElementById("options");
const scoreEle = document.getElementById("score");
const nextButtonEle = document.getElementById("next");

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  questionEle.textContent = question
  const shuffledOptions = shuffleOptions(options)

  shuffledOptions.map((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionsELe.appendChild(btn)

    btn.addEventListener("click", () => {
      if (option === correctAnswer) {
        score += 1;
      }
      else {
        score -= 0.25;
      }

      // console.log(score);
      scoreEle.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion()
    });
  });
}

showQuestion()
nextButtonEle.addEventListener("click", ()=>{
  scoreEle.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion()
})


// shuffling the options:

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [
      options[i], options[j]
    ] = [
        options[j],
        options[i]
      ]
  }

  // console.log(options);
  return options;
}




function nextQuestion(){
  currentQuestion++;
  optionsELe.textContent = "";
  // console.log(currentQuestion);
  if(currentQuestion>= quesJSON.length){
    questionEle.textContent = "Quiz Completed!";
    nextButtonEle.remove();
      optionsELe.innerHTML = `
        <div class="completed">
          <div class="icon">🏆</div>
          <h2>Congratulations!</h2>
          <p>Your Final Score</p>
          <h1>${score}</h1>
        </div>
      `;
  }
  else {
    showQuestion();
  }
}


