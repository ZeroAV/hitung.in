var gameTitle = document.getElementById("gameTitle");
var selDiff = document.getElementById("selectDiff");
var timeText = document.getElementById("time");
var question = document.getElementById("questionDiv");
var firstNumberText = document.getElementById("firstNumber");
var secondNumberText = document.getElementById("secondNumber");
var operatorText = document.getElementById("operator");
var prizeText = document.getElementById("prizeText");
var startButton = document.getElementById("startButton");
var startButton2 = document.getElementById("startButton2");
var helpButton = document.getElementById("helpbutton");
var menuButton2 = document.getElementById("menubutton2");
var menuButton3 = document.getElementById("menubutton3");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageFour = document.getElementById("page-four");
var pageStatusOne = pageOne.style.display;
var pageStatusTwo = pageTwo.style.display;
var pageStatusThree = pageThree.style.display;

var resultText = document.getElementById("result");


var interval = 500;
var firstNumber = 0;
var secondNumber = 1;
var operator = "+";
var result = 0;
var isEasy = false;
var time = 60;
var score = 0;
var operators = ["+", "-", "*", "/"] ;
var arrIndex = 0;

pageOne.style.display = "inline";
pageTwo.style.display = "none";
pageThree.style.display = "none";
pageFour.style.display = "none";
selDiff.style.display = "none";
timeText.style.display = "none";
question.style.display = "none";

function recog(){
    interval = 500;
    console.log(hasilGestur);
    if(pageOne.style.display=="inline"){
        if(hasilGestur=="0"){
            helpButton.click();
        } else if(hasilGestur=="5"){
            startButton.click();
        }
    } else if(pageTwo.style.display=="inline"){
        if(hasilGestur=="1"){
            startButton2.click();
        } else if(hasilGestur=="2"){
            menuButton2.click();
        }
    } else if(pageThree.style.display=="inline"){
        if(hasilGestur=="thumbs_up"){
            easyButton.click();
        } else if(hasilGestur=="2"){
            hardButton.click();
        } else if(hasilGestur=="0"){
            menuButton3.click();
        }
    } else if(pageFour.style.display=="inline"){

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
    gameLoop();
}

function gameLoop(){
    if(isEasy){ //easy mode
        firstNumber = randomizeInt(1, 10);
        arrIndex = randomizeInt(0, 1);
        switch(arrIndex){
            case 0:
                operator = "+";
                secondNumber = firstNumber + randomizeInt(1, 5);
                result = firstNumber + secondNumber;
                break;
            case 1:
                operator = "-";
                secondNumber = firstNumber - randomizeInt(1, 5);
                result = firstNumber - secondNumber;
                break;
            case 2:
                operator = "x";
                secondNumber = firstNumber * randomizeInt(1, 5);
                result = firstNumber * secondNumber;
                break;
            case 3:
                operator = "/";
                secondNumber = firstNumber / randomizeInt(1, 5);
                result = firstNumber / secondNumber;
                break;
        }

    firstNumberText.textContent = firstNumber;
    secondNumberText.textContent = secondNumber;
    operatorText.textContent = operator;
    timeText.textContent = "Time: "+time;
    resultText.textContent = result;

    if(hasilGestur==result){
        gameLoop();
        prize+=100;
        prizeText.textContent = "Prize: $"+ score;
    }

    } else{ //hard mode

    }
}

function randomizeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeNumbers(){
    
}