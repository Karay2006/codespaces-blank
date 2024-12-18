console.log("help");

let main= document.querySelector(".main");
let  left = document.querySelector(".left");
let  right = document.querySelector(".right");
let running = document.querySelector(".running");
running.style.display="block";
let lightahead=document.querySelector(".lightahead");
lightahead.style.display="none";
let text = document.querySelector("p");
let creature = document.querySelector(".creature");
creature.style.display="none";
let youdied= document.querySelector(".youdied");
youdied.style.display="none";
let emoji=document.querySelector(".emoji");
emoji.style.display="none";
let youwin= document.querySelector(".youwin");
youwin.style.display="none"


//creature.style.display= "none";
let eyes = document.querySelector(".eyes");
eyes.style.display="none";





left.addEventListener('click',function(){
   left.style.display="none";
   right.style.display="none";
   running.style.display="none";
   lightahead.style.display="none";
   creature.style.display="none";
   youdied.style.display="none";
   eyes.style.display="block";
    text.innerHTML="When turning left, you think that you finally got away. But you still feel uneasy as though someone/something are watching you. Double click to find out what is watching you"; 
});

right.addEventListener('click',function(){

    left.style.display="none";
    right.style.display="none";
    running.style.display="none";
    lightahead.style.display="none";
    creature.style.display="block";
    youdied.style.display="none";
    eyes.style.display="none";
    text.innerHTML="OH NO WE HAVE TO OUT RUN IT, QUICK THINK FAST!! HINT,double click";
});

creature.addEventListener('dblclick',function(){
    left.style.display="none";
    right.style.display="none";
   running.style.display="none";
   lightahead.style.display="block";
   creature.style.display="none";
   youdied.style.display="none";
   eyes.style.display="none";
text.innerHTML="WHAT'S THAT....IS THIS THE END?"
});

lightahead.addEventListener('dblclick',function(){
    left.style.display="none";
    right.style.display="none";
   running.style.display="none";
   lightahead.style.display="none";
   creature.style.display="none";
   youdied.style.display="none";
   eyes.style.display="none";
    youwin.style.display="block";


});

//lightahead.addEventListener('mous')
    




eyes.addEventListener('dblclick',function(){
    left.style.display="none";
    right.style.display="none";
    running.style.display="none";
    lightahead.style.display="none";
    creature.style.display="block";
    youdied.style.display="none";
    eyes.style.display="none";
    emoji.style.display="block";
text.innerHTML="OH NOOO!!! YOU FOUND THE BEAST OF THE WOOD,QUICK WE HAVE TO GET OUT OF HERE";
});

emoji.addEventListener('mouseover',function(){
 youdied.style.display="block";
 creature.style.display="none";   

})





