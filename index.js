document.querySelector("button").addEventListener("click", function(){

    var bgColor = document.querySelector("body")
    var container = document.querySelector(".container")
    var btn = document.querySelector(".btn")
    var one = document.querySelector(".one")
    var two = document.querySelector(".two")
    var three = document.querySelector(".three")
    var s1 = document.querySelector(".s1")
    var s2 = document.querySelector(".s2")
    var s3 = document.querySelector(".s3")
    var sun = document.querySelector(".sun")

    if(bgColor.style.backgroundColor === "antiquewhite"){
        var audio = new Audio("audio/night.mp3");
        audio.play();
        document.querySelector("body").style.backgroundColor = "#1c1c1c";
        container.style.backgroundColor = "black";
        container.style.justifyContent = "end";
        one.style.backgroundColor = "grey";
        two.style.backgroundColor = "rgb(90, 88, 88)";
        three.style.backgroundColor = "rgb(54, 54, 54)";
        btn.style.backgroundColor = "rgb(205, 205, 205)";
        btn.style.border = "2px solid rgb(205, 205, 205)"
        s1.style.visibility = "visible";
        s2.style.visibility = "visible";
        s3.style.visibility = "visible";
        sun.style.right = "-550px";
        sun.setAttribute("src", "images/moon.png");
    }
    else {
        var audio = new Audio("audio/morning.mp3");
        audio.play();
        document.querySelector("body").style.backgroundColor = "antiquewhite";
        container.style.backgroundColor = "skyblue";
        container.style.justifyContent = "start";
        one.style.backgroundColor = "rgb(219, 231, 236)";
        two.style.backgroundColor = "rgb(185, 224, 239)";
        three.style.backgroundColor = "rgb(158, 215, 237)";
        btn.style.backgroundColor = "yellow";
        btn.style.border = "2px solid yellow"
        s1.style.visibility = "hidden";
        s2.style.visibility = "hidden";
        s3.style.visibility = "hidden";
        sun.style.right = "550px";
        sun.setAttribute("src", "images/sun.png");
    }
})