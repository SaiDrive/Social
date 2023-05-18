

window.addEventListener('load', () => {
  const questions = [
    {
      question: 'What does inflation refer to?',
      options: ["A sustained decrease in the general price level of goods and services in an economy over a period of time.",
        "A sustained increase in the general price level of goods and services in an economy over a period of time.", 
        "A one-time increase in the general price level of goods and services in an economy.", 
        "A sustained increase in the production of goods and services in an economy."],
      answer: "2"
    },
    {
      question: "How is inflation measured?",
      options: ["By the percentage rate of change in the GDP of an economy.",
        "By the percentage rate of change in the employment rate of an economy.",
        "By the percentage rate of change in the price index, such as the Consumer Price Index (CPI) or the Producer Price Index (PPI).", 
        "By the percentage rate of change in the currency exchange rate of an economy."],
      answer: "3"
    },
    {
      question: "What happens to the value of money over time due to inflation?",
      options: ["It remains the same.", 
        "It increases.",
        "It fluctuates randomly.",
        "It decreases."],
      answer: "4"
    },
    {
      question: "What is the impact of inflation on the standard of living in an economy?",
      options: ["It increases the standard of living for the people in the affected economy.", 
        "It has no impact on the standard of living in the affected economy.",
        "It decreases the standard of living for the people in the affected economy.", 
        "It has a temporary impact on the standard of living in the affected economy."],
      answer: "3"
    },
    {
      question: "What are some factors that can cause inflation?",
      options: ["An increase in the money supply and a decrease in the supply of goods and services.",
        "A decrease in the money supply and an increase in the supply of goods and services.",
        "A decrease in the money supply and a decrease in the supply of goods and services.", 
        "An increase in the money supply and an increase in the supply of goods and services."],
      answer: "1"
    }
  ]

  

  const topicBriefing = [
    {
      topic: [
      "Inflation refers to the sustained increase in the general price level of goods and services in an economy over a period of time. ",
      "It is measured by the percentage rate of change in the price index, such as the Consumer Price Index (CPI) or the Producer Price Index (PPI).",
      "Inflation erodes the purchasing power of a currency and reduces the value of money over time." ,
      "This means that the same amount of money can buy fewer goods and services than it could before, leading to a decrease in the standard of living for the people in the affected economy.",
      "Inflation can be caused by factors such as an increase in the money supply, a decrease in the supply of goods and services, or changes in the level of demand for goods and services. "
      ]
    }
  ]


  const welcomeMessage = "Hello Welcome, to the Test.";
  const instructions = "Here the boring test made awsome! just for you ";
  const introduction = "Hi! What is your name?"
  const endMessage = " You're Are Awesome.. you learned it"
  const errorMessage = "You're smart enough to answer, try again"
  const typingSpeed = 1;
  const mainDiv = document.querySelector('#root');
  const startButton = document.querySelector('#startButton-1');

  startButton.addEventListener('click', async event => {
    startButton.style.display = "none";
    await startQuiz();
  })

  const displayMessage = async (message, className = "text", speed = typingSpeed) => {
    // This func takes two arguments a message and a className to add and create a new elemnt inside the root div
    const welcomeMessageElement = document.createElement('p');
    welcomeMessageElement.classList.add(className);
    mainDiv.appendChild(welcomeMessageElement);
    await typeText(welcomeMessageElement, message, speed);
  } 


  const validateInput = async () => {
    return new Promise((resolve, reject) => {
      const submitButton = document.querySelector('#submit-1');
      submitButton.addEventListener('click', () => {
        const inputField = document.querySelector('#input-1')
        let inputAnswer = inputField.value;
       if (inputAnswer !== " "){
          console.log("Functioning");
          console.log(typeof inputAnswer);
          console.log("Functioning");
          clearDisplay(inputAnswer);
          disableElementDisplay("submit-1", "input-1");
          disableElementDisplay("invalidAnswer");
          resolve(inputAnswer);
        } 
        else{
         enableElementDisplay('invalidAnswer');
          console.log("tryAgain")
        }
          
      })
    });
  } 



  const displayTopics = async () => {
    for (let i = 0; i < topicBriefing.length; i++){
      for (let j = 0; j < topicBriefing[i].topic.length; j++){
        await displayMessage(topicBriefing[i].topic[j], 'topicText', typingSpeed);
        await displayMessage(`(${j+1} / ${topicBriefing[i].topic.length}) ${questions[j].question}`);
        for (let k = 0; k < questions[j].options.length; k++){
          await displayMessage(`${k+1})  ${questions[j].options[k]}`)
        }
        await enableElementDisplay("submit-1", "input-1");
        await validateInput();
        disableElementDisplay("invalidAnswer");
      }
    }
  }

  const startQuiz =  async () => {
      await displayTopics();
      await displayMessage(endMessage); 
  }

  const clearDisplay = () => {
    // This func clears all the "p elements" by looping and reeseting the p nodes in the entire DOM 
    const pElements = document.querySelectorAll('p');
    pElements.forEach(element => mainDiv.removeChild(element));
    console.log("Functioning")
  }

  const enableElementDisplay = async (id1, id2 = "null") => {
    //This func takes a Id of an element as arguments and toggle between its display none and block.
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = 'block';
    element2.style.display = 'block';
  }

  const disableElementDisplay = async (id1, id2 =  "null") => {
    //This func takes a Id of an element as arguments and toggle between its display none and block.
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = 'none';
    element2.style.display = 'none';
  }

  const typeText = async (pElement, text, speed) => {
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
  

})