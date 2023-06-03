
window.addEventListener('load', () => {
  const questions = [
    {
    question: 'What is inflation?',
    options: ["A situation where prices of things keep going up over time.",
    "A situation where prices of things keep going down over time.",
    "A situation where prices of things stay the same over time.",
    "A situation where more things are produced over time."],
    answer: "1"
    },
    {
    question: "How do we measure inflation?",
    options: ["By looking at how many people are working in an economy.",
    "By checking how much money is being exchanged in an economy.",
    "By comparing the prices of things in a market.",
    "By counting how many goods are being imported or exported."],
    answer: "3"
    },
    {
    question: "What happens to the value of money when there is inflation?",
    options: ["It stays the same.",
    "It increases.",
    "It goes up and down randomly.",
    "It decreases."],
    answer: "4"
    },
    {
    question: "How does inflation affect our lives?",
    options: ["It makes things more affordable for us.",
    "It has no effect on our lives.",
    "It makes things more expensive for us.",
    "It only affects us temporarily."],
    answer: "3"
    },
    {
    question: "What can cause inflation?",
    options: ["When there is too much money available and not enough things to buy.",
    "When there is not enough money and not enough things to buy.",
    "When there is not enough money but lots of things to buy.",
    "When there is too much money and lots of things to buy."],
    answer: "1"
    }
    ]

  const topicBriefing = [
    {
      topic: [
        "Inflation happens when prices of things keep going up over time. It means that the same amount of money can buy fewer things than before.",
        "We measure inflation by comparing the prices of things in a market. We look at how much things cost compared to before.",
        "When there is inflation, the value of money goes down. This means we can't buy as much with the same amount of money.",
        "Inflation can make things more expensive for us, so our money doesn't go as far as it used to.",
        "Inflation can be caused by there being too much money available and not enough things to buy."
        ]
    }
  ]
  const welcomeMessage = ["Hi, this is an Interactive Learning Platform, with vintage looks and modern tech combined to give you the simple and clean learning experience"]
  const intructions = [
    "Read each question carefully and choose the correct answer.",
    "The topic and the questions are curated in such a way as to make them easier to understand for a 12-year-old kid.",
    "There are 5 questions in total.",
    "You can only proceed to the next question once you answer the current question correctly.",
    "At the end of learning, you can see the number attempts you took to understand the concept",
    "Enjoy learning about inflation!",
    "Start the quiz and have fun!",
    "Play the music below before clicking start (Optional)"
  ]

  const endMessage = " You're Are Awesome";
  const typingSpeed = 1;
  const mainDiv = document.querySelector('#root');
  const startButton = document.querySelector('#startButton-1');
  let answerKey = 0, topicNum = 0, attemptCounter = 0;

  startButton.addEventListener('click', async event => {
    disableElementDisplay("audio-1", "startButton-1");
    await startQuiz();
  })

  const submitButton = document.querySelector('#submit-1');
  submitButton.addEventListener('click', async () => {
    await startAndValidateQuiz();
  });

  const startAndValidateQuiz = async () => {
    // This function check user input and updated key value and allows to continue the quiz only if the answer is correct, also calculate the number of submit clicks count
    const inputField = document.querySelector('#input-1');
        userInput = inputField.value;
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
              await displayMessage('Designed and developed by "Digician" with Love..');
            }
        }
        else {
          enableElementDisplay("invalidAnswer");
        }
  }

  const displayMessage = async (message, className = "text", speed = typingSpeed) => {
    // This func takes two arguments a message and a className to add and create a new elemnt inside the root div
    const welcomeMessageElement = document.createElement('p');
    welcomeMessageElement.classList.add(className);
    mainDiv.appendChild(welcomeMessageElement);
    await typeText(welcomeMessageElement, message, speed);
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
      await displayMessage(textArray[i], "text", 10);
   }
  }

  const continueQuiz = async (topicNum) => {
    //This function takes a topic number and pass the value to start quiz function to contiue the quiz with respective topic number
    await disableElementDisplay("input-1", "submit-1");
    await startQuiz(topicNum);
  }

  const displayTopic = async (topicNum) => {
    // This function takes topic array index and display the topic with respective index value also, adds a CSS class to it and speed of the topic
   await displayMessage(topicBriefing[0].topic[topicNum], "topicText", 125);
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
    answerKey = questions[questNum].answer;
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

const main = () =>{
  introFunc();
}

main();
  
})