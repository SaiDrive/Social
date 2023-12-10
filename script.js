
window.addEventListener('load', () => {
  const questions = [
    {
      question: "Which of the following is a primitive data type in JavaScript?",
      options: [
        "Object",
        "Array",
        "String",
        "Function"
      ],
      answer: "3"
    },
    {
      question: "What keyword is used to declare a block scope variable in JavaScript?",
      options: [
        "let",
        "var",
        "const",
        "set"
      ],
      answer: "1"
    },
    {
      question: "How do you check the type and value of a variable in JavaScript?",
      options: [
        "typeof",
        "type",
        "val()",
        "checkType()"
      ],
      answer: "1"
    },
    {
      question: "Which function is used to parse a string to an integer in JavaScript?",
      options: [
        "int()",
        "parseInteger()",
        "parseInt()",
        "toInteger()"
      ],
      answer: "3"
    },
    {
      question: "What symbol is used for multiline comments in JavaScript?",
      options: [
        "//",
        "/* */",
        "#",
        "--"
      ],
      answer: "2"
    },
    {
      question: "Which method is used to add elements to the end of an array in JavaScript?",
      options: [
        "push()",
        "add()",
        "append()",
        "addToEnd()"
      ],
      answer: "1"
    },
    {
      question: "How do you write 'Hello, World!' in an alert box using JavaScript?",
      options: [
        "alertBox('Hello, World!');",
        "alert('Hello, World!');",
        "msgBox('Hello, World!');",
        "message('Hello, World!');"
      ],
      answer: "2"
    },
    {
      question: "What operator is used for strict equality comparison in JavaScript?",
      options: [
        "==",
        "===",
        "!=",
        "!=="
      ],
      answer: "2"
    },
    {
      question: "Which loop is used to iterate through an array in JavaScript?",
      options: [
        "for-in loop",
        "while loop",
        "do-while loop",
        "for loop"
      ],
      answer: "4"
    },
    {
      question: "What keyword is used to prevent variables from being modified in JavaScript?",
      options: [
        "const",
        "var",
        "let",
        "freeze"
      ],
      answer: "1"
    }
  ];
  
  const topicBriefing = [
    {
      topic: [
        "Primitive data types in JavaScript include strings, numbers, booleans, null, undefined, and symbols.",
        "Block scope variables are declared using 'let' in JavaScript.",
        "The 'typeof' operator is used to check the type and value of a variable in JavaScript.",
        "The 'parseInt()' function is used to parse a string to an integer in JavaScript.",
        "Comments in JavaScript start with '//' for single-line comments and '/* */' for multi-line comments.",
        "The 'push()' method is used to add elements to the end of an array in JavaScript.",
        "To display 'Hello, World!' in an alert box in JavaScript, you use the 'alert('Hello, World!');' function.",
        "The '===' operator is used for strict equality comparison in JavaScript.",
        "The 'for' loop is commonly used to iterate through an array in JavaScript.",
        "In JavaScript, the 'const' keyword is used to create constants that cannot be modified."
      ]
    }
  ];  
  

  const welcomeMessage = ["Welcome to the Offsprings Assesment Quizz"]
  const intructions = [
    `There are ${questions.length} questions in total.`,
    "You can only proceed to the next question once you answer the current question correctly.",
    "At the end of learning, you can see the number of attempts you took to understand the concept",
    "Start the quiz and have fun!",
    "Play the music below before clicking start (Optional)"
  ]
  const login = "Hi There, Please enter your User Name and Password below '↓' ";
  const endMessage = " You are Awesome";
  const typingSpeed = 1;
  const mainDiv = document.querySelector('#root');
  const startButton = document.querySelector('#startButton-1');
  let answerKey = 0, topicNum = 0, attemptCounter = 0;

  startButton.addEventListener('click', async event => {
    disableElementDisplay("audio-1", "startButton-1");
    await startQuiz();
  })

  const submitButton = document.querySelector('#submit-1');
  const loginButton = document.querySelector('#login');

  loginButton.addEventListener('click', async () => {
    await getUserDetail();
  });

  submitButton.addEventListener('click', async () => {
    await startAndValidateQuiz();
  });

  const startAndValidateQuiz = async () => {
    // This function check user input and updated key value and allows to continue the quiz only if the answer is correct, also calculate the number of submit clicks count
    const inputField = document.querySelector('#input-1');
        userInput = inputField.value.toLowerCase();
        attemptCounter += 1;
        if (userInput === answerKey){
            disableElementDisplay("invalidAnswer");
            clearDisplay();
            topicNum =  topicNum + 1;
            if (topicNum < questions.length){
                await continueQuiz(topicNum);
            }
            else {
              disableElementDisplay("input-1", "submit-1");
              await displayMessage(`${endMessage}, you have taken "${attemptCounter - questions.length}" more attempts to finish it`);
              await displayMessage('Designed and developed for "OffSprings" with Love..');
            }
        }
        else {
          enableElementDisplay("invalidAnswer");
        }
        inputField.value = "";
  }

  const displayMessage = async (message, className = "text", speed = typingSpeed, typeFunc = typeText) => {
    // This func takes two arguments a message and a className to add and create a new elemnt inside the root div
    const welcomeMessageElement = document.createElement('p');
    welcomeMessageElement.classList.add(className);
    mainDiv.appendChild(welcomeMessageElement);
    await typeFunc(welcomeMessageElement, message, speed);
  } 
  const loginSignUp = async () => {
    await displayMessage(login, "loginSigUp", 100, typeWords);
    await enableElementDisplay("userName", "password");
    await enableElementDisplay('login');
  }
  const getUserDetail = async () => {
    const userName = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;;
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userName, password})
    })
    const data = await response.json();
    if (data){
      clearDisplay();
      disableElementDisplay("userName", "password");
      disableElementDisplay("login");
      console.log(data.phoneNumber);
      console.log(data);
      introFunc();
    } else {
      alert("Invalid Password");
    }
  }
  const introFunc = async () =>{
    // This function prints Welcome and Instruction messages and enables start and audio player display
    await displayArrayText(welcomeMessage);
    await displayArrayText(intructions);
    enableElementDisplay("audio-1", "startButton-1");
  }   
  
  const displayArrayText = async (textArray) =>{
    // This function takes an array element and prints the elements by looping and passing every element in it to displayMessage function
    for (let i = 0; i < textArray.length; i++){
      await displayMessage(textArray[i], "text", 100, typeWords);
   }
  }

  const continueQuiz = async (topicNum) => {
    //This function takes a topic number and pass the value to start quiz function to contiue the quiz with respective topic number
    await disableElementDisplay("input-1", "submit-1");
    await startQuiz(topicNum);
  }

  const displayTopic = async (topicNum) => {
    // This function takes topic array index and display the topic with respective index value also, adds a CSS class to it and speed of the topic
   await displayMessage(topicBriefing[0].topic[topicNum], "topicText", 155, typeWords);
  }

  const displayQuestion = async (questNum) => {
    // This function takes questions array index and display the question with respective index value also, adds a CSS class to it 
    await displayMessage(`(${questNum+1} / ${questions.length}) ${questions[questNum].question}`, "questionText");
  }

  const displayOptions = async (optionsNum) => {
    // This function takes options array index and display options with its respective index number
    for (let i = 0; i < questions[optionsNum].options.length; i++){
      await displayMessage(`${i+1}) ${questions[optionsNum].options[i]}`);
    }
  }

  const getTheKey = async (questNum) => {
    //This function get the value of answer in given questions array and assigns its value to answerKey
    answerKey = questions[questNum].answer.toLowerCase();
  }

  const startQuiz =  async (topicNum = 0) => {
    // This function takes topicNumber as an argument and displays the topic, question, and options synchronously, also update the "key" Value
      clearDisplay();
      await displayTopic(topicNum);
      await displayQuestion(topicNum);
      await displayOptions(topicNum);
      await getTheKey(topicNum);
      await enableElementDisplay("input-1", "submit-1");
      console.log(answerKey);
  }

  const clearDisplay = async () => {
    // This func clears all the "p elements" by looping and reseting the p nodes in the entire DOM 
    const pElements = document.querySelectorAll('p');
    pElements.forEach(element => mainDiv.removeChild(element));
    console.log("Functioning")
  }

  const enableElementDisplay = async (id1, id2 = "null") => {
     //This func takes either one or two Id's of an element as arguments and enable its display.
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = 'block';
    element2.style.display = 'block';
  }

  const disableElementDisplay = async (id1, id2 =  "null") => {
    //This func takes either one or two Id's of an element as arguments and hide its display.
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = 'none';
    element2.style.display = 'none';
  }

  const typeText = async (pElement, text, speed) => {
    //This function takes an HTML element, a string, and speed as arguments and creates a typing effect with the assigned speed in the pElement
    return new Promise(resolve => {
      let i = 0;
      const typing = setInterval(() => {
        pElement.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
          clearInterval(typing);
          resolve();
        }
      }, speed);
    });
  };

const typeWords = async (pElement, text, speed) => {
//This function takes an HTML element, a string, and speed as arguments and creates a typing word effect with the assigned speed in the pElement
return new Promise(resolve => {
let i = 0;
const typing = setInterval(() => {
const wordArrary = text.split(' ');
pElement.textContent += wordArrary[i] + " ";
i++;
if (i > wordArrary.length -1) {
clearInterval(typing);
resolve();
}
}, speed);
});
};

const main = async () =>{
//loginSignUp();
introFunc();
}

main();
  
})