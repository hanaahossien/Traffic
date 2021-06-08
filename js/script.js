
var mydiv=document.querySelector(".menu");

// window.onscroll=
// function removeclass () {
//    mydiv.classList.replace("sec-menu","menu");
// }




$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var mylogo =document.querySelector(".sec-menu .logo")

    if (scroll >= 35) {
        mydiv.classList.add("newmenu");
       // mylogo.src="images/logo.svg";
    } else {
        mydiv.classList.remove("newmenu");
     //   mylogo.src="images/logo-w.svg";
    }
});

