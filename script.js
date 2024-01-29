
window.addEventListener('load', () => {
  const questions = [
      {
          "question": "What is the result of the following arithmetic operation in JavaScript: (3 + 5) * 4 - 6?",
          "options": ["26", "32", "30", "28"],
          "answer": "1"
      },
      {
          "question": "What is the value of x after this code executes: 'let x = 5; if (x > 3) { x = 10; } else { x = 0; }'?",
          "options": ["5", "10", "3", "0"],
          "answer": "2"
      },
      {
          "question": "What value will 'result' hold after this switch case: 'let fruit = 'apple'; let result; switch (fruit) { case 'banana': result = 'yellow'; break; case 'apple': result = 'red'; break; default: result = 'unknown'; }'?",
          "options": ["'yellow'", "'red'", "'apple'", "'unknown'"],
          "answer": "2"
      },
      {
          "question": "What will be the output of 'greet('Alice')' for the function: 'function greet(name) { return 'Hello, ' + name + '!'; }'?",
          "options": ["'Hello, Alice!'", "'Hello, name!'", "'Hello, ' + name + '!'", "It will throw an error"],
          "answer": "1"
      },
      {
          "question": "Given the code: 'let num = 7; let result; if (num > 5) { if (num < 10) { result = 'Between 5 and 10'; } else { result = 'Greater than 10'; } } else { result = 'Less than or equal to 5'; }', what is the value of 'result'?",
          "options": ["'Less than or equal to 5'", "'Between 5 and 10'", "'Greater than 10'", "undefined"],
          "answer": "2"
      },
      {
          "question": "What will 'calculate(3, 7)' return for the function: 'function calculate(a, b) { return (a * b) + (a / b); }'?",
          "options": ["21.4285", "22", "24", "21"],
          "answer": "1"
      },
      {
          "question": "What does the expression '2 === '2'' evaluate to in JavaScript?",
          "options": ["true", "false", "undefined", "SyntaxError"],
          "answer": "2"
      },
      {
          "question": "What is the output of 'console.log(typeof null)' in JavaScript?",
          "options": ["'object'", "'null'", "'undefined'", "'number'"],
          "answer": "1"
      },
      {
          "question": "Which option correctly calls the function defined as 'function sum(x, y) { return x + y; }'?",
          "options": ["'sum(5, 7)'", "'call(sum, 5, 7)'", "'sum.call(5, 7)'", "'new sum(5, 7)'"],
          "answer": "1"
      },
      {
          "question": "What is the result of '5 + '3'' in JavaScript?",
          "options": ["8", "'53'", "'83'", "TypeError"],
          "answer": "2"
      },
      {
          "question": "What is the output of 'let x = 1; console.log(++x);' in JavaScript?",
          "options": ["1", "2", "undefined", "SyntaxError"],
          "answer": "2"
      },
      {
          "question": "What will 'console.log(3 > 2 > 1)' output in JavaScript?",
          "options": ["true", "false", "undefined", "SyntaxError"],
          "answer": "2"
      },
      {
          "question": "What is the value of 'x' after 'let x = '5'; x = x++;'?",
          "options": ["5", "6", "'5'", "'6'"],
          "answer": "1"
      },
      {
          "question": "What is the output of 'let x = 'Hello'; console.log(x[0]);' in JavaScript?",
          "options": ["'H'", "'e'", "'Hello'", "undefined"],
          "answer": "1"
      },
      {
          "question": "What does the code 'let x = [1, 2, 3]; x[10] = 11; console.log(x.length);' output?",
          "options": ["3", "11", "10", "undefined"],
          "answer": "3"
      },
      {
          "question": "What will be the output of the following function call: 'console.log(Math.max());'?",
          "options": ["Infinity", "-Infinity", "NaN", "0"],
          "answer": "2"
      },
      {
          "question": "What is the result of '4 / 0' in JavaScript?",
          "options": ["0", "4", "Infinity", "NaN"],
          "answer": "3"
      },
      {
          "question": "What is the value of 'x' after the code 'let x = !'false';' is executed in JavaScript?",
          "options": ["true", "false", "'false'", "'true'"],
          "answer": "1"
      },
      {
          "question": "What does the code 'let x = 1; x <<= 2;' result in for the value of 'x'?",
          "options": ["1", "2", "4", "8"],
          "answer": "3"
      },
      {
          "question": "What is the output of the code 'let a = [1, 2, 3]; let b = [1, 2, 3]; console.log(a == b);'?",
          "options": ["true", "false", "undefined", "TypeError"],
          "answer": "2"
      }
  ]
  
  const topicBriefing = [
    {
      topic: [
      
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
    if(topicBriefing[0].topic.length > 0){
      await displayMessage(topicBriefing[0].topic[topicNum], "topicText", 155, typeWords);
    }
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