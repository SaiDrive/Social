let sentence = "Hello Reader, What's your name?";
let i = 0;
let speed = 110;

function enableInput(){
    document.getElementById("userInput").style.display = "block";
}

function typing(){
    document.getElementById("startButton").style.display = "none"; 
    if(i < sentence.length){
        document.getElementById("animateText").innerHTML += sentence.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
    else {
        
        setTimeout(enableInput, 700);
        
    }
        
}



