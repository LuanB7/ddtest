function getCoordenada(event) {
    let sub = document.querySelector(".sub-menu");
    sub.style.transition = '0s';
    

    function transformSubPos(event) {
        sub.style.top = (event.pageY - 28.5) + "px";
        sub.style.transition = '0s';
        console.log(event.pageY);
        
    }

    function transformSubPosTouch(event) {
        event.preventDefault();
        sub.style.top = (event.touches[0].pageY - 28.5) + "px";
        sub.style.transition = '0s';
        console.log("Touch: " + event.touches[0].pageY);
        
    }
    
    
    sub.addEventListener("mousemove", transformSubPos);

    sub.addEventListener("touchmove", transformSubPosTouch);


    function mouseUp(event) {
          //sub.style.left = event.pageX + "px";
          event.preventDefault();
          sub.style.transition = '0.4s';
          sub.removeEventListener("mousemove", transformSubPos);
          sub.removeEventListener("touchmove", transformSubPosTouch);
          sub.removeEventListener("touchstart", transformSubPosTouch);
          sub.removeEventListener("mouseup", mouseUp);
          sub.removeEventListener("touchend", mouseUp);
          
          
  
          if (sub.style.top > `${window.screen.availHeight / 2}px`) { 
              
              console.log("top: " + sub.style.top);
              console.log(window.screen.availHeight / 2);
              //sub.style.backgroundColor = 'red';
              console.log('maior');
  
              setTimeout(()=>{
                    sub.style.top = "calc(100% - 57px)";
                    let smca = document.querySelectorAll(".sm-content-a");
                    for (i=0; i < smca.length; i++) {
                        smca[i].style.opacity = 0;
                        smca[i].style.transform = "scale(0.9)";
                    }
              }, 10);
              
          }
          else {
              console.log("top: " + sub.style.top);
              //sub.style.backgroundColor = 'blue';
              console.log(window.screen.availHeight / 2);
              console.log('menor');
              setTimeout(()=>{
                    sub.style.top = "57px";
                    let smca = document.querySelectorAll(".sm-content-a");
                    for (i=0; i < smca.length; i++) {
                        smca[i].style.opacity = 1;
                        smca[i].style.transform = "scale(1)";
                    }
              }, 10);
          }
  
    }

    sub.addEventListener("mouseup", mouseUp);
    sub.addEventListener("touchend", mouseUp);

    

}