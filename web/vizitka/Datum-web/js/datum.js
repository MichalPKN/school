function zero(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

function time() {
    d = new Date;
    document.getElementById("time").innerHTML = zero(d.getHours()) + ":" + zero(d.getMinutes()) + ":" + zero(d.getSeconds());
    var days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    document.getElementById("date").innerHTML = days[d.getDay()] + " " + d.getDate() + "." + d.getMonth() + ". " + d.getFullYear();
}
setInterval(time, 1000);