let gamesSeq = [];
let userSeq = [];
let btns = ["red","blue","green","yellow"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("Game started");
    if (started == false){
        console.log("Game is started");
        started = true;

        levelUp();
        
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);

}

function levelUp(){
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    //randomButton generation

    let rndInd = Math.floor(Math.random() * 3);
    let rndColor = btns[rndInd];
    let rndBtn= document.querySelector(`.${rndColor}`)
    // console.log(rndInd)
    // console.log(rndColor)
    // console.log(rndBtn)
    gamesSeq.push(rndColor);
    console.log(gamesSeq)

    btnFlash(rndBtn);
}

function checkAns(indx){
    // console.log("curr level :", level);
    
    if (userSeq[indx]==gamesSeq[indx]){
        // console.log("same value")
        if (userSeq.length == gamesSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to restart.`;
         document.querySelector("body").style.backgroundColor = "red";

        setTimeout( function (){
            document.querySelector("body").style.backgroundColor = "#91a7a8";
        },150)

        reset();
    }

}

function btnPress () {
    // console.log(this)
    let btn = this;
   userFlash(btn)

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userColor);
   checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of  allBtns){
    btn.addEventListener("click", btnPress)
}


function reset (){
    started = false
    gamesSeq = []
    userSeq = []
    level = 0

}

