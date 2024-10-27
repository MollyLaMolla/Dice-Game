document.querySelector(".start-button").addEventListener("click", function(){

    document.querySelector(".restart-button").classList.remove("transparent");

    for (i=0; i<document.querySelectorAll(".counter").length; i++){
        document.querySelectorAll(".counter")[i].classList.remove("invisible");
    }

    if (p1Win !== "🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲" && p2Win !== "🎲🎲🎲🎲🎲🎲🎲🎲🎲🎲"){
    var randomNum1 = Math.floor((Math.random())*6)+1;
    if(randomNum1 === 1){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/one.png");
    }
    if(randomNum1 === 2){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/two.png");
    }
    if(randomNum1 === 3){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/three.png");
    }
    if(randomNum1 === 4){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/four.png");
    }
    if(randomNum1 === 5){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/five.png");
    }
    if(randomNum1 === 6){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/six.png");
    }

    var randomNum2 = Math.floor((Math.random())*6)+1;
    if(randomNum2 === 1){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/one.png");
    }
    if(randomNum2 === 2){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/two.png");
    }
    if(randomNum2 === 3){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/three.png");
    }
    if(randomNum2 === 4){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/four.png");
    }
    if(randomNum2 === 5){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/five.png");
    }
    if(randomNum2 === 6){
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/six.png");
    }

    if(randomNum1 > randomNum2){
        document.querySelector("h1").textContent = "P1 Win!";
        p1Win = p1Win + "🎲";
        p1Score++;
    }

    if(randomNum2 > randomNum1){
        document.querySelector("h1").textContent = "P2 Win!";
        p2Win = p2Win + "🎲";
        p2Score++;
    }

    if(randomNum2 === randomNum1){
        document.querySelector("h1").textContent = "Draw!";
    }

    document.querySelectorAll(".player-score h1")[0].textContent = p1Score;
    document.querySelectorAll(".player-score h1")[1].textContent = p2Score;
    document.querySelectorAll(".dice-score")[0].textContent = p1Win;
    document.querySelectorAll(".dice-score")[1].textContent = p2Win;
}

else{
    this.removeEventListener;
    this.textContent = "Reload Page";
    if(p1Score === 10){
        document.querySelectorAll("img")[0].setAttribute("src", "./Images/trophy-cup.png");
        document.querySelectorAll("img")[1].classList.add("transparent");
    }
    else{
        document.querySelectorAll("img")[1].setAttribute("src", "./Images/trophy-cup.png");
        document.querySelectorAll("img")[0].classList.add("transparent");
    }
}

})

    var p1Win = "";
    var p2Win = "";
    var p1Score = 0;
    var p2Score = 0;