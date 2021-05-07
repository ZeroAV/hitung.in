var gameTitle = document.getElementById("gameTitle");
var selDiff = document.getElementById("selectDiff");
var help = document.getElementById("helpText");
var timeText = document.getElementById("time");
var question = document.getElementById("questionDiv");
var congratulations = document.getElementById("congrats");
var firstNumberText = document.getElementById("firstNumber");
var secondNumberText = document.getElementById("secondNumber");
var operatorText = document.getElementById("operator");
var prizeText1 = document.getElementById("prizeText1");
var prizeText2 = document.getElementById("prizeText2");
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
var pil1Button = document.getElementById("pil1");
var pil2Button = document.getElementById("pil2");
var pil3Button = document.getElementById("pil3");
var pil4Button = document.getElementById("pil4");
var playAgainButton = document.getElementById("playAgainButton");
var startCameraButton = document.getElementById("startCamera");
var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageFour = document.getElementById("page-four");
var pageFive = document.getElementById("page-five");
var pageSix = document.getElementById("page-six");

var resultText = document.getElementById("result");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");

var correctSound = document.getElementById("correctSound");
var resultMusic = document.getElementById("resultMusic");
correctSound.volume = 0.4;
resultMusic.loop = false;

 
var interval = 500;
var firstNumber = 1000;
var secondNumber = 1000;
var operator = "+";
var result = 0;
var isEasy = false;
var time = 61; //reset to 61 after dev finished along with resetvalues();
var score = 0;
var tempResult = 0;
var pil1 = 0;
var pil2 = 0;
var pil3 = 0;
var pilArray = [1, 2, 3 , 4];
var arrIndex = 0;
var prevNumber = 1000;
var lastChoice = 0;
var gameStart;

//PAGE INITIALIZATION

pageOne.style.display = "none";
pageTwo.style.display = "none";
pageThree.style.display = "none";
pageFour.style.display = "none";
pageFive.style.display = "none";
pageSix.style.display = "none";
selDiff.style.display = "none";
help.style.display = "none";
timeText.style.display = "none";
question.style.display = "none";
congratulations.style.display = "none";
check1.style.display = "none";
check2.style.display = "none";
window.alert("Mohon perbolehkan website untuk memutar audio dan menyalakan kamera untuk pengalaman terbaik. Tidak ada data video yang disimpan. Jika video kamera tidak muncul khususnya pada browser Chrome, silahkan hapus history dan cookie browsing atau gunakan Incognito mode. Permainan ini lebih baik dimainkan pada browser Firefox dan Safari.\n\nPlease allow website to play audio and access camera for best experience. No camera data will be saved. If you're using Chrome browser and the video from camera does not appear, please clear your browsing history and cache or use Incognito mode. This game works best in Firefox and Safari.")

//HAND GESTURE RECOGNITION FOR MENU NAVIGATION

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
            case "👍":
                startButton2.click();
                break;
            case "2":
                menuButton2.click();
                break;
        }
    } else if(pageThree.style.display=="inline"){
        switch(hasilGestur){
            case "1":
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
            case "👍":
                menuButton4.click();
                break;
        }
    } else if(pageFive.style.display=="inline"){
        switch(hasilGestur){
            case "👍":
                menuButton5.click();
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

//BUTTON ACTIONS

helpButton.onclick = function() {
    pageOne.style.display= "none";
    gameTitle.style.display = "none";
    console.log('help clicked');
    help.style.display = "inline";
    pageTwo.style.display= "inline";
};

menuButton2.onclick = function(){
    pageTwo.style.display= "none";
    help.style.display = "none";
    console.log('menu clicked');
    gameTitle.style.display = "inline";
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

menuButton5.onclick = function(){
    pageFive.style.display= "none";
    question.style.display = "none";
    timeText.style.display = "none";
    clearInterval(gameStart);
    console.log('menu clicked');
    gameTitle.style.display= "inline";
    pageOne.style.display= "inline";
    resetGameValues();
}

menuButton6.onclick = function(){
    resultMusic.currentTime = 0;
    resultMusic.pause();
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
    help.style.display = "none";
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
    pageThree.style.display= "none";
    gameTitle.style.display = "none";
    selDiff.style.display = "none";
    console.log('hard clicked');
    question.style.display = "inline";
    timeText.style.display = "inline";
    pageFive.style.display= "inline";
    gameStart = setInterval(gameLoop, 1000);
}

playAgainButton.onclick = function(){
    resultMusic.currentTime = 0;
    resultMusic.pause();
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
        pageSix.style.display= "none";
        congratulations.style.display= "none";
        console.log('play again easy clicked');
        resetGameValues();
        isEasy = false;
        question.style.display = "inline";
        timeText.style.display = "inline";
        pageFive.style.display= "inline";
        gameStart = setInterval(gameLoop, 1000);
    }
}

//ANSWER BUTTON CLICKS

pil1Button.onclick = function (){
    tempResult = parseFloat(document.getElementById("0").textContent);
    console.log(tempResult);
}

pil2Button.onclick = function (){
    tempResult = parseFloat(document.getElementById("1").textContent);
}

pil3Button.onclick = function (){
    tempResult = parseFloat(document.getElementById("2").textContent);
}

pil4Button.onclick = function (){
    tempResult = parseFloat(document.getElementById("3").textContent);
}

//GAME FUNCTIONS

function gameLoop(){
    if(isEasy){ //easy mode
        check1.style.display = "none";
        check2.style.display = "none";
        arrIndex = randomizeInt(0, 1);
        if(firstNumber==1000 && secondNumber==1000){
            randomizeNumbersEasy(arrIndex);
            //checkPrevious();
        }
        //resultText.textContent = result;

        if(hasilGestur==result){
            arrIndex = randomizeInt(0, 1);
            randomizeNumbersEasy(arrIndex);
            //checkPrevious();
            score+=100;
            prizeText1.textContent = "Prize: $"+ score;
            check1.style.display = "inline";
            check2.style.display = "inline";
            correctSound.play();
        }

    } else{ //hard mode
        check1.style.display = "none";
        check2.style.display = "none";
        arrIndex = randomizeInt(0, 3);
        if(firstNumber==1000 && secondNumber==1000){
            randomizeNumbersHard(arrIndex);
            //checkPrevious();
            pil1 = randomizeInt(1, 250);
            pil2 = randomizeInt(1, 250);
            pil3 = randomizeInt(1, 250);
            pilArray[0] = pil1;
            pilArray[1] = pil2;
            pilArray[2] = pil3;
            pilArray[3] = result;
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
            console.log(result);
        }
        //resultText.textContent = result;
        
        switch(hasilGestur){
            case "1": 
                console.log("button 1 clicked");
                pil1Button.click();
                if(tempResult==result){
                    prevNumber = 0;
                    arrIndex = randomizeInt(0, 3);
                    randomizeNumbersHard(arrIndex);
                    //checkPrevious();
                    score+=100;
                    prizeText2.textContent = "Prize: $"+ score;
                    check1.style.display = "inline";
                    check2.style.display = "inline";
                    correctSound.play();
                }
                break;
            case "2": 
                pil2Button.click();
                if(tempResult==result){
                    prevNumber = 1;
                    arrIndex = randomizeInt(0, 3);
                    randomizeNumbersHard(arrIndex);
                    //checkPrevious();
                    score+=100;
                    prizeText2.textContent = "Prize: $"+ score;
                    check1.style.display = "inline";
                    check2.style.display = "inline";
                    correctSound.play();
                }
                break;
            case "3": 
                pil3Button.click();
                if(tempResult==result){
                    prevNumber = 2;
                    arrIndex = randomizeInt(0, 3);
                    randomizeNumbersHard(arrIndex);
                    //checkPrevious();
                    score+=100;
                    prizeText2.textContent = "Prize: $"+ score;
                    check1.style.display = "inline";
                    check2.style.display = "inline";
                    correctSound.play();
                }
                break;
            case "4": 
                pil4Button.click();
                if(tempResult==result){
                    prevNumber = 3;
                    arrIndex = randomizeInt(0, 3);
                    randomizeNumbersHard(arrIndex);
                    //checkPrevious();
                    score+=100;
                    prizeText2.textContent = "Prize: $"+ score;
                    check1.style.display = "inline";
                    check2.style.display = "inline";
                    correctSound.play();
                }
                break;
        }
    }
    if(time==0){
        question.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        timeText.style.display = "none";
        console.log("game finished");
        pageSix.style.display = "inline";
        congratulations.style.display = "inline";
        congratulations.textContent = "Congratulations! You won $" + score;
        resultMusic.play();
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

function randomizeNumbersEasy(index){
    switch(index){
        case 0:
            operator = "+";   
            firstNumber = randomizeInt(1, 4);
            result = randomizeInt(1,5);
            secondNumber = result - firstNumber;
            if(secondNumber<0){
                secondNumber *= -1;
                operator="-";
            }
            break;
        case 1:
            operator = "-";
            firstNumber = randomizeInt(1, 10);
            result = randomizeInt(1,5);
            secondNumber = firstNumber - result;
            result = firstNumber - secondNumber;
            if(secondNumber<0){
                secondNumber *= -1;
                operator="+";
            }
            break;
    }
    firstNumberText.textContent = firstNumber;
    secondNumberText.textContent = secondNumber;
    operatorText.textContent = operator;
    timeText.textContent = "Time: "+time;
}

function randomizeNumbersHard(index){
    switch(index){
        case 0:
            firstNumber = randomizeInt(1, 99);
            secondNumber = randomizeInt(1, 99)
            operator = "+";
            result = firstNumber + secondNumber;
            pil1 = randomizeInt(1, 200);
            pil2 = randomizeInt(1, 200);
            pil3 = randomizeInt(1, 200);
            pilArray[0] = pil1;
            pilArray[1] = pil2;
            pilArray[2] = pil3;
            pilArray[3] = result;
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
            break;
        case 1:
            firstNumber = randomizeInt(1, 99);
            secondNumber = randomizeInt(1, 98)
            operator = "-";
            result = firstNumber - secondNumber;
            pil1 = randomizeInt(1, 50);
            pil2 = randomizeInt(1, 50);
            pil3 = randomizeInt(1, 50);
            pilArray[0] = pil1;
            pilArray[1] = pil2;
            pilArray[2] = pil3;
            pilArray[3] = result;
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
            break;
        case 2:
            firstNumber = randomizeInt(1, 50);
            secondNumber = randomizeInt(1, 50)
            operator = "x";
            result = firstNumber * secondNumber;
            result = result.toFixed(1);
            pil1 = randomizeInt(1, 250);
            pil2 = randomizeInt(1, 250);
            pil3 = randomizeInt(1, 250);
            pilArray[0] = pil1;
            pilArray[1] = pil2;
            pilArray[2] = pil3;
            pilArray[3] = result;
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
            break;
        case 3:
            firstNumber = randomizeInt(1, 50);
            secondNumber = randomizeInt(1, 50)
            operator = "÷";
            result = firstNumber / secondNumber;
            result = result.toFixed(1);
            pil1 = randomizeInt(1, 50);
            pil2 = randomizeInt(1, 50);
            pil3 = randomizeInt(1, 50);
            pilArray[0] = pil1;
            pilArray[1] = pil2;
            pilArray[2] = pil3;
            pilArray[3] = result;
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
            break;
    }
    firstNumberText.textContent = firstNumber;
    secondNumberText.textContent = secondNumber;
    operatorText.textContent = operator;
    timeText.textContent = "Time: "+time;
}

function resetGameValues(){
    firstNumber = 1000;
    secondNumber = 1000;
    operator = "+";
    result = 0;
    isEasy = false;
    time = 61; //reset to 61 after dev finished
    score = 0;
    tempResult = 0;
    pil1 = 0;
    pil2 = 0;
    pil3 = 0;
    arrIndex = 0;
    prevNumber = 1000;
    firstNumberText.textContent = "";
    secondNumberText.textContent = "";
    operatorText.textContent = operator;
    timeText.textContent = "Time: 60";
    prizeText1.textContent = "Prize: $"+ 0;
    prizeText2.textContent = "Prize: $"+ 0;
}

function randomizeChoices(arr) {
    var i = arr.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

/*function checkPrevious () {
    if(isEasy) {
        while(result == prevNumber){
            randomizeNumbersEasy(arrIndex);
        }
    }else {
        for(i=0; i<pilArray.length; i++){
            if(pilArray[i] == result){
                lastChoice = i;
                break;
            }
        }
        while(lastChoice == prevNumber){
            randomizeChoices(pilArray);
            for(i=0; i<pilArray.length; i++){
                document.getElementById(i).textContent = pilArray[i];
            }
        }
    }
    if(result != prevNumber){
        prevNumber = result;
    }
}*/