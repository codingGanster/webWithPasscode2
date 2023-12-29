const questions = [
    {
        question: "Who is St.John Bosco College Principal currently?",
        choices: [" Prof  Kwara a.k.a KK", "Prof  Japan", "Prof A. Amikuzuno"],
        answer: "Prof A. Amikuzuno"
    },
    {
        question: "Which Course Tutor is populary know as Villager?",
        choices: ["ICT Tutor", "P.E Tutor", "Mathematics Tutor"],
        answer: "P.E Tutor"
    },
    {
        question: "Do we have Nkrumah Hall in the College?",
        choices: ["Yes","No"],
        answer: "Yes"
    },
    {
        question:"What time do lectures normally start in the day?",
        choices:["9:30 Am", "8:30 Am", "7:00 Am"],
        answer:"7:00 Am"
    },
    {
        question:"Is there a Super Market in the college?",
        choices:["Yes", "No"],
        answer:"No"
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        const choice = document.createElement("button");
        choice.classList.add("choice");
        choice.textContent = questions[currentQuestion].choices[i];
        choice.setAttribute("onclick", "checkAnswer(this)");

        choicesElement.appendChild(choice);
    }

    scoreElement.textContent = "Score: " + score;
}

function checkAnswer(choice) {
    if (choice.textContent === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.querySelector(".container");
    container.innerHTML = "<p>Your score: " + score + "/" + questions.length + "</p><h1>Quiz Completed,send Aloko a screenshoot!</h1>";
container.style.backgroundColor='#404';
container.style.color='#fff';
container.style.borderColor='#00f';
container.style.borderStyle='dotted';
}

displayQuestion();