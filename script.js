
window.addEventListener('load', () => {
  const questions = [
  {
    question: "What is encapsulation in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of reusing existing code to create new objects.",
      "A process of representing data and behavior as objects."
    ],
    answer: "1"
  },
  {
    question: "What is inheritance in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of creating new classes from existing classes.",
      "A process of representing data and behavior as objects."
    ],
    answer: "3"
  },
  {
    question: "What is polymorphism in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of reusing existing code to create new objects.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "4"
  },
  {
    question: "What is abstraction in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of creating new classes from existing classes.",
      "A process of representing data and behavior as objects."
    ],
    answer: "1"
  },
  {
    question: "What is a class in OOP?",
    options: [
      "A blueprint for creating objects that defines their properties and methods.",
      "An instance of an object.",
      "A type of variable.",
      "A method of object creation."
    ],
    answer: "1"
  },
  {
    question: "What is an object in OOP?",
    options: [
      "A blueprint for creating objects that defines their properties and methods.",
      "An instance of a class.",
      "A type of variable.",
      "A method of object creation."
    ],
    answer: "2"
  },
  {
    question: "What is a constructor in OOP?",
    options: [
      "A method used to create an object.",
      "A method used to destroy an object.",
      "A method used to access object properties.",
      "A method used to modify object behavior."
    ],
    answer: "1"
  },
  {
    question: "What is method overriding in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of redefining a method in a subclass that is already defined in its superclass.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "3"
  },
  {
    question: "What is method overloading in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of defining multiple methods with the same name but different parameters.",
      "A process of representing data and behavior as objects."
    ],
    answer: "3"
  },
  {
    question: "What is a superclass in OOP?",
    options: [
      "A class that inherits properties and methods from another class.",
      "A class that is inherited by another class.",
      "A class that cannot be instantiated.",
      "A class that defines the blueprint for creating objects."
    ],
    answer: "2"
  },
  {
    question: "What is an interface in OOP?",
    options: [
      "A class that inherits properties and methods from another class.",
      "A class that is inherited by another class.",
      "A class that cannot be instantiated.",
      "A contract that defines the methods a class must implement."
    ],
    answer: "4"
  },
  {
    question: "What is a static method in OOP?",
    options: [
      "A method that can be accessed without creating an instance of a class.",
      "A method that is called automatically when an object is created.",
      "A method that is inherited from a superclass.",
      "A method that is overridden in a subclass."
    ],
    answer: "1"
  },
  {
    question: "What is composition in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of creating new classes from existing classes.",
      "A process of representing data and behavior as objects."
    ],
    answer: "2"
  },
  {
    question: "What is method chaining in OOP?",
    options: [
      "A process of calling multiple methods on an object in a single line of code.",
      "A process of combining multiple objects to form a new object.",
      "A process of reusing existing code to create new objects.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "1"
  },
  {
    question: "What is a getter method in OOP?",
    options: [
      "A method used to modify object behavior.",
      "A method used to get the value of an object's property.",
      "A method used to create an object.",
      "A method used to access object properties."
    ],
    answer: "2"
  },
  {
    question: "What is a setter method in OOP?",
    options: [
      "A method used to modify object behavior.",
      "A method used to get the value of an object's property.",
      "A method used to create an object.",
      "A method used to set the value of an object's property."
    ],
    answer: "4"
  },
  {
    question: "What is data abstraction in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of reusing existing code to create new objects.",
      "A process of representing data and behavior as objects."
    ],
    answer: "1"
  },
  {
    question: "What is method visibility in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of defining multiple methods with the same name but different parameters.",
      "A process of specifying the accessibility of methods within a class."
    ],
    answer: "4"
  },
  {
    question: "What is a constructor overloading in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of defining multiple constructors with different parameters in a class.",
      "A process of reusing existing code to create new objects.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "2"
  },
  {
    question: "What is a destructor in OOP?",
    options: [
      "A method used to create an object.",
      "A method used to destroy an object.",
      "A method used to access object properties.",
      "A method used to modify object behavior."
    ],
    answer: "2"
  },
  {
    question: "What is method hiding in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of redefining a static method in a subclass that is already defined in its superclass.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "3"
  },
  {
    question: "What is a namespace in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A container for organizing classes and other code elements.",
      "A process of representing data and behavior as objects."
    ],
    answer: "3"
  },
  {
    question: "What is method signature in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of specifying the name and parameters of a method.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "3"
  },
  {
    question: "What is multiple inheritance in OOP?",
    options: [
      "A process of inheriting properties and methods from multiple superclasses.",
      "A process of combining multiple objects to form a new object.",
      "A process of creating new classes from existing classes.",
      "A process of representing data and behavior as objects."
    ],
    answer: "1"
  },
  {
    question: "What is method resolution order in OOP?",
    options: [
      "A process of hiding internal implementation details and providing a public interface.",
      "A process of combining multiple objects to form a new object.",
      "A process of determining the order in which methods are called in a class hierarchy.",
      "A process of using an object to refer to instances of different classes."
    ],
    answer: "3"
  },
  {
    question: "What is the difference between composition and inheritance in OOP?",
    options: [
      "Composition is a 'has-a' relationship, while inheritance is an 'is-a' relationship.",
      "Composition allows objects to be composed of other objects, while inheritance allows objects to inherit properties and methods from a superclass.",
      "Composition is a top-down approach, while inheritance is a bottom-up approach.",
      "Composition is used for code reuse, while inheritance is used for code organization."
    ],
    answer: "2"
  }
];

const topicBriefing = [
  {
    topic: [
      "Encapsulation is the process of hiding internal implementation details and providing a public interface.",
      "Inheritance allows creating new classes from existing classes, enabling code reuse and creating hierarchical relationships.",
      "Polymorphism allows using an object to refer to instances of different classes.",
      "Abstraction focuses on representing data and behavior as objects, while hiding unnecessary details.",
      "A class is a blueprint for creating objects that defines their properties and methods.",
      "An object is an instance of a class, which holds its own state and behavior.",
      "A constructor is a special method used to create an object and initialize its state.",
      "Method overriding is the process of redefining a method in a subclass that is already defined in its superclass.",
      "Method overloading is the process of defining multiple methods with the same name but different parameters.",
      "A superclass is a class that is inherited by another class.",
      "An interface is a contract that defines the methods a class must implement.",
      "A static method is a method that can be accessed without creating an instance of a class.",
      "Composition is the process of combining multiple objects to form a new object.",
      "Method chaining allows calling multiple methods on an object in a single line of code.",
      "A getter method is used to get the value of an object's property.",
      "A setter method is used to set the value of an object's property.",
      "Data abstraction is the process of hiding internal implementation details and providing a public interface.",
      "Method visibility specifies the accessibility of methods within a class.",
      "Constructor overloading is the process of defining multiple constructors with different parameters in a class.",
      "A destructor is a method used to destroy an object.",
      "Method hiding is the process of redefining a static method in a subclass that is already defined in its superclass.",
      "A namespace is a container for organizing classes and other code elements.",
      "Method signature specifies the name and parameters of a method.",
      "Multiple inheritance is the process of inheriting properties and methods from multiple superclasses.",
      "Method resolution order determines the order in which methods are called in a class hierarchy.",
      "Composition allows objects to be composed of other objects, while inheritance allows objects to inherit properties and methods from a superclass."
    ]
  }
];

  const welcomeMessage = ["Hi, this is an Interactive Learning Platform, with vintage looks and modern tech combined to give you the simple and clean learning experience"]
  const intructions = [
    "Read each question carefully and choose the correct answer.",
    "The topic and the questions are curated in such a way as to make them easier to understand for a 12-year-old kid.",
    `There are ${questions.length} questions in total.`,
    "You can only proceed to the next question once you answer the current question correctly.",
    "At the end of learning, you can see the number attempts you took to understand the concept",
    "Enjoy the learning",
    "Start the quiz and have fun!",
    "Play the music below before clicking start (Optional)"
  ]
  const login = "Hi There, Please enter your User Name and Password below '↓' ";
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
            userInput = "";
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
      console.log(data.email);
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
loginSignUp();
}

main();
  
})