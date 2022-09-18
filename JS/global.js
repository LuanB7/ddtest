function getCoordenada(event) {
    let sub = document.querySelector(".sub-menu");

    function transformSubPos(event) {
        sub.style.top = (event.pageY - 28.5) + "px";
        console.log(event.pageY);
        
    }

    function transformSubPosTouch(event) {
        sub.style.top = (event.touches[0].pageY - 28.5) + "px";
        console.log("Touch: " + event.touches[0].pageY);
        
    }
    
    
    sub.addEventListener("mousemove", transformSubPos);

    sub.addEventListener("touchmove", transformSubPosTouch)

    sub.addEventListener("mouseup", function(event){
        //sub.style.left = event.pageX + "px";
        

        sub.removeEventListener("mousemove", transformSubPos);
        console.log('a');

    });

    

}