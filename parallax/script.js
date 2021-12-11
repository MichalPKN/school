const para = document.getElementById("para");
const chleb1 = document.getElementById("chleb1");
const chleb2 = document.getElementById("chleb2");
const chleb22 = document.getElementById("chleb22");
const chleb3 = document.getElementById("chleb3");

document.onscroll = () => {
    console.log(chleb2.style.right);
    let value = window.scrollY;
    chleb1.style.filter = "hue-rotate(" + value * 0.7 + "deg)";
    para.style.backgroundPositionY = value * 0.6 + "px";
    chleb2.style.transform = "rotate(" + value * 1 + "deg)";
    chleb2.style.left = value * 0.5 + "px";
    chleb2.style.bottom = value * 0.9 + "px";
    chleb22.style.transform = "rotate(" + -value * 1 + "deg)";
    chleb22.style.right = value * 0.5 + "px";
    chleb22.style.bottom = value * 0.9 + "px";
    chleb3.style.bottom = value * 0.2 + "px";
    size = 15 + value * 0.02;
    chleb3.style.marginLeft = -(size / 2) + "em";
    chleb3.style.maxWidth = size + "em";
}