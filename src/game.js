var gameTitle = document.getElementById("gameTitle");
var selDiff = document.getElementById("selectDiff");
var timeText = document.getElementById("time");
var question = document.getElementById("questionDiv");
var congratulations = document.getElementById("congrats");
var firstNumberText = document.getElementById("firstNumber");
var secondNumberText = document.getElementById("secondNumber");
var operatorText = document.getElementById("operator");
var prizeText = document.getElementById("prizeText");
var startButton = document.getElementById("startButton");
var startButton2 = document.getElementById("startButton2");
var helpButton = document.getElementById("helpbutton");
var menuButton2 = document.getElementById("menubutton2");
var menuButton3 = document.getElementById("menubutton3");
var menuButton4 = document.getElementById("menubutton4");
var menuButton5 = document.getElementById("menubutton5");
var menuButton6 = document.getElementById("menubutton6");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var playAgainButton = document.getElementById("playAgainButton");
var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageFour = document.getElementById("page-four");
var pageFive = document.getElementById("page-five");
var pageSix = document.getElementById("page-six");

var resultText = document.getElementById("result");


var interval = 500;
var firstNumber = 1000;
var secondNumber = 1000;
var operator = "+";
var result = 0;
var isEasy = false;
var time = 10; //reset to 60 after dev finished along with resetvalues();
var score = 0;
var temp = 0;
var pil1 = 0;
var pil2 = 0;
var pil3 = 0;
var operators = ["+", "-", "*", "/"] ;
var arrIndex = 0;
var gameStart

pageOne.style.display = "inline";
pageTwo.style.display = "none";
pageThree.style.display = "none";
pageFour.style.display = "none";
pageFive.style.display = "none";
pageSix.style.display = "none";
selDiff.style.display = "none";
timeText.style.display = "none";
question.style.display = "none";
congratulations.style.display = "none";


function recog(){
    interval = 500;
    console.log(hasilGestur);
    if(pageOne.style.display=="inline"){
        switch(hasilGestur){
            case "0":
                helpButton.click();
                break;
            case "5":
                startButton.click();
                break;
        }
    } else if(pageTwo.style.display=="inline"){
        switch(hasilGestur){
            case "1":
                startButton2.click();
                break;
            case "5":
                menuButton2.click();
                break;
        }
    } else if(pageThree.style.display=="inline"){
        switch(hasilGestur){
            case "thumbs_up":
                easyButton.click();
                break;
            case "2":
                hardButton.click();
                break;
            case "0":
                menuButton3.click();
                break;
        }
    } else if(pageFour.style.display=="inline"){
        switch(hasilGestur){
            case "0":
                menuButton4.click();
                break;
        }
    } else if(pageFive.style.display=="inline"){
        switch(hasilGestur){
            case "0":
                menuButton5.click(); //hard mode WIP
                break;
        }
    } else if(pageSix.style.display=="inline"){
        switch(hasilGestur){
            case "1":
                playAgainButton.click();
                break;
            case "2":
                menuButton6.click();
                break;
        }
    }
    hasilGestur="-";
    interval = 5000;
}

setInterval(recog, interval);
helpButton.onclick = function() {
    pageOne.style.display= "none";
    console.log('help clicked');
    pageTwo.style.display= "inline";
};

menuButton2.onclick = function(){
    pageTwo.style.display= "none";
    console.log('menu clicked');
    pageOne.style.display= "inline";
}

menuButton3.onclick = function(){
    pageThree.style.display= "none";
    selDiff.style.display= "none";
    console.log('menu clicked');
    gameTitle.style.display= "inline";
    pageOne.style.display= "inline";
}

menuButton4.onclick = function(){
    pageFour.style.display= "none";
    question.style.display = "none";
    timeText.style.display = "none";
    clearInterval(gameStart);
    console.log('menu clicked');
    gameTitle.style.display= "inline";
    pageOne.style.display= "inline";
    resetGameValues();
}

menuButton6.onclick = function(){
    pageSix.style.display= "none";
    congratulations.style.display= "none";
    console.log('menu clicked');
    gameTitle.style.display= "inline";
    pageOne.style.display= "inline";
    resetGameValues();
}

startButton.onclick = function(){
    pageOne.style.display= "none";
    gameTitle.style.display = "none";
    console.log('start clicked');
    selDiff.style.display = "inline";
    pageThree.style.display= "inline";
}

startButton2.onclick = function(){
    pageTwo.style.display= "none";
    gameTitle.style.display = "none";
    console.log('start clicked');
    selDiff.style.display = "inline";
    pageThree.style.display= "inline";
}

easyButton.onclick = function(){
    pageThree.style.display= "none";
    gameTitle.style.display = "none";
    selDiff.style.display = "none";
    console.log('easy clicked');
    question.style.display = "inline";
    timeText.style.display = "inline";
    pageFour.style.display= "inline";
    isEasy=true;
    gameStart = setInterval(gameLoop, 1000);
}

hardButton.onclick = function(){
    isEasy = false;
}

playAgainButton.onclick = function(){
    if(isEasy){
        pageSix.style.display= "none";
        congratulations.style.display= "none";
        console.log('play again easy clicked');
        resetGameValues();
        isEasy = true;
        question.style.display = "inline";
        timeText.style.display = "inline";
        pageFour.style.display= "inline";
        gameStart = setInterval(gameLoop, 1000);
    } else{

    }
}

function gameLoop(){
    if(isEasy){ //easy mode
    firstNumberText.textContent = "";
    secondNumberText.textContent = "";
    operatorText.textContent = operator;
    timeText.textContent = "Time: 60";
    prizeText.textContent = "Prize: $"+ score;
    arrIndex = randomizeInt(0, 1);
        if(firstNumber==1000 && secondNumber==1000){
            randomizeNumbers(arrIndex);
            firstNumberText.textContent = firstNumber;
            secondNumberText.textContent = secondNumber;
            operatorText.textContent = operator;
            timeText.textContent = "Time: "+time;
            resultText.textContent = result;
        }
    firstNumberText.textContent = firstNumber;
    secondNumberText.textContent = secondNumber;
    operatorText.textContent = operator;
    timeText.textContent = "Time: "+time;
    resultText.textContent = result;

    if(hasilGestur==result){
        arrIndex = randomizeInt(0, 1);
        randomizeNumbers(arrIndex);
        score+=100;
        prizeText.textContent = "Prize: $"+ score;
    }

    } else{ //hard mode
        firstNumber = randomizeInt(1, 50);
        secondNumber = randomizeInt(1, 50)
        arrIndex = randomizeInt(0, 3);
        switch(arrIndex){
            case 0:
                operator = "+";
                result = firstNumber + secondNumber;
                break;
            case 1:
                operator = "-";
                result = firstNumber - secondNumber;
                break;
            case 2:
                operator = "x";
                result = firstNumber * secondNumber;
                break;
            case 3:
                operator = "÷";
                result = firstNumber / secondNumber;
                break;
        }
        pil1 = randomizeInt(1, 250);
        pil2 = randomizeInt(1, 250);
        pil3 = randomizeInt(1, 250);
    }
    if(time==0){
        question.style.display = "none";
        pageFour.style.display = "none";
        timeText.style.display = "none";
        console.log("game finished");
        pageSix.style.display = "inline";
        congratulations.style.display = "inline";
        congratulations.textContent = "Congratulations! You got $" + score;
        clearInterval(gameStart);
    } else{
        time-=1;
        timeText.textContent = "Time: "+time;
    }
    
}

function randomizeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeNumbers(index){
    switch(index){
        case 0:
            operator = "+";   
             firstNumber = randomizeInt(1, 4);
            result = randomizeInt(1,5);
            secondNumber = result - firstNumber;
            break;
        case 1:
            operator = "-";
            firstNumber = randomizeInt(1, 10)
            secondNumber = firstNumber - randomizeInt(1, 5);
            result = firstNumber - secondNumber;
            break;
    }
}

function resetGameValues(){
    firstNumber = 1000;
    secondNumber = 1000;
    operator = "+";
    result = 0;
    isEasy = false;
    time = 10; //reset to 60 after dev finished
    score = 0;
    temp = 0;
    pil1 = 0;
    pil2 = 0;
    pil3 = 0;
    arrIndex = 0;
}