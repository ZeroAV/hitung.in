var gameTitle = document.getElementById("gameTitle");
var selDiff = document.getElementById("selectDiff");
var easyTime = document.getElementById("easy-time");
var easyQuestion = document.getElementById("easy-question");
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
var interval = 500;
pageOne.style.display = "inline";
pageTwo.style.display = "none";
pageThree.style.display = "none";
pageFour.style.display = "none";
selDiff.style.display = "none";
easyTime.style.display = "none";
easyQuestion.style.display = "none";

function recog(){
    interval = 500;
    console.log(hasil);
    if(pageOne.style.display=="inline"){
        if(hasil=="0"){
            helpButton.click();
        } else if(hasil=="5"){
            startButton.click();
        }
    } else if(pageTwo.style.display=="inline"){
        if(hasil=="1"){
            startButton2.click();
        } else if(hasil=="2"){
            menuButton2.click();
        }
    } else if(pageThree.style.display=="inline"){
        if(hasil=="thumbs_up"){
            easyButton.click();
        } else if(hasil=="2"){
            hardButton.click();
        } else if(hasil=="0"){
            menuButton3.click();
        }
    }
    hasil="-";
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
    easyQuestion.style.display = "inline";
    easyTime.style.display = "inline";
    pageFour.style.display= "inline";
}