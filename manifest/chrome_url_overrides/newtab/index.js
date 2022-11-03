window.document.getElementById("weather").innerText = window.localStorage.getItem("weather");
sha512(window.localStorage.getItem("time")).then((value) => {
    window.document.getElementById("time").innerText = value;
})

weather().then((value) => {
    window.document.getElementById("weather").innerText = value;
})

time().then((value) => {
    window.document.getElementById("time").innerText = value;
})