const Questions = [
    {
        id: 0,
        q: "What is the full meaning of the acronym HTML?",
        a: [
            { text: "Hyper-Text Transfer Protocol", isCorrect: false },
            { text: "Hyper-Text Pre-processor", isCorrect: false },
            { text: "Hyper-text Markup Language", isCorrect: true },
            { text: "Hyper-text Transfer Protocol-Secured", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: "What is the default port number of HTTPS?",
        a: [
            { text: "443", isCorrect: true },
            { text: "21", isCorrect: false },
            { text: "80", isCorrect: false },
            { text: "3306", isCorrect: false }
        ]
    },
    {
        id: 2,
        q: "What is the Default port number of MySQL",
        a: [
            { text: "8080", isCorrect: false },
            { text: "22", isCorrect: false },
            { text: "21", isCorrect: false },
            { text: "3306", isCorrect: true }
        ]
    },
    // Add new questions here dynamically

   
        {
            id: 3,
            q: "What is the primary color of the sky?",
            a: [
                { text: "Red", isCorrect: false },
                { text: "Green", isCorrect: false },
                { text: "Blue", isCorrect: true },
                { text: "Yellow", isCorrect: false }
            ]
        }
    
];

var currentQuestionIndex = 0; // Start with the first question

function iterate(id) {
    // Get the result display section
    const result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Get the question
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;

    // Get the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Set option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Set the correct/incorrect values
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    let selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    });

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    });

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    });

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    });

    // Get the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected === "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    });
}

// Initialize the quiz with the first question
iterate(currentQuestionIndex);

// Next button and method
const next = document.getElementsByClassName('next')[0];

next.addEventListener("click", () => {
    if (currentQuestionIndex < Questions.length - 1) {
        currentQuestionIndex++;
        iterate(currentQuestionIndex);
    } else {
        console.log("No more questions.");
    }
});

// Previous button and method (optional)
const prev = document.getElementsByClassName('prev')[0];

prev.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        iterate(currentQuestionIndex);
    } else {
        console.log("You are at the first question.");
    }
});