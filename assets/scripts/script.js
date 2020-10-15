
let questionsEl = document.getElementById("questionsArea");
let scoresEl = document.getElementById("scores");
let initialsButton = document.getElementById("initialButton");

let questions = [
  {
    ques: "1)	Question here.",
    answer: ["a. ", "b. ", "c. ", "d. "],
    correct: "d",
  },

  {
    ques: "2) Question here.",
    answer: ["a. ", "b. ", "c. ", "d. "],
    correct: "a",
  },

  {
    ques: "3) Question here.",
    answer: ["a. ", "b. ", "c. ", "d. "],
    correct: "b",
  },

  {
    ques: "4) Question here.",
    answer: ["a. ", " b. ", "c. "],
    correct: "b",
  },
];



// 1. Click button to start timer:
startEl.addEventListener("click", function () {

function displayQuestions() {
  // for (let i = 0; i < questions.length; i++) {
  let current = questions[i];
  display1(current);
  // }
}
displayQuestions();

function display1(question) {
  questionsEl.innerHTML = "";

  let questionH4 = document.createElement("h4");
  questionH4.innerHTML = question.ques;
  questionsEl.appendChild(questionH4);

  for (let j = 0; j < question.answer.length; j++) {
    let answerButton = document.createElement("button");
    answerButton.innerHTML = question.answer[j];
    answerButton.addEventListener("click", function () {
      //
     console.log (i)
     i+= 1;
    });

    questionsEl.appendChild(answerButton);
  }
}
});