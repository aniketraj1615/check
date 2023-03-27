document.onkeydown = function (e) {
    console.log("Your keycode is :" + e.keyCode);
    if(e.keyCode==38){
        mario=document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario');
        }, 700);
    }
 
}