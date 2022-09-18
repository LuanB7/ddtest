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

    sub.addEventListener("touchmove", transformSubPosTouch)

    sub.addEventListener("mouseup", function(event){
        //sub.style.left = event.pageX + "px";
        event.preventDefault();
        sub.style.transiton = '0.4s';
        sub.removeEventListener("mousemove", transformSubPos);
        sub.removeEventListener("touchmove", transformSubPosTouch);

        if (event.pageY > 700) {
            sub.style.backgroundColor = 'red';
        }
        else {
            sub.style.backgroundColor = 'blue';
        }
        
        console.log('a');

    });



    sub.addEventListener("touchend", function(event){
        //sub.style.left = event.pageX + "px";
        
        sub.style.transition = '0.4s';
        sub.removeEventListener("mousemove", transformSubPos);
        sub.removeEventListener("touchmove", transformSubPosTouch);
        event.preventDefault();

       
        if (sub.style.top > (window.screen.availHeight / 3) * 2 + "px") { 
            
            console.log(sub.style.top);
            console.log(window.screen.availHeight / 2);
            sub.style.backgroundColor = 'red';
            console.log('maior');

            sub.style.top = "calc(100% - 57px)";
        }
        else {
            
            console.log(sub.style.top);
            sub.style.backgroundColor = 'blue';
            console.log(window.screen.availHeight / 2);
            console.log('menor');
            sub.style.top = '57px';
        }

        /*if (event.touches[0].pageY > 700) {
            
        }
        else {
            
        }*/
        
       

    });

    

}