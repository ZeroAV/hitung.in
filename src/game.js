var gameTitle = document.getElementById("gameTitle");
var selDiff = document.getElementById("selectDiff");
var startButton = document.getElementById("startButton");
var startButton2 = document.getElementById("startButton2");
var helpButton = document.getElementById("helpbutton");
var menuButton2 = document.getElementById("menubutton2");
var menuButton3 = document.getElementById("menubutton3");
var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageStatusOne = pageOne.style.display;
var pageStatusTwo = pageTwo.style.display;
var pageStatusThree = pageThree.style.display;
pageOne.style.display = "inline";
pageTwo.style.display = "none";
pageThree.style.display = "none";
selDiff.style.display = "none";

function recog(){
    console.log(hasil);
    if(pageOne.style.display=="inline"){
        if(hasil=="2"){
            helpButton.click();
        } else if(hasil=="👍"){
            startButton.click();
        }
    } else if(pageTwo.style.display=="inline"){
        //unfinished
    }
    
}

setInterval(recog, 500);
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
