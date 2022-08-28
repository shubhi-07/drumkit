var nobtndrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < nobtndrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}
document.addEventListener("keypress", function (event) {
    sound(event.key);
    buttonAnimation(event.key);
});
function sound(key) {
    switch (key) {
        case "w":
            var audiow = new Audio("sounds/tom-1.mp3");
            audiow.play();
            break;
        case "a":
            var audioa = new Audio("sounds/tom-2.mp3");
            audioa.play();
            break;
        case "s":
            var audios = new Audio("sounds/tom-3.mp3");
            audios.play();
            break;
        case "d":
            var audiod = new Audio("sounds/tom-4.mp3");
            audiod.play();
            break;
        case "j":
            var audioj = new Audio("sounds/snare.mp3");
            audioj.play();
            break;
        case "k":
            var audiok = new Audio("sounds/crash.mp3");
            audiok.play();
            break;
        case "l":
            var audiol = new Audio("sounds/kick-bass.mp3");
            audiol.play();
            break;
            
         default:
             console.log(buttonInnerHTML);


    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}