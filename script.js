
window.addEventListener('load', () => {
  const questions = [
    {
    question: "What is a database management system (DBMS)?",
    options: [
        "A hardware component of a computer.",
        "A programming language used for creating websites.",
        "Software that allows users to create, manage, and manipulate databases.",
        "A type of spreadsheet software."
    ],
    answer: "3"
    },
    {
    question: "What is a SQL query?",
    options: [
        "A command used to search for files on a computer.",
        "A mathematical formula used in calculations.",
        "A language used to communicate with a database and retrieve data.",
        "A type of data structure."
    ],
    answer: "3"
    },
    {
    question: "What is a SELECT statement in SQL used for?",
    options: [
        "Inserting new data into a table.",
        "Updating existing data in a table.",
        "Deleting data from a table.",
        "Retrieving data from a table."
    ],
    answer: "4"
    },
    {
    question: "What is a WHERE clause in SQL?",
    options: [
        "A keyword used to specify the table to query.",
        "A keyword used to sort the query results.",
        "A keyword used to filter the query results based on a condition.",
        "A keyword used to join multiple tables together."
    ],
    answer: "3"
    },
    {
    question: "What is a primary key in SQL?",
    options: [
        "A unique identifier for a table's column.",
        "A type of data validation.",
        "A command used to create a new table.",
        "A keyword used to group data in a table."
    ],
    answer: "1"
    },
    {
    question: "What is the purpose of the INSERT statement in SQL?",
    options: [
        "To retrieve data from a table.",
        "To update existing data in a table.",
        "To delete data from a table.",
        "To insert new data into a table."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the UPDATE statement in SQL?",
    options: [
        "To retrieve data from a table.",
        "To insert new data into a table.",
        "To delete data from a table.",
        "To update existing data in a table."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the DELETE statement in SQL?",
    options: [
        "To retrieve data from a table.",
        "To insert new data into a table.",
        "To delete data from a table.",
        "To update existing data in a table."
    ],
    answer: "3"
    },
    {
    question: "What is a JOIN operation in SQL used for?",
    options: [
        "To retrieve data from multiple tables based on a related column.",
        "To sort the data in a table.",
        "To filter the data in a table based on a condition.",
        "To group the data in a table based on a column."
    ],
    answer: "1"
    },
    {
    question: "What is a foreign key in SQL?",
    options: [
        "A type of data validation.",
        "A command used to create a new table.",
        "A keyword used to join multiple tables together.",
        "A column in a table that refers to the primary key of another table."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the ORDER BY clause in SQL?",
    options: [
        "To insert new data into a table.",
        "To update existing data in a table.",
        "To delete data from a table.",
        "To sort the query results based on a column."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the GROUP BY clause in SQL?",
    options: [
        "To retrieve data from multiple tables based on a related column.",
        "To sort the data in a table.",
        "To filter the data in a table based on a condition.",
        "To group the data in a table based on a column."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the HAVING clause in SQL?",
    options: [
        "To filter the data in a table based on a condition.",
        "To sort the data in a table.",
        "To group the data in a table based on a column.",
        "To retrieve data from multiple tables based on a related column."
    ],
    answer: "1"
    },
    {
    question: "What is a subquery in SQL?",
    options: [
        "A command used to create a new table.",
        "A query nested inside another query.",
        "A keyword used to join multiple tables together.",
        "A type of database storage structure."
    ],
    answer: "2"
    },
    {
    question: "What is the purpose of the LIMIT clause in SQL?",
    options: [
        "To insert new data into a table.",
        "To update existing data in a table.",
        "To delete data from a table.",
        "To limit the number of rows returned by a query."
    ],
    answer: "4"
    },
    {
    question: "What is the purpose of the DISTINCT keyword in SQL?",
    options: [
        "To retrieve data from multiple tables based on a related column.",
        "To sort the data in a table.",
        "To filter the data in a table based on a condition.",
        "To remove duplicate values from the query results."
    ],
    answer: "4"
    }
];

const topicBriefing = [
    {
        topic: [
            "A database management system (DBMS) is software that allows users to create, manage, and manipulate databases.",
            "A SQL query is a command used to communicate with a database and retrieve data.",
            "The SELECT statement is used to retrieve data from a table in SQL.",
            "The WHERE clause is used to filter the query results based on a condition in SQL.",
            "A primary key is a unique identifier for a table's column.",
            "The INSERT statement is used to insert new data into a table.",
            "The UPDATE statement is used to update existing data in a table.",
            "The DELETE statement is used to delete data from a table.",
            "A JOIN operation is used to retrieve data from multiple tables based on a related column.",
            "A foreign key is a column in a table that refers to the primary key of another table.",
            "The ORDER BY clause is used to sort the query results based on a column in SQL.",
            "The GROUP BY clause is used to group the data in a table based on a column in SQL.",
            "The HAVING clause is used to filter the data in a table based on a condition in SQL.",
            "A subquery is a query nested inside another query in SQL.",
            "The LIMIT clause is used to limit the number of rows returned by a query in SQL.",
            "The DISTINCT keyword is used to remove duplicate values from the query results in SQL."
        ]
    }
];


  const welcomeMessage = ["Hi, this is an Interactive Learning Platform, with vintage looks and modern tech combined to give you the simple and clean learning experience"]
  const intructions = [
    "Read each question carefully and choose the correct answer.",
    "The topic and the questions are curated in such a way as to make them easier to understand for a 12-year-old kid.",
    "There are 5 questions in total.",
    "You can only proceed to the next question once you answer the current question correctly.",
    "At the end of learning, you can see the number attempts you took to understand the concept",
    "Enjoy the learning",
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

const main = () =>{
  introFunc();
}

main();
  
})