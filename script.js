const para = document.getElementById("para");
//const parall = document.getElementById("parall");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    //let value = window.scrollY
    para.style.backgroundPositionY = offset * 0.6 + "px";
    //parall.style.top = value * 666 + "px";
})