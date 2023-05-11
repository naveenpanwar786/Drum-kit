NoOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<NoOfDrumButtons; i++){
     //for buttons
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
          var buttonInnerHTML = this.innerHTML;
          playSound(buttonInnerHTML);
          activeButton(buttonInnerHTML);
     });
   }
      //for keys
      document.addEventListener("keypress",function(event){ 
      playSound(event.key);
      activeButton(event.key);
 });
 
function playSound(key){
     switch(key){
          case "w":
             var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
   
          case "a":
             var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
             break;
   
          case "s":
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
   
          case "d":
             var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
   
          case "j":
             var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
   
          case "k":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break;
   
          case "l":
             var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
   
          default:
             document.write(buttonHTML);
             break;
        }
}
function activeButton(button){

   currentActive = '.'+button;
   
   document.querySelector(currentActive).classList.add("passed")
   
   setTimeout(function(){document.querySelector(currentActive).classList.remove("passed")},100)
}