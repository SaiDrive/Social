
window.addEventListener('load', () => {
  const questions = [
    {
      question: "Enter the correct order of operations once you hit the search button for a website in a Internet browser",
      options: [
        "Browser contact the DNS server to lookup for Domain Name and find IP address",
        "Browser closes the TCP connection",
        "Browser Start searching the IP address within Browser Cache",
        "Browser download HTML, CSS, Javascript, Images...etc recieved through HTTP response from server and render them as website",
        "DNS resolver recursively lookup for the domain name and finds the IP address",
        "Browser establish a http connection to send request and recieve response",
        "Browser try to establish a TCP connection between the client and server"
      ],
      answer: "3157642"
    },
    {
      question: "What does URL stand for?",
      options: [
        "Universal Resource Link",
        "Uniform Resource Locator",
        "Unified Resource Link",
        "Uniform Resource Link"
      ],
      answer: "2"
    },
    {
      question: "What does the 'scheme' part of a URL specify?",
      options: [
        "File format",
        "Connection protocol",
        "Resource type",
        "Server location"
      ],
      answer: "2"
    },
    {
      question: "What is the purpose of DNS lookup?",
      options: [
        "To encrypt the connection",
        "To establish a TCP connection",
        "To translate domain names to IP addresses",
        "To cache browser data"
      ],
      answer: "3"
    },
    {
      question: "What is the role of the DNS resolver?",
      options: [
        "To establish a TCP connection",
        "To cache browser data",
        "To query the Internet for IP addresses",
        "To send HTTP requests"
      ],
      answer: "3"
    },
    {
      question: "What happens if the IP address is not found in the browser cache?",
      options: [
        "Browser sends an HTTP request",
        "Operating system caches it",
        "Operating system sends a DNS query to the Internet"
      ],
      answer: "3"
    },
    {
      question: "What is the purpose of the TCP connection between the browser and the server?",
      options: [
        "To encrypt data transmission",
        "To establish an encrypted connection",
        "To establish a network round trip",
        "To send HTTP requests"
      ],
      answer: "4"
    },
    {
      question: "What type of connection does modern browsers use to enhance loading speed?",
      options: [
        "Keep-alive connection",
        "SSL-TLS connection",
        "Encrypted connection",
        "One-time connection"
      ],
      answer: "1"
    },
    {
      question: "What complex process is involved when establishing an HTTPS connection?",
      options: [
        "TCP handshake",
        "SSL-TLS handshake",
        "HTTP handshake",
        "DNS lookup"
      ],
      answer: "2"
    },
    {
      question: "What role does the browser play after receiving the server's response?",
      options: [
        "Rendering the HTML content",
        "Encrypting the response",
        "Establishing a new TCP connection",
        "Handling DNS lookup"
      ],
      answer: "1"
    },
    {
      question: "What happens if there are additional resources to load?",
      options: [
        "Browser repeats DNS lookup",
        "Browser sends a new HTTP request",
        "Browser establishes a TCP connection",
        "Browser processes HTML content"
      ],
      answer: "2"
    },
    {
      question: "What is the primary function of HTTP?",
      options: [
        "To establish TCP connections",
        "To render HTML content",
        "To send encrypted data",
        "To send requests and receive responses"
      ],
      answer: "4"
    },
    {
      question: "What do modern browsers do to fetch additional resources?",
      options: [
        "Repeat DNS lookup",
        "Establish a new TCP connection",
        "Process the HTML content",
        "Make new HTTP requests"
      ],
      answer: "4"
    }
    
  ];
  
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