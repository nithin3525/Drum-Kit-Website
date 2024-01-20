var numOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0;i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var expression  = this.innerHTML;
        playSound(expression);
        buttonPressed(expression);
    });
}
document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonPressed(event.key);
});
function playSound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
    }
}

function buttonPressed(key){
    document.querySelector("." +key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
 