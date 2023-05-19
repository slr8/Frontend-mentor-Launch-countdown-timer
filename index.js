const second = document.getElementById("seconds")
const minute = document.getElementById("minutes")
const hour = document.getElementById("hours")
const day = document.getElementById("days")

var countDownDate = new Date("July 21, 2023 00:00:00").getTime();

var x = setInterval(function () {
    var currentDate = new Date().getTime();
    var distance = countDownDate - currentDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds < 10 ? second.innerHTML = "0" + seconds : second.innerHTML = seconds
    minutes < 10 ? minute.innerHTML = "0" + minutes : minute.innerHTML = minutes
    hours < 10 ? hour.innerHTML = "0" + hours : hour.innerHTML = hours
    days < 10 ? day.innerHTML = "0" + days : day.innerHTML = days
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);