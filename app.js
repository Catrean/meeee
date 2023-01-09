function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(displayTime, 1000);