var lettersEls = document.querySelectorAll(".js-letter");
for(var i=0;i<lettersEls.length;i++){
    lettersEls[i].addEventListener("click",function(){
        var audiofile = new Audio("./assets/audio/"+this.dataset.audiofile);
        audiofile.play();
    })
}