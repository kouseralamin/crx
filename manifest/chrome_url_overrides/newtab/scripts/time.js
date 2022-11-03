async function time() {
    return fetch(SECRET.time).then((value) => {
        return value.text();
    }).then((value) => {
        window.localStorage.setItem("time", value);
        return value;
    }).catch((_error) => {
        return window.localStorage.getItem("time");
    })
}