// Questions will be asked
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
    a: [{ text: "443", isCorrect: true, isSelected: false },
    { text: "21", isCorrect: false },
    { text: "80", isCorrect: false },
    { text: "3306", isCorrect: false }
    ]
    },
    {
    id: 2,
    q: "What is the Default port number of MySQL",
    a: [{ text: "8080", isCorrect: false },
    { text: "22", isCorrect: false },
    { text: "21", isCorrect: false },
    { text: "3306", isCorrect: true }
    ]
    },
   
    
        {
            id: 3,
             q: "What is the meaning of CSS ?",
             a: [
                { text: "Cascading Style Sheet", isCorrect: true },
                { text: "College Scholarship Service", isCorrect: false },
                { text: "Certified Customer Service", isCorrect: false },
                { text: "Central Superior service", isCorrect: false }
            ]
        },

        {
            id: 4,
            q: "Which of the following is NOT a core technology of the World Wide Web?",
            a: [
                { text: "HTML", isCorrect: false },
                { text: "HTTP", isCorrect: false },
             { text: "FTP", isCorrect: true },
                { text: "CSS", isCorrect: false }
            ]
        
        },
    
        {
            id: 5,
            q: "Which CSS property is used to change the text color of an element?",
            a: [
                { text: "Color", isCorrect: true },
                { text: "Font-Color", isCorrect: false },
                { text: "Text-Color", isCorrect: false },
                { text: "Fg-Color", isCorrect: false }
            ]
        },

        {
            id: 6,
            q: "What is the primary function of HTML?",
            a: [
                { text: "Styling web pages", isCorrect: false },
                { text: "Scripting web pages", isCorrect: false },
                { text: "Structuring and presenting content on web pages", isCorrect: true },
                { text: "Communicating with web servers", isCorrect: false }
            ]
        
            },

        {
            id: 7,
            q: "What is the purpose of JavaScript?",
            a: [
                { text: "To design the layout of a web page", isCorrect: false },
                { text: "To add interactivity and dynamic behavior to web pages", isCorrect: true },
                { text: "To store and retrieve data from a database", isCorrect: false },
                { text: "To transfer data between a client and a server", isCorrect: false }
            ]
        },
        
        {
            id: 8,
            q: "Which HTTP method is used to retrieve data from a server?",
            a: [
                { text: "POST", isCorrect: false },
                { text: "GET", isCorrect: true },
                { text: "PUT", isCorrect: false },
                { text: "DELETE", isCorrect: false }
            ]
        },

        {
            id: 9,
            q: "What is the role of a web server?",
            a: [
                { text: "To display web pages in a browser", isCorrect: false },
                { text: "To process client requests and send responses", isCorrect: true },
                { text: "To store and manage web pages", isCorrect: false },
                { text: "To create dynamic web content", isCorrect: false }
            ]
        },

        {
            id: 10,
            q: "Which programming language is often used for server-side scripting?",
            a: [
                { text: "Python", isCorrect: true },
                { text: "JavaScript", isCorrect: false },
                { text: "CSS", isCorrect: false },
                { text: "HTML", isCorrect: false }
            ]
        },

        {
            id: 11,
            q: "What is a cookie?",
            a: [
                { text: "A small text file stored on a user's computer by a website", isCorrect: true },
                { text: "A type of web server", isCorrect: false },
                { text: "A programming language", isCorrect: false },
                { text: "A network protocol", isCorrect: false }
            ]
        },

        {
            id: 12,
            q: "What is the purpose of a firewall",
            a: [
                { text: "To protect a network from unauthorized access", isCorrect: true },
                { text: "To speed up internet connections", isCorrect: false },
                { text: "To encrypt data", isCorrect: false },
                { text: "To filter spam emails", isCorrect: false }
            ]
        },

        {
            id: 13,
            q: "What is the difference between HTTP and HTTPS?",
            a: [
                { text: "HTTP is faster than HTTPS", isCorrect: false },
                { text: " HTTPS uses encryption to secure communication", isCorrect: true },
                { text: "HTTP is more secure than HTTPS", isCorrect: false },
                { text: "HTTPS is only used for file transfer", isCorrect: false }
            ]
        },

        {
            id: 14,
            q: "What is the purpose of a database?",
            a: [
                { text: "To store and manage data", isCorrect: true },
                { text: "To display web pages", isCorrect: false },
                { text: "To send emails", isCorrect: false },
                { text: "To encrypt data", isCorrect: false }
            ]
        },

        {
            id: 15,
            q: "What is SQL?",
            a: [
                { text: "A programming language", isCorrect: false },
                { text: "A network protocol", isCorrect: false },
                { text: "A database management system", isCorrect: true },
                { text: "A markup language", isCorrect: false }
            ]
        },

        {
            id: 16,
            q: "What is the concept of RESTful APIs?",
            a: [
                { text: " A type of database", isCorrect: false },
                { text: "A programming language", isCorrect: false },
                { text: "A network protocol", isCorrect: false },
                { text: "A set of rules for designing web services", isCorrect: true }
            ]
        },

        {
            id: 17,
            q: "What is the purpose of a CDN (Content Delivery Network)?",
            a: [
                { text: "To improve website security", isCorrect: false },
                { text: "To create dynamic web content", isCorrect: false },
                { text: "To optimize website performance by distributing content across multiple servers", isCorrect: true },
                { text: " To store large amounts of data", isCorrect: false }
            ]
        },

        {
            id: 18,
            q: "What is the purpose of a URL (Uniform Resource Locator)?",
            a: [
                { text: "To encrypt data", isCorrect: false },
                { text: "To identify a specific resource on the internet", isCorrect: true },
                { text: "To store and manage data", isCorrect: false },
                { text: "To create dynamic web content", isCorrect: false }
            ]
        },

        {
            id: 19,
            q: "What is the difference between a static and a dynamic website?",
            a: [
                { text: "Static websites are created using HTML, while dynamic websites are created using JavaScript.", isCorrect: false },
                { text: "Static websites are generated on the fly, while dynamic websites are pre-generated.", isCorrect: false },
                { text: " Static websites have fixed content, while dynamic websites can change based on user input or other factors.", isCorrect: true },
                { text: "There is no difference between static and dynamic websites.", isCorrect: false }
            ]
        },
]
var currentQuestionIndex = 0;
    // Set start
    var start = true;
    let score = 0;
    // Iterate
    function iterate(id) {
    // Getting the result display section
    var result = document.getElementsByClassName("result"); 
    result[0].innerText = "";
    // Getting the question
    const question = document.getElementById("question");
     // Setting the question text
     question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1'); 
    const op2 = document.getElementById('op2'); 
    const op3 = document.getElementById('op3'); 
    const op4 = document.getElementById('op4');
    
    // Providing option text
    op1.innerText = Questions[id].a[0].text; 
    op2.innerText = Questions [id].a[1].text; 
    op3.innerText = Questions [id].a[2].text; 
    op4.innerText = Questions [id].a[3].text;
   
    // Providing the true or false value to the options 
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect; 
    op3.value = Questions[id].a[2].isCorrect; 
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue"; 
    
    selected = op1.value;
})
    // Show selection for op2 
    op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow"; 
    op3.style.backgroundColor = "lightskyblue"; 
    op4.style.backgroundColor = "lightskyblue"; 

    selected = op2.value;
})
    // Show selection for op3
    op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue"; 
    op2.style.backgroundColor = "lightskyblue"; 
    op3.style.backgroundColor = "lightgoldenrodyellow"; 
    op4.style.backgroundColor = "lightskyblue"; 

    selected =op3.value;
    })
        // Show selection for op4
    op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue"; 
    op2.style.backgroundColor = "lightskyblue"; 
    op3.style.backgroundColor = "lightskyblue"; 
    op4.style.backgroundColor = "lightgoldenrodyellow"; 
    selected = op4.value;
})
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    // Evaluate method
    evaluate[0].addEventListener("click", () => { 
        if (selected == "true") {
            result[0].innerHTML = "True"; 
            result[0].style.color = "green";
            score++;
    } else {
   
    result[0].innerHTML = "False"; 
    result[0].style.color = "red";
    }
})
}
    if (start) {
    iterate("0");
}
   // Previous button and method
    // Next button and method
    const next = document.getElementsByClassName('next')[0]; 
    var id = 0;

    next.addEventListener("click", () => {
    start = false; 
    if (id < Questions.length - 1 ) { 
        id++; 
        iterate(id); 
        console.log(id);
    }else{
        document.write("Quiz is finished ! Your Total score is : " +score+"/" + Questions.length);
    }
})

const prev = document.getElementsByClassName('prev')[0]; 
var id = 0;

prev.addEventListener("click", () => {
if (id > 0 ) { 
    id--; 
    iterate(id); 
    console.log(id);
}
})

       // question.innerText = Questions [id].q;