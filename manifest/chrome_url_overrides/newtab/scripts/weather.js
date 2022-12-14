async function weather() {
    return fetch(SECRET.weather).then((value) => {
        return value.text();
    }).then((value) => {
        window.localStorage.setItem("weather", value.replace(/  +/g, " "));
        return value.replace(/  +/g, " ");
    }).catch((_error) => {
        return window.localStorage.getItem("weather");
    })
}